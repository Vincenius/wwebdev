// Ported from legacy-next/components/LoaderGenerator (React island).
// Framework/styling stack changes only:
//   - styled-components  → plain-CSS classes (src/styles/loader-generator.css)
//     for layout/controls, plus an inline <style> tag per demo loader that
//     injects the exact same generated CSS the original styled components did.
//   - @mui/material Slider → <input type="range"> (same min/max/step/value).
//   - @mui/material FormLabel → <label>. MUI Button/CopyLink <a> → <button>/<a>.
//   - @mui/icons-material FileCopy → inline SVG.
//   - react-color SketchPicker → native <input type="color">.
// React logic (useState, settings object, active variant, cssString via the
// ported getCssString) is preserved verbatim; generated output stays identical.
import { useState } from 'react'
import {
    getCssString,
    getLoaderCss,
    getLoaderAnimation,
    getLoaderDotsCss,
    getLoaderDotsAnimation,
    getLoaderRingCss,
    getLoaderRingAfter,
    getLoaderRingAnimation,
    getLoaderHourglasCss,
    getLoaderHourglasAfter,
    getLoaderHourglasAnimation,
} from './loaderGenerator.css'
import type { LoaderSettings } from './loaderGenerator.css'
import '../../styles/loader-generator.css'

// ui/constants.js → blue
const blue = '#1E4D92'

const FileCopyIcon = () => (
    <svg
        viewBox="0 0 24 24"
        width="0.7em"
        height="0.7em"
        fill="currentColor"
        aria-hidden="true"
        style={{ verticalAlign: 'middle' }}
    >
        <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
    </svg>
)

const CopyButton = ({ cssString }: { cssString: string }) => {
    const [showCopied, setShowCopied] = useState(false)
    const copyToClipboard = () => {
        if (typeof navigator !== 'undefined' && navigator.clipboard) {
            navigator.clipboard.writeText(cssString)
        }
        setShowCopied(true)

        setTimeout(() => {
            setShowCopied(false)
        }, 2000)
    }

    return (
        <a
            className={`lg-copy-link${showCopied ? ' lg-copied' : ''}`}
            onClick={() => copyToClipboard()}
        >
            <FileCopyIcon /> Copy Code
        </a>
    )
}

// Per-variant demo CSS, injected via a scoped <style> tag so the live loader is
// pixel-identical to the styled-components output.
const getDemoStyles = (className: string, settings: LoaderSettings) => {
    return `
.${className}.lg-loader-0 {${getLoaderCss(settings)}}
${getLoaderAnimation()}
.${className}.lg-loader-1 {${getLoaderDotsCss(settings)}}
${getLoaderDotsAnimation()}
.${className}.lg-loader-2 {${getLoaderRingCss(settings)}}
.${className}.lg-loader-2::after {${getLoaderRingAfter(settings)}}
${getLoaderRingAnimation()}
.${className}.lg-loader-3 {${getLoaderHourglasCss(settings)}}
.${className}.lg-loader-3::after {${getLoaderHourglasAfter(settings)}}
${getLoaderHourglasAnimation()}
`
}

export default function LoaderGenerator() {
    const [settings, setSettings] = useState<LoaderSettings>({
        color: blue,
        count: 10,
        size: 10,
        gap: 10,
        speed: 1000,
    })
    const [activeLoader, setActiveLoader] = useState(0)
    const cssString = getCssString({ settings, variant: activeLoader })

    return (
        <div>
            {/* Scoped demo styles for the four live loaders. */}
            <style
                dangerouslySetInnerHTML={{ __html: getDemoStyles('lg-loader', settings) }}
            />

            <div className="lg-control-container">
                <div>
                    <label className="lg-color-picker">
                        <input
                            type="color"
                            value={settings.color}
                            onChange={(e) => setSettings({ ...settings, color: e.target.value })}
                        />
                        <span className="lg-color-value">{settings.color}</span>
                    </label>
                </div>
                <div className="lg-slider-container">
                    <label className="lg-form-label">Count</label>
                    <input
                        type="range"
                        className="lg-slider"
                        value={settings.count}
                        onChange={(e) =>
                            setSettings({ ...settings, count: Number(e.target.value) })
                        }
                        aria-labelledby="breakpoint slider"
                        min={5}
                        max={30}
                        step={1}
                    />

                    <label className="lg-form-label">Size</label>
                    <input
                        type="range"
                        className="lg-slider"
                        value={settings.size}
                        onChange={(e) =>
                            setSettings({ ...settings, size: Number(e.target.value) })
                        }
                        aria-labelledby="breakpoint slider"
                        min={2}
                        max={20}
                        step={1}
                    />

                    <label className="lg-form-label">Gap</label>
                    <input
                        type="range"
                        className="lg-slider"
                        value={settings.gap}
                        onChange={(e) =>
                            setSettings({ ...settings, gap: Number(e.target.value) })
                        }
                        aria-labelledby="breakpoint slider"
                        min={2}
                        max={30}
                        step={1}
                    />

                    <label className="lg-form-label">Animation duration</label>
                    <input
                        type="range"
                        className="lg-slider"
                        value={settings.speed}
                        onChange={(e) =>
                            setSettings({ ...settings, speed: Number(e.target.value) })
                        }
                        aria-labelledby="breakpoint slider"
                        min={500}
                        max={2000}
                        step={50}
                    />
                </div>
            </div>

            <div className="lg-loader-container">
                <div
                    className={`lg-loader-card${activeLoader === 0 ? ' lg-active' : ''}`}
                    onClick={() => setActiveLoader(0)}
                >
                    <div className="lg-loader lg-loader-0" />
                </div>
                <div
                    className={`lg-loader-card${activeLoader === 1 ? ' lg-active' : ''}`}
                    onClick={() => setActiveLoader(1)}
                >
                    <div className="lg-loader lg-loader-1" />
                </div>
                <div
                    className={`lg-loader-card${activeLoader === 2 ? ' lg-active' : ''}`}
                    onClick={() => setActiveLoader(2)}
                >
                    <div className="lg-loader lg-loader-2" />
                </div>
                <div
                    className={`lg-loader-card${activeLoader === 3 ? ' lg-active' : ''}`}
                    onClick={() => setActiveLoader(3)}
                >
                    <div className="lg-loader lg-loader-3" />
                </div>
            </div>

            <div className="lg-code-block">
                <label className="lg-code-label">
                    <CopyButton cssString={cssString} />
                </label>
                <pre className="lg-code-pre">
                    <code>{cssString}</code>
                </pre>
            </div>
        </div>
    )
}
