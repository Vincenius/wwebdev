import { useState } from 'react'
import type { ReactNode } from 'react'
import CopyButton from '../../react/CopyButton'

interface DemoProps {
    children?: ReactNode
    preview: ReactNode
    source: string
    credit: string
    htmlCode: string
    cssCode: string
}

export default function Demo({ children, preview, source, credit, htmlCode, cssCode }: DemoProps) {
    const [showControls, toggleControls] = useState(true)
    const [tab, setTab] = useState(0)

    const code = tab === 0 ? htmlCode : cssCode

    return (
        <div>
            <div className="acbg-browser-mockup">
                <div className="acbg-browser-head">
                    <div className="acbg-browser-dots" />
                </div>
                <div className="acbg-browser-content">
                    {preview}
                    <div className="acbg-control-container">
                        <header className="acbg-header">
                            <h3>Controls</h3>
                            <button
                                type="button"
                                className="ui-unbutton acbg-toggle"
                                aria-expanded={showControls}
                                onClick={() => toggleControls(!showControls)}
                            >
                                {showControls ? 'hide' : 'show'}
                            </button>
                        </header>
                        {showControls && children}
                        {showControls && (
                            <div className="acbg-source">
                                <span>Credit: {credit}</span>
                                <a href={source} target="_blank" rel="noopener">
                                    Source
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <h2 className="ui-subheadline">Get the background code</h2>
            <div className="acbg-controls-card">
                <div
                    className="acbg-tabs"
                    role="tablist"
                    aria-label="generated code for the animated background"
                >
                    <button
                        type="button"
                        role="tab"
                        aria-selected={tab === 0}
                        className={`acbg-tab${tab === 0 ? ' active' : ''}`}
                        onClick={() => setTab(0)}
                    >
                        HTML
                    </button>
                    <button
                        type="button"
                        role="tab"
                        aria-selected={tab === 1}
                        className={`acbg-tab${tab === 1 ? ' active' : ''}`}
                        onClick={() => setTab(1)}
                    >
                        CSS
                    </button>
                </div>
                <div className="acbg-control-content">
                    <CopyButton
                        text={code}
                        label="Copy"
                        copiedLabel="copied"
                        className="acbg-copy-container"
                        iconSize={20}
                        ariaLabel={tab === 0 ? 'Copy HTML' : 'Copy CSS'}
                    />
                    <textarea className="acbg-code-area" value={code} readOnly />
                </div>
            </div>
        </div>
    )
}
