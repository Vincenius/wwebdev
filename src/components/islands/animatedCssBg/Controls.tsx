// Ported from
// legacy-next/components/AnimatedCssBackgroundGenerator/Controls.js
// styled-components → plain-CSS classes (acbg-*, see
// src/styles/animated-css-background-generator.css).
// @mui/icons-material/FileCopy → inline SVG.
// Copy uses navigator.clipboard in the handler (guarded), replacing the old
// textarea.select() + document.execCommand('copy').
import { useRef, useState } from 'react'
import type { ReactNode } from 'react'

const FileCopyIcon = ({ onClick }: { onClick: () => void }) => (
    <svg
        onClick={onClick}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        style={{ fontSize: '18px', width: '18px', height: '18px', cursor: 'pointer' }}
    >
        <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
    </svg>
)

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
    const [copiedCode, showCopied] = useState('')

    const htmlTextArea = useRef<HTMLTextAreaElement>(null)
    const cssTextArea = useRef<HTMLTextAreaElement>(null)

    const copyToClipboard = (
        textArea: React.RefObject<HTMLTextAreaElement | null>,
        areaName: string,
    ) => {
        const el = textArea.current
        if (el) {
            el.select()
            if (typeof navigator !== 'undefined' && navigator.clipboard) {
                navigator.clipboard.writeText(el.value)
            }
        }
        showCopied(areaName)

        setTimeout(() => {
            showCopied('')
        }, 2000)
    }

    return (
        <div>
            <div className="acbg-container">
                <div className="acbg-nav">
                    <a
                        onClick={() => changeBg(0)}
                        className={activeBg === 0 ? 'active' : ''}
                    >
                        Demo 1
                    </a>
                    <a
                        onClick={() => changeBg(1)}
                        className={activeBg === 1 ? 'active' : ''}
                    >
                        Demo 2
                    </a>
                    <a
                        onClick={() => changeBg(2)}
                        className={activeBg === 2 ? 'active' : ''}
                    >
                        Demo 3
                    </a>
                </div>
                <header className={`acbg-header${!showControl ? ' acbg-no-margin' : ''}`}>
                    <h3>Controls</h3>
                    <a
                        onClick={(e) => {
                            e.preventDefault()
                            toggleControl(!showControl)
                        }}
                        href="#"
                    >
                        {showControl && 'hide'}
                        {!showControl && 'show'}
                    </a>
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
                    <a
                        onClick={(e) => {
                            e.preventDefault()
                            toggleCode(!showCode)
                        }}
                        href="#"
                    >
                        {showCode && 'hide'}
                        {!showCode && 'show'}
                    </a>
                </header>

                {showCode && (
                    <div>
                        <header className="acbg-header acbg-no-margin">
                            <span>HTML</span>
                            <div>
                                <span
                                    className={`acbg-copied${
                                        copiedCode === 'html' ? ' acbg-visible' : ''
                                    }`}
                                >
                                    copied
                                </span>
                                <FileCopyIcon
                                    onClick={() => copyToClipboard(htmlTextArea, 'html')}
                                />
                            </div>
                        </header>

                        <textarea
                            className="acbg-code-area acbg-margin-bottom"
                            value={htmlCode}
                            readOnly
                            ref={htmlTextArea}
                        />

                        <header className="acbg-header acbg-no-margin">
                            <span>CSS</span>
                            <div>
                                <span
                                    className={`acbg-copied${
                                        copiedCode === 'css' ? ' acbg-visible' : ''
                                    }`}
                                >
                                    copied
                                </span>
                                <FileCopyIcon
                                    onClick={() => copyToClipboard(cssTextArea, 'css')}
                                />
                            </div>
                        </header>
                        <textarea
                            className="acbg-code-area"
                            value={cssCode}
                            readOnly
                            ref={cssTextArea}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}
