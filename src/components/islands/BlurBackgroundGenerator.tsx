// Ported from legacy-next/components/BlurBackgroundGenerator/{index.js,Controls.js}.
// React island (client-side). Logic, state and the generated HTML/CSS strings are
// preserved verbatim so the produced output stays pixel-identical to the original.
//
// The whole sidebar layout lives in the island because the live preview and both
// Controls instances (mobile + sidebar) share the same `values` state. The static
// <Ad/> and <Featured/> Astro components are passed in as server-rendered slots
// (adTop, adSidebar, featured) so they keep their original props/markup.
//
// Control replacements (styling in src/styles/blur-background-generator.css):
//   @mui Slider            -> <input type="range"> (same min/max/step/value)
//   @mui Accordion*        -> native disclosure via a <button> summary
//   @mui Button (NavButton)-> <button>
//   @mui TextareaAutosize  -> <textarea>
//   @mui icons             -> inline SVG
//   react-color            -> (already native <input type="color"> in original)
import { useRef, useState } from 'react'
import type { ReactNode, RefObject } from 'react'
import '../../styles/blur-background-generator.css'

type Circle = {
    color: [string, string]
    size: number
    left: number
    top: number
}

type Values = {
    bgColor: [string, string]
    circles: Circle[]
}

// ---- Generated CSS string helpers (verbatim from styled.js) ----
const backgroundCss = ({ bgColor }: Values): string =>
    `
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(to right, ${bgColor[0]}, ${bgColor[1]});
    display: flex;
    flex-grow: 1;
`

const generalCircleCss = (): string =>
    `
    position: absolute;
    border-radius: 100%;
    height: 0;
    filter: blur(240vw);
    opacity: 0.4;
`

const circleCss = ({
    index,
    color,
    size,
    left,
    top,
}: {
    index: number
    color: [string, string]
    size: number
    left: number
    top: number
}): string =>
    `div:nth-child(${index}) {
    background: linear-gradient(132deg, ${color[0]} 0.00%, ${color[1]} 100.00%);
    width: ${size}%;
    padding-top: ${size}%;
    left: ${left}%;
    top: ${top}%;
    transform: translateX(-50%) translateY(-50%);
}

`

const generateCircle = (): Circle => {
    const left = Math.floor(Math.random() * 100)
    const top = Math.floor(Math.random() * 100)
    const size = Math.floor(Math.random() * 100)
    const color1 = `#${Math.floor(Math.random() * 16777215).toString(16)}`
    const color2 = `#${Math.floor(Math.random() * 16777215).toString(16)}`
    return { color: [color1, color2], size, top, left }
}

// ---- Inline icons (replace @mui/icons-material/*) ----
const ExpandMoreIcon = () => (
    <svg className="bbg-expand-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
    </svg>
)

const FileCopyIcon = ({ onClick }: { onClick: () => void }) => (
    <svg
        onClick={onClick}
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{ fontSize: '18px', cursor: 'pointer' }}
    >
        <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
    </svg>
)

const ArrowLeft = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14 7l-5 5 5 5V7z" />
    </svg>
)
const ArrowRight = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M10 17l5-5-5-5v10z" />
    </svg>
)

// ---- Accordion (replaces @mui Accordion/AccordionSummary/AccordionDetails) ----
function Accordion({
    title,
    defaultExpanded = false,
    children,
}: {
    title: string
    defaultExpanded?: boolean | undefined
    children: ReactNode
}) {
    const [open, setOpen] = useState(defaultExpanded)
    return (
        <div className={`bbg-accordion${open ? ' is-open' : ''}`}>
            <button
                type="button"
                className="bbg-accordion-summary"
                aria-controls="blur background configuration"
                aria-expanded={open}
                onClick={() => setOpen(!open)}
            >
                <b>{title}</b>
                <ExpandMoreIcon />
            </button>
            {/* Keep details mounted (hidden via CSS) like MUI's Accordion, so the
                generated code is present in the DOM even when collapsed. */}
            <div className="bbg-accordion-details" style={{ display: open ? undefined : 'none' }}>
                {children}
            </div>
        </div>
    )
}

// ---- Controls (ported from Controls.js) ----
function Controls({
    htmlCode = '',
    cssCode = '',
    values,
    setValues,
}: {
    htmlCode?: string | undefined
    cssCode?: string | undefined
    values: Values
    setValues: (v: Values) => void
}) {
    const [activeCircle, setActiveCircle] = useState(0)
    const [copiedCode, showCopied] = useState('')

    // activeCircle is always a valid index by construction (clamped on count
    // changes); non-null local keeps parity under noUncheckedIndexedAccess.
    const circle = values.circles[activeCircle]!

    const htmlTextArea = useRef<HTMLTextAreaElement>(null)
    const cssTextArea = useRef<HTMLTextAreaElement>(null)

    const copyToClipboard = (textArea: RefObject<HTMLTextAreaElement | null>, areaName: string) => {
        const el = textArea.current
        if (!el) return
        // Original selected the textarea + document.execCommand('copy'); keep the
        // select for UX and copy via the clipboard API (guarded for SSR safety).
        el.select()
        if (typeof navigator !== 'undefined' && navigator.clipboard) {
            navigator.clipboard.writeText(el.value).catch(() => {})
        }
        showCopied(areaName)

        setTimeout(() => {
            showCopied('')
        }, 2000)
    }

    return (
        <>
            <h2 className="ui-subheadline">Configuration</h2>

            <Accordion title="Settings" defaultExpanded={true}>
                <div className="bbg-container">
                    <label>Background gradient</label>
                    <input
                        type="color"
                        value={values.bgColor[0]}
                        onChange={(e) => {
                            setValues({ ...values, bgColor: [e.target.value, values.bgColor[1]] })
                        }}
                    />
                    <input
                        type="color"
                        value={values.bgColor[1]}
                        onChange={(e) => {
                            setValues({ ...values, bgColor: [values.bgColor[0], e.target.value] })
                        }}
                    />

                    <label>Circle Count</label>
                    <input
                        type="range"
                        className="bbg-slider"
                        aria-labelledby={`circle count`}
                        step={1}
                        min={1}
                        max={10}
                        value={values.circles.length}
                        onChange={(event) => {
                            const value = Number(event.target.value)
                            const newCircles = [...values.circles]

                            if (value < values.circles.length) {
                                if (activeCircle >= value) {
                                    setActiveCircle(activeCircle - 1)
                                }
                                newCircles.length = value
                            } else if (value > values.circles.length) {
                                while (value > newCircles.length) {
                                    const newCircle = generateCircle()
                                    newCircles.push(newCircle)
                                }
                            }

                            setValues({ ...values, circles: newCircles })
                        }}
                    />

                    <div className="bbg-circle-container">
                        <button
                            type="button"
                            className="bbg-nav-button"
                            aria-label="prev circle"
                            disabled={activeCircle === 0}
                            onClick={() => setActiveCircle(activeCircle - 1)}
                        >
                            <ArrowLeft />
                        </button>
                        <div className="bbg-circle-controls">
                            <label>#{activeCircle + 1} Circle</label>
                            <input
                                type="color"
                                value={circle.color[0]}
                                onChange={(e) => {
                                    const newCircles = [...values.circles]
                                    newCircles[activeCircle]!.color[0] = e.target.value
                                    setValues({ ...values, circles: newCircles })
                                }}
                            />
                            <input
                                type="color"
                                value={circle.color[1]}
                                onChange={(e) => {
                                    const newCircles = [...values.circles]
                                    newCircles[activeCircle]!.color[1] = e.target.value
                                    setValues({ ...values, circles: newCircles })
                                }}
                            />
                            <label>Top Position</label>
                            <input
                                type="range"
                                className="bbg-slider"
                                aria-labelledby={`circle ${activeCircle + 1} top position`}
                                step={1}
                                min={0}
                                max={100}
                                value={circle.top}
                                onChange={(event) => {
                                    const value = Number(event.target.value)
                                    const newCircles = [...values.circles]
                                    newCircles[activeCircle]!.top = value
                                    setValues({ ...values, circles: newCircles })
                                }}
                            />
                            <label>Left Position</label>
                            <input
                                type="range"
                                className="bbg-slider"
                                aria-labelledby={`circle ${activeCircle + 1} top position`}
                                step={1}
                                min={0}
                                max={100}
                                value={circle.left}
                                onChange={(event) => {
                                    const value = Number(event.target.value)
                                    const newCircles = [...values.circles]
                                    newCircles[activeCircle]!.left = value
                                    setValues({ ...values, circles: newCircles })
                                }}
                            />
                            <label>Size</label>
                            <input
                                type="range"
                                className="bbg-slider"
                                aria-labelledby={`circle ${activeCircle + 1} size`}
                                step={1}
                                min={0}
                                max={150}
                                value={circle.size}
                                onChange={(event) => {
                                    const value = Number(event.target.value)
                                    const newCircles = [...values.circles]
                                    newCircles[activeCircle]!.size = value
                                    setValues({ ...values, circles: newCircles })
                                }}
                            />
                        </div>
                        <button
                            type="button"
                            className="bbg-nav-button"
                            aria-label="next circle"
                            onClick={() => setActiveCircle(activeCircle + 1)}
                            disabled={activeCircle + 1 === values.circles.length}
                        >
                            <ArrowRight />
                        </button>
                    </div>
                </div>
            </Accordion>

            <Accordion title="Code">
                <div className="bbg-container">
                    <header className="bbg-header">
                        <span>HTML</span>
                        <div>
                            <span className={`bbg-copied${copiedCode === 'html' ? ' is-visible' : ''}`}>
                                copied
                            </span>
                            <FileCopyIcon onClick={() => copyToClipboard(htmlTextArea, 'html')} />
                        </div>
                    </header>

                    <textarea
                        className="bbg-code-area has-margin-bottom"
                        value={htmlCode}
                        readOnly
                        ref={htmlTextArea}
                    />

                    <header className="bbg-header">
                        <span>CSS</span>
                        <div>
                            <span className={`bbg-copied${copiedCode === 'css' ? ' is-visible' : ''}`}>
                                copied
                            </span>
                            <FileCopyIcon onClick={() => copyToClipboard(cssTextArea, 'css')} />
                        </div>
                    </header>
                    <textarea className="bbg-code-area" value={cssCode} readOnly ref={cssTextArea} />
                </div>
            </Accordion>
        </>
    )
}

// ---- BrowserMockup (ported from legacy-next/components/BrowserMockup) ----
function BrowserMockup({ children }: { children: ReactNode }) {
    return (
        <div className="bbg-browser-mockup">
            <div className="bbg-browser-head">
                <div className="bbg-browser-dots"></div>
            </div>
            <div className="bbg-browser-content">{children}</div>
        </div>
    )
}

// ---- Root component (ported from index.js) ----
// adTop / adSidebar / featured are server-rendered Astro slots forwarded from the
// .astro page (see slot="..." usage there).
export default function BlurBackgroundGenerator({
    adTop,
    adSidebar,
    featured,
}: {
    adTop?: ReactNode
    adSidebar?: ReactNode
    featured?: ReactNode
}) {
    const [values, setValues] = useState<Values>({
        bgColor: ['#FFFFFF', '#ECE9E6'],
        circles: [
            { color: ['#1FCFC3', '#1F91CF'], size: 30, left: 20, top: 20 },
            { color: ['#0800FF', '#E32BE3'], size: 40, left: 50, top: 50 },
            { color: ['#1FCFC3', '#1F91CF'], size: 30, left: 80, top: 80 },
        ],
    })

    const generateHtmlCode = () => {
        let htmlCode = '<div class="background">\n'
        for (let i = 0; i < values.circles.length; i++) {
            htmlCode = htmlCode + '   <div></div>\n'
        }
        return htmlCode + '</div>'
    }

    const generateCssCode = () => {
        const backgroundCssStr = `.background {${backgroundCss(values)}}`
        const generalCircleCssStr = `.background div {${generalCircleCss()}}`
        let circleCssStr = ''

        for (let i = 0; i < values.circles.length; i++) {
            circleCssStr = `${circleCssStr}.background ${circleCss({
                ...values.circles[i]!,
                index: i + 1,
            })}`
        }

        return `${backgroundCssStr}

${generalCircleCssStr}

${circleCssStr}`
    }

    const htmlCode = generateHtmlCode()
    const cssCode = generateCssCode()

    return (
        <div className="ui-container">
            <div className="ui-sidebar-container">
            <article className="ui-sidebar-article">
                <h1 className="ui-section-headline">Blur Background CSS Generator</h1>

                <div className="ui-mobile-only">{adTop}</div>

                <BrowserMockup>
                    <div
                        className="bbg-background"
                        style={{
                            background: `linear-gradient(to right, ${values.bgColor[0]}, ${values.bgColor[1]})`,
                        }}
                    >
                        {/* https://cssgradient.io/gradient-backgrounds/ */}
                        {values.circles.map((c, i) => (
                            <div
                                key={`circle-${i}`}
                                style={{
                                    background: `linear-gradient(132deg, ${c.color[0]} 0.00%, ${c.color[1]} 100.00%)`,
                                    width: `${c.size}%`,
                                    paddingTop: `${c.size}%`,
                                    left: `${c.left}%`,
                                    top: `${c.top}%`,
                                }}
                            ></div>
                        ))}
                    </div>
                </BrowserMockup>

                <div className="ui-mobile-only">
                    <Controls
                        values={values}
                        setValues={setValues}
                        htmlCode={htmlCode}
                        cssCode={cssCode}
                    />
                </div>

                <p>
                    This is a tool to generate the CSS for a customizable blur background. Afterward,
                    you can easily copy the code and use it on your website.
                </p>
                <p>
                    You can customize the gradient background color as well as the gradient color of the
                    circles. You can set the position and the size of the circles as well.
                </p>
                <p>
                    As everything on wweb.dev this tool is under the{' '}
                    <a
                        href="https://choosealicense.com/licenses/mit/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        MIT license
                    </a>
                    . This means that you can use the generated backgrounds for commercial or private
                    projects without attribution.
                </p>
                <p>
                    If you like the generated blur backgrounds or use them anywhere in your project, I'd
                    be happy if you'd let me know. Also, feedback for this generator is always welcome.
                    Just pass me a message on{' '}
                    <a href="https://twitter.com/wweb_dev" target="_blank" rel="noopener noreferrer">
                        Twitter
                    </a>{' '}
                    or via email: <a href="mailto:info@wweb.dev">info@wweb.dev</a>.
                </p>
                <h2 className="ui-subheadline">You might also like</h2>
                {featured}
            </article>
            <aside className="ui-sidebar hide-on-mobile">
                {adSidebar}
                <Controls
                    values={values}
                    setValues={setValues}
                    htmlCode={htmlCode}
                    cssCode={cssCode}
                />
            </aside>
            </div>
        </div>
    )
}
