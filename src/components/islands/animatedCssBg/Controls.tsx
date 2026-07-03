// Ported from
// legacy-next/components/AnimatedCssBackgroundGenerator/Controls.js
// styled-components → plain-CSS classes (acbg-*, see
// src/styles/animated-css-background-generator.css).
// @mui/icons-material/FileCopy → shared <CopyButton> (components/react), which
// copies via navigator.clipboard (with execCommand fallback). The demo links
// and hide/show toggles are real <button>s (ui-unbutton) for keyboard access.
import { useState } from 'react'
import type { ReactNode } from 'react'
import CopyButton from '../../react/CopyButton'

interface ControlsProps {
    children?: ReactNode
    source: string
    credit: string
    htmlCode: string
    cssCode: string
    changeBg: (index: number) => void
    activeBg: number
}

export default function Controls({
    children,
    source,
    credit,
    htmlCode,
    cssCode,
    changeBg,
    activeBg,
}: ControlsProps) {
    const [showControl, toggleControl] = useState(true)
    const [showCode, toggleCode] = useState(false)

    return (
        <div>
            <div className="acbg-container">
                <div className="acbg-nav">
                    <button
                        type="button"
                        onClick={() => changeBg(0)}
                        className={`ui-unbutton${activeBg === 0 ? ' active' : ''}`}
                    >
                        Demo 1
                    </button>
                    <button
                        type="button"
                        onClick={() => changeBg(1)}
                        className={`ui-unbutton${activeBg === 1 ? ' active' : ''}`}
                    >
                        Demo 2
                    </button>
                    <button
                        type="button"
                        onClick={() => changeBg(2)}
                        className={`ui-unbutton${activeBg === 2 ? ' active' : ''}`}
                    >
                        Demo 3
                    </button>
                </div>
                <header className={`acbg-header${!showControl ? ' acbg-no-margin' : ''}`}>
                    <h3>Controls</h3>
                    <button
                        type="button"
                        className="ui-unbutton acbg-toggle"
                        aria-expanded={showControl}
                        onClick={() => toggleControl(!showControl)}
                    >
                        {showControl && 'hide'}
                        {!showControl && 'show'}
                    </button>
                </header>

                {showControl && children}
                {showControl && (
                    <div className="acbg-source">
                        <span>Credit: {credit}</span>
                        <a href={source} target="_blank" rel="noopener">
                            Source
                        </a>
                    </div>
                )}
            </div>
            <div className="acbg-container">
                <header className={`acbg-header${!showCode ? ' acbg-no-margin' : ''}`}>
                    <h3>Code</h3>
                    <button
                        type="button"
                        className="ui-unbutton acbg-toggle"
                        aria-expanded={showCode}
                        onClick={() => toggleCode(!showCode)}
                    >
                        {showCode && 'hide'}
                        {!showCode && 'show'}
                    </button>
                </header>

                {showCode && (
                    <div>
                        <header className="acbg-header acbg-no-margin">
                            <span>HTML</span>
                            <CopyButton
                                text={htmlCode}
                                label=""
                                copiedLabel="copied"
                                iconSize={18}
                                ariaLabel="Copy HTML"
                            />
                        </header>

                        <textarea
                            className="acbg-code-area acbg-margin-bottom"
                            value={htmlCode}
                            readOnly
                        />

                        <header className="acbg-header acbg-no-margin">
                            <span>CSS</span>
                            <CopyButton
                                text={cssCode}
                                label=""
                                copiedLabel="copied"
                                iconSize={18}
                                ariaLabel="Copy CSS"
                            />
                        </header>
                        <textarea className="acbg-code-area" value={cssCode} readOnly />
                    </div>
                )}
            </div>
        </div>
    )
}
