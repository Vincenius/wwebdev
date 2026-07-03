// Ported from
// legacy-next/components/AnimatedCssBackgroundGenerator/Background3.js
// (exported there as `Background2`, rendered as the third demo). React class →
// function component (useState). @mui/material/Slider → <input type="range">.
// Color <input type="color"> preserved. The styled Container (styledBg3.js) is
// rendered via a scoped <style> tag so the live background is pixel-identical.
import { useMemo, useState } from 'react'
import Controls from './Controls'
import { createKeyframe, backgroundCss, liStyle, liChildStyle } from './bg3.css'

interface Props {
    changeBg: (index: number) => void
    activeBg: number
}

export default function Background3({ changeBg, activeBg }: Props) {
    const [bgColor, setBgColor] = useState('#0040C1')
    const [count, setCount] = useState(6)
    const [speed, setSpeed] = useState(16)

    const generateHtmlCode = () => {
        let htmlCode = '<ul class="background">\n'
        for (let i = 0; i < count; i++) {
            htmlCode = htmlCode + '   <li></li>\n'
        }
        return htmlCode + '</ul>'
    }

    const generateCssCode = () => {
        const bgCss = backgroundCss({ bgColor })
        const li = liStyle({ speed, bgColor })
        const liChild = liChildStyle({ count, bgColor, addBgClass: true })
        return `${createKeyframe()}
.background {${bgCss}}
.background ${li}
${liChild}`
    }

    const buildList = () => {
        const items = []
        for (let i = 0; i < count; i++) {
            items.push(<li key={i}></li>)
        }
        return items
    }

    const htmlCode = generateHtmlCode()
    const cssCode = generateCssCode()

    // Live container CSS (matches styled Container: createKeyframe +
    // backgroundCss + liStyle + liChildStyle). Independent random draw from the
    // copyable code, as in the original.
    const containerStyle = useMemo(() => {
        const li = liStyle({ speed, bgColor }).replace(/^li /, '.acbg-bg3-container li ')
        const liChild = liChildStyle({ count, bgColor }).replace(
            /(^|\n)li:nth-child/g,
            '$1.acbg-bg3-container li:nth-child',
        )
        return `${createKeyframe()}
.acbg-bg3-container {${backgroundCss({ bgColor })}}
.acbg-bg3-container ${li}
${liChild}`
    }, [bgColor, count, speed])

    return (
        <div>
            <Controls
                source="https://codepen.io/BjornRombaut/pen/mOLGgX"
                credit="Bjorn"
                htmlCode={htmlCode}
                cssCode={cssCode}
                changeBg={changeBg}
                activeBg={activeBg}
            >
                <label htmlFor="bg3-count">Count:</label>
                <input
                    type="range"
                    id="bg3-count"
                    step={1}
                    min={1}
                    max={40}
                    value={count}
                    onChange={(e) => setCount(Number(e.target.value))}
                />

                <label htmlFor="bg3-count">Speed:</label>
                <input
                    type="range"
                    id="bg3-count"
                    step={1}
                    min={1}
                    max={20}
                    value={speed}
                    onChange={(e) => setSpeed(Number(e.target.value))}
                />

                <label htmlFor="bg3-bg-color">Background Color:</label>
                <input
                    type="color"
                    id="bg3-bg-color"
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                />
            </Controls>

            <style dangerouslySetInnerHTML={{ __html: containerStyle }} />
            <ul className="acbg-bg3-container">{buildList()}</ul>
        </div>
    )
}
