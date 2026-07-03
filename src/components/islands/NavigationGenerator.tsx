// Ported from legacy-next/components/NavigationGenerator/index.js.
// React island (client:load). MUI Accordion/Button + styled-components + react-
// sizeme replaced with native <details>/<summary>, <button>, `ng-` classes and a
// ResizeObserver (see src/styles/navigation-generator.css). The generated HTML
// and CSS strings are produced by the verbatim helpers in
// ./navigationGenerator/{generator,cssGenerator}.ts and stay byte-identical to
// the legacy output.
import { useEffect, useMemo, useRef, useState } from 'react'
import CopyButton from '../react/CopyButton'
import '../../styles/navigation-generator.css'
import { htmlGenerator } from './navigationGenerator/generator'
import type { MenuItems } from './navigationGenerator/generator'
import { generateNavigationCss } from './navigationGenerator/cssGenerator'
import MenuItemsControl from './navigationGenerator/MenuItemsControl'
import StylingControl from './navigationGenerator/StylingControl'
import type { MenuStyle } from './navigationGenerator/StylingControl'

const defaultMenu: MenuItems = {
    logo: {
        url: 'https://wweb.dev/resources/navigation-generator/logo-placeholder.png',
        alt: 'My Awesome Website',
        link: '#',
        isUsed: true,
    },
    left: [
        { caption: 'Home', link: '#home' },
        { caption: 'Pricing', link: '#pricing' },
        { caption: 'Blog', link: '#blog' },
        { caption: 'Docs', link: '#docs' },
    ],
    right: [
        { caption: 'Sign-up', link: '#signup' },
        { caption: 'Login', link: '#login' },
    ],
}

const stylingOptions: MenuStyle = {
    primaryColor: '#232323',
    secondaryColor: '#cdcdcd',
    hoverColor: '#00C6A7',
    burgerMenuPosition: 'right', // or "left"
    breakpoint: 768,
}

const ExpandIcon = () => (
    <svg
        className="ng-expand-icon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" fill="currentColor" />
    </svg>
)

export default function NavigationGenerator() {
    const [menuItems, setMenuItems] = useState<MenuItems>(defaultMenu)
    const [menuStyle, setMenuStyle] = useState<MenuStyle>(stylingOptions)
    // Width-aware live preview: react-sizeme measured the preview width so the
    // demo could render only the relevant (mobile/desktop) branch. A
    // ResizeObserver reproduces that behaviour SSR-safely.
    const previewRef = useRef<HTMLDivElement | null>(null)
    const [previewWidth, setPreviewWidth] = useState<number | undefined>(undefined)

    useEffect(() => {
        const el = previewRef.current
        if (!el || typeof ResizeObserver === 'undefined') return
        const observer = new ResizeObserver((entries) => {
            for (const entry of entries) {
                setPreviewWidth(entry.contentRect.width)
            }
        })
        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    // Generated code is derived state — computed directly, no effect round-trip.
    const htmlCode = useMemo(() => htmlGenerator(menuItems), [menuItems])
    const cssCode = useMemo(
        () => generateNavigationCss({ ...menuStyle, useLogo: menuItems.logo.isUsed }),
        [menuStyle, menuItems],
    )

    // CSS for the live preview only — uses the measured width so the correct
    // responsive branch is applied inline (as the legacy styled.div did).
    const previewCss = useMemo(
        () =>
            generateNavigationCss({
                ...menuStyle,
                width: previewWidth,
                useLogo: menuItems.logo.isUsed,
            }),
        [menuStyle, menuItems, previewWidth],
    )

    return (
        <>
            <h2 className="ui-subheadline">Preview</h2>
            <div className="ng-browser-mockup">
                <div className="ng-browser-head">
                    <div className="ng-browser-dots" />
                </div>
                <div className="ng-browser-content">
                    <div className="ng-navigation" ref={previewRef}>
                        <style>{previewCss}</style>
                        <div dangerouslySetInnerHTML={{ __html: htmlCode }} />
                    </div>
                    <div className="ng-center">
                        <span>
                            This window is resizable.
                            <br />
                            Scroll down for customization & code.
                        </span>
                    </div>
                </div>
            </div>

            <h2 className="ui-subheadline">Configuration</h2>

            <details className="ng-accordion">
                <summary className="ng-accordion-summary">
                    <span>Menu Items</span>
                    <ExpandIcon />
                </summary>
                <div className="ng-accordion-details">
                    <MenuItemsControl menuItems={menuItems} setMenuItems={setMenuItems} />
                </div>
            </details>
            <details className="ng-accordion">
                <summary className="ng-accordion-summary">
                    <span>Styling</span>
                    <ExpandIcon />
                </summary>
                <div className="ng-accordion-details">
                    <StylingControl menuStyle={menuStyle} setMenuStyle={setMenuStyle} />
                </div>
            </details>

            <h2 className="ui-subheadline">Code</h2>

            <details className="ng-accordion">
                <summary className="ng-accordion-summary ng-button-summary">
                    <span className="ng-summary-left">
                        HTML
                        <CopyButton
                            text={htmlCode}
                            label="Copy Code"
                            copiedLabel="copied"
                            className="ng-button ng-copy-button"
                        />
                    </span>
                    <ExpandIcon />
                </summary>
                <div className="ng-accordion-details">
                    <pre className="ng-code-block language-html">
                        <code>{htmlCode}</code>
                    </pre>
                </div>
            </details>
            <details className="ng-accordion">
                <summary className="ng-accordion-summary ng-button-summary">
                    <span className="ng-summary-left">
                        CSS
                        <CopyButton
                            text={cssCode}
                            label="Copy Code"
                            copiedLabel="copied"
                            className="ng-button ng-copy-button"
                        />
                    </span>
                    <ExpandIcon />
                </summary>
                <div className="ng-accordion-details">
                    <pre className="ng-code-block language-css">
                        <code>{cssCode}</code>
                    </pre>
                </div>
            </details>
        </>
    )
}
