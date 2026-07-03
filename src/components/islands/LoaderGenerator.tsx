// Ported from legacy-next/components/LoaderGenerator (React island).
// Framework/styling stack changes only:
//   - styled-components  → plain-CSS classes (src/styles/loader-generator.css)
//     for layout/controls, plus an inline <style> tag per demo loader that
//     injects the exact same generated CSS the original styled components did.
//   - @mui/material Slider → <input type="range"> (same min/max/step/value).
//   - @mui/material FormLabel → <label>. MUI Button/CopyLink <a> → <button>/<a>.
//   - @mui/icons-material FileCopy → shared <CopyButton> (components/react).
//   - react-color SketchPicker → native <input type="color">.
// React logic (useState, settings object, active variant, cssString via the
// ported getCssString) is preserved verbatim; generated output stays identical.
import { useState } from 'react'
import CopyButton from '../react/CopyButton'
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
            <style dangerouslySetInnerHTML={{ __html: getDemoStyles('lg-loader', settings) }} />

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
                    <label className="lg-form-label" htmlFor="lg-count">
                        Count
                    </label>
                    <input
                        type="range"
                        className="lg-slider"
                        id="lg-count"
                        value={settings.count}
                        onChange={(e) =>
                            setSettings({ ...settings, count: Number(e.target.value) })
                        }
                        min={5}
                        max={30}
                        step={1}
                    />

                    <label className="lg-form-label" htmlFor="lg-size">
                        Size
                    </label>
                    <input
                        type="range"
                        className="lg-slider"
                        id="lg-size"
                        value={settings.size}
                        onChange={(e) => setSettings({ ...settings, size: Number(e.target.value) })}
                        min={2}
                        max={20}
                        step={1}
                    />

                    <label className="lg-form-label" htmlFor="lg-gap">
                        Gap
                    </label>
                    <input
                        type="range"
                        className="lg-slider"
                        id="lg-gap"
                        value={settings.gap}
                        onChange={(e) => setSettings({ ...settings, gap: Number(e.target.value) })}
                        min={2}
                        max={30}
                        step={1}
                    />

                    <label className="lg-form-label" htmlFor="lg-speed">
                        Animation duration
                    </label>
                    <input
                        type="range"
                        className="lg-slider"
                        id="lg-speed"
                        value={settings.speed}
                        onChange={(e) =>
                            setSettings({ ...settings, speed: Number(e.target.value) })
                        }
                        min={500}
                        max={2000}
                        step={50}
                    />
                </div>
            </div>

            <div className="lg-loader-container">
                <button
                    type="button"
                    aria-label="Select loader style 1"
                    aria-pressed={activeLoader === 0}
                    className={`ui-unbutton lg-loader-card${activeLoader === 0 ? ' lg-active' : ''}`}
                    onClick={() => setActiveLoader(0)}
                >
                    <div className="lg-loader lg-loader-0" />
                </button>
                <button
                    type="button"
                    aria-label="Select loader style 2"
                    aria-pressed={activeLoader === 1}
                    className={`ui-unbutton lg-loader-card${activeLoader === 1 ? ' lg-active' : ''}`}
                    onClick={() => setActiveLoader(1)}
                >
                    <div className="lg-loader lg-loader-1" />
                </button>
                <button
                    type="button"
                    aria-label="Select loader style 3"
                    aria-pressed={activeLoader === 2}
                    className={`ui-unbutton lg-loader-card${activeLoader === 2 ? ' lg-active' : ''}`}
                    onClick={() => setActiveLoader(2)}
                >
                    <div className="lg-loader lg-loader-2" />
                </button>
                <button
                    type="button"
                    aria-label="Select loader style 4"
                    aria-pressed={activeLoader === 3}
                    className={`ui-unbutton lg-loader-card${activeLoader === 3 ? ' lg-active' : ''}`}
                    onClick={() => setActiveLoader(3)}
                >
                    <div className="lg-loader lg-loader-3" />
                </button>
            </div>

            <div className="lg-code-block">
                <div className="lg-code-label">
                    <CopyButton text={cssString} className="lg-copy-link" />
                </div>
                <pre className="lg-code-pre">
                    <code>{cssString}</code>
                </pre>
            </div>
        </div>
    )
}
