// Ported from legacy-next/components/CssSeparatorGenerator (index.js + Controls.js + styled.js).
// React island (client-side). Drops styled-components / @mui/* / react-color:
//   - MUI Slider  → <input type="range">
//   - MUI Checkbox/FormControlLabel → <input type="checkbox"> + <label>
//   - MUI Card → <div class="csg-card"> / <div class="csg-controls-card">
//   - MUI Tabs/Tab → <button> tab strip
//   - MUI TextareaAutosize → <textarea>
//   - MUI icons (FileCopy / GitHub) → inline SVG
// The GENERATED HTML/CSS code strings are produced by the verbatim helpers in
// ./cssSeparator/codeGenerators — identical to the original output.
//
// The live preview reproduces the old styled-components behaviour by injecting a
// scoped <style> block: the generator functions emit rules containing `&` (or a
// `.class` selector); we replace `&` with the preview element's own selector.
import React, { useState } from 'react'
import { SEPARATORS, SEPARATOR_OPTIONS } from './cssSeparator/constants'
import type { SeparatorValue, SeparatorOptions, SliderOption } from './cssSeparator/constants'
import {
    generateHtmlCode,
    generateCssCode,
    generateSkewCss,
    generateSemiCircleCss,
    generateWaveCss,
    generateSpikesCss,
    generateTriangleCss,
    generateCurvedCss,
} from './cssSeparator/codeGenerators'

const FileCopyIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
    </svg>
)

const GitHubIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
)

// Build the scoped preview <style> for the current separator/options.
// Mirrors the styled.js mapping (S.SemiCircle/Spikes/Triangle/Curved extend
// S.Top with the pseudo-element rules; S.SkewBg/S.Wave are separate divs).
// A styled-components template string may begin with bare declarations (which
// apply to the element itself) followed by `&`-prefixed pseudo-element rules.
// Native CSS can't nest, so wrap the leading declarations in the element's own
// rule block and replace `&` with the element selector.
const scopeStyledString = (raw: string, selector: string): string => {
    const idx = raw.indexOf('&')
    if (idx === -1) {
        // Only declarations — wrap them for the element.
        return `${selector} {\n${raw}\n}`
    }
    const declarations = raw.slice(0, idx).trim()
    const pseudo = raw.slice(idx).replace(/&/g, selector)
    const declBlock = declarations ? `${selector} {\n${declarations}\n}\n\n` : ''
    return `${declBlock}${pseudo}`
}

const buildPreviewCss = (active: SeparatorValue, options: SeparatorOptions): string => {
    const top = '.csg-preview-top'
    const skewBg = '.csg-preview-skewbg'
    const wave = '.csg-preview-wave'

    if (active === SEPARATORS.SEMI_CIRCLE) {
        return scopeStyledString(generateSemiCircleCss(options), top)
    }
    if (active === SEPARATORS.SPIKES) {
        return scopeStyledString(generateSpikesCss(options), top)
    }
    if (active === SEPARATORS.TRIANGLE) {
        return scopeStyledString(generateTriangleCss(options), top)
    }
    if (active === SEPARATORS.CURVED) {
        return scopeStyledString(generateCurvedCss(options), top)
    }
    if (active === SEPARATORS.SKEWED) {
        // generateSkewCss returns only declarations (no pseudo-elements) — S.SkewBg.
        return `${skewBg} {\n  ${generateSkewCss(options as { angle: SliderOption; reversed?: boolean })}\n}`
    }
    if (active === SEPARATORS.WAVE) {
        // generateWaveCss (active undefined) — leading declarations + pseudo rules.
        return scopeStyledString(generateWaveCss(options), wave)
    }
    return ''
}

interface ControlsProps {
    options: SeparatorOptions
    active: SeparatorValue
}

const Controls: React.FC<ControlsProps> = ({ options, active }) => {
    const [value, setValue] = useState(0)
    const isVisible = true
    const [copiedCode, showCopied] = useState('')

    const htmlCode = generateHtmlCode(active)
    const cssCode = generateCssCode({ active, options })

    const htmlTextArea = React.useRef<HTMLTextAreaElement>(null)
    const cssTextArea = React.useRef<HTMLTextAreaElement>(null)

    const copyToClipboard = (
        textArea: React.RefObject<HTMLTextAreaElement | null>,
        areaName: string,
    ) => {
        const el = textArea.current
        if (!el) return
        el.select()
        if (typeof navigator !== 'undefined' && navigator.clipboard) {
            navigator.clipboard.writeText(el.value).catch(() => {})
        } else if (typeof document !== 'undefined') {
            document.execCommand('copy')
        }
        showCopied(areaName)

        setTimeout(() => {
            showCopied('')
        }, 2000)
    }

    return (
        <div className="csg-controls-card">
            <div className="csg-tabs" role="tablist" aria-label="controls for customizing the separator">
                <button
                    type="button"
                    className={`csg-tab${value === 0 ? ' active' : ''}`}
                    onClick={() => setValue(0)}
                >
                    HTML
                </button>
                <button
                    type="button"
                    className={`csg-tab${value === 1 ? ' active' : ''}`}
                    onClick={() => setValue(1)}
                >
                    CSS
                </button>
                <a
                    className="csg-github-link"
                    href="https://github.com/wwebdev/separator-generator"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <GitHubIcon />
                </a>
            </div>
            <div className="csg-control-content" style={{ display: isVisible ? 'block' : 'none' }}>
                {value === 0 && (
                    <div>
                        <div className="csg-copy-container" onClick={() => copyToClipboard(htmlTextArea, 'html')}>
                            <FileCopyIcon />
                            Copy
                        </div>
                        <span className={`csg-copied${copiedCode === 'html' ? ' visible' : ''}`}>copied</span>
                        <textarea className="csg-code-area csg-margin-bottom" value={htmlCode} readOnly ref={htmlTextArea} />
                    </div>
                )}
                {value === 1 && (
                    <div>
                        <div className="csg-copy-container" onClick={() => copyToClipboard(cssTextArea, 'css')}>
                            <FileCopyIcon />
                            Copy
                        </div>
                        <span className={`csg-copied${copiedCode === 'css' ? ' visible' : ''}`}>copied</span>
                        <textarea className="csg-code-area csg-margin-bottom" value={cssCode} readOnly ref={cssTextArea} />
                    </div>
                )}
            </div>
        </div>
    )
}

const BrowserMockup: React.FC<{ maxWidth?: number; children: React.ReactNode }> = ({
    maxWidth = 1080,
    children,
}) => (
    <div className="csg-browser-mockup" style={{ maxWidth: `${maxWidth}px` }}>
        <div className="csg-browser-head">
            <div className="csg-browser-dots" />
        </div>
        <div className="csg-browser-content">{children}</div>
    </div>
)

interface GeneratorProps {
    // Static Astro components (<Ad/>, <Featured/>) passed in as slotted children.
    ad?: React.ReactNode
    featured?: React.ReactNode
}

const Generator: React.FC<GeneratorProps> = ({ ad, featured }) => {
    const defaultSeparator: SeparatorValue = SEPARATORS.SKEWED
    const [active, setActive] = useState<SeparatorValue>(defaultSeparator)
    const [options, setOptions] = useState<SeparatorOptions>(SEPARATOR_OPTIONS[defaultSeparator]!)

    const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOptions({ ...options, [e.target.name]: e.target.checked })
    }

    const handleChange = (key: string, newVal: number) => {
        setOptions({
            ...options,
            [key]: {
                ...(options[key] as SliderOption),
                value: newVal,
            },
        })
    }

    const useSeparator = (val: SeparatorValue) => {
        setActive(val)
        setOptions(SEPARATOR_OPTIONS[val]!)
    }

    const noBgColor = active === SEPARATORS.SKEWED
    const previewCss = buildPreviewCss(active, options)

    return (
        <div className="ui-container">
            <h1 className="ui-section-headline">CSS Section Separator Generator</h1>
            <div className="ui-sidebar-container csg-sidebar-container">
                <article className="ui-sidebar-article">
                    <BrowserMockup maxWidth={730}>
                        <style dangerouslySetInnerHTML={{ __html: previewCss }} />
                        <section
                            className="csg-preview-top"
                            style={noBgColor ? { background: 'transparent' } : undefined}
                        >
                            {active === SEPARATORS.SKEWED && <div className="csg-preview-skewbg" />}
                            {active === SEPARATORS.WAVE && <div className="csg-preview-wave" />}
                        </section>
                        <div className="csg-control-container">
                            <h3>Controls</h3>
                            {options.reversed !== undefined && (
                                <label className="csg-form-control-label">
                                    <input
                                        type="checkbox"
                                        className="csg-checkbox"
                                        checked={options.reversed}
                                        onChange={handleCheck}
                                        name="reversed"
                                    />
                                    Reversed
                                </label>
                            )}
                            {Object.entries(options).map(([key, option]) =>
                                key !== 'reversed' && option && typeof option === 'object' ? (
                                    <div className="csg-slider-container" key={`${key}-slider`}>
                                        <label>{key}</label>
                                        <input
                                            type="range"
                                            className="csg-slider"
                                            value={(option as SliderOption).value}
                                            onChange={(e) => handleChange(key, Number(e.target.value))}
                                            aria-labelledby={`${key}-slider`}
                                            min={(option as SliderOption).min}
                                            max={(option as SliderOption).max}
                                            step={(option as SliderOption).step ?? 1}
                                        />
                                    </div>
                                ) : null,
                            )}
                        </div>
                    </BrowserMockup>

                    <h2 className="ui-subheadline">Get the separator code</h2>
                    <Controls options={options} active={active} />

                    <h2 className="ui-subheadline">CSS section divider description</h2>
                    <p>
                        With this CSS Section Separator Generator, you can choose between 6 different dividers.
                        Each of them can be customized by using the controls in the preview field.
                    </p>
                    <p>
                        The tool includes a skewed divider, a semi-circle divider, a wave divider, a spikes divider, a triangle divider and a curved divider.
                        Most of these dividers are pure CSS and using the ::before and ::after pseudo-elements. Some need an additional HTML element.
                    </p>

                    <h2 className="ui-subheadline">You might also like</h2>
                    {featured}
                </article>
                <aside className="ui-sidebar">
                    {ad}
                    <h2 className="ui-subheadline no-margin-bottom">Choose a section divider</h2>
                    <div className="csg-row">
                        {Object.entries(SEPARATORS).map(([, val]) => (
                            <div
                                className={`csg-card${active === val ? ' active' : ''}`}
                                key={`${val}-card`}
                                onClick={() => {
                                    useSeparator(val as SeparatorValue)
                                }}
                            >
                                <img src={`/resources/css-separators/${val}.png`} alt={`${val} preview`} />
                            </div>
                        ))}
                    </div>
                    <br />
                </aside>
            </div>
        </div>
    )
}

export default Generator
