// Shared copy-to-clipboard control for the generator islands. A real <button>
// (keyboard accessible) — pass generator-specific classes via className;
// `.ui-unbutton` strips the native button chrome.
import { useEffect, useRef, useState } from 'react'
import { CopyIcon } from './icons'

interface Props {
    text: string
    label?: string
    copiedLabel?: string
    className?: string
    iconSize?: number | string
    /** Accessible name for icon-only usages (label=""). */
    ariaLabel?: string
}

export default function CopyButton({
    text,
    label = 'Copy Code',
    copiedLabel = 'Copied!',
    className = '',
    iconSize,
    ariaLabel,
}: Props) {
    const [copied, setCopied] = useState(false)
    const timer = useRef<ReturnType<typeof setTimeout>>(null)

    useEffect(() => () => clearTimeout(timer.current ?? undefined), [])

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(text)
        } catch {
            // Clipboard API unavailable (http, old browser) — legacy fallback.
            const ta = document.createElement('textarea')
            ta.value = text
            document.body.appendChild(ta)
            ta.select()
            document.execCommand('copy')
            ta.remove()
        }
        setCopied(true)
        clearTimeout(timer.current ?? undefined)
        timer.current = setTimeout(() => setCopied(false), 2000)
    }

    return (
        <button
            type="button"
            className={`ui-unbutton ${className}`.trim()}
            {...(ariaLabel && { 'aria-label': ariaLabel })}
            onClick={copy}
        >
            <CopyIcon {...(iconSize !== undefined && { size: iconSize })} />{' '}
            {copied ? copiedLabel : label}
        </button>
    )
}
