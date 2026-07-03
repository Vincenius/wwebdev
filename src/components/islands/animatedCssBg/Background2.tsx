// Ported from
// legacy-next/components/AnimatedCssBackgroundGenerator/Background2.js
// React class → function component (useState). @mui/material/Slider →
// <input type="range">. Color <input type="color"> preserved. The styled
// Container (styledBg2.js) is rendered via a scoped <style> tag so the live
// background is pixel-identical to the styled-components output.
import { useMemo, useState } from 'react'
import Controls from './Controls'
import { createKeyframe, createCSS, generalCss, backgroundCss } from './bg2.css'

interface Props {
    changeBg: (index: number) => void
    activeBg: number
}

export default function Background2({ changeBg, activeBg }: Props) {
    const [bgColor, setBgColor] = useState('#4e54c8')
    const [count, setCount] = useState(10)
    const [size, setSize] = useState<[number, number]>([100, 200])
    const [speed, setSpeed] = useState(35)

    const buildList = () => {
        const items = []
        for (let i = 0; i < count; i++) {
            items.push(<li key={i}></li>)
        }
        return items
    }

    const generateHtmlCode = () => {
        let htmlCode = '<ul class="background">\n'
        for (let i = 0; i < count; i++) {
            htmlCode = htmlCode + '   <li></li>\n'
        }
        return htmlCode + '</ul>'
    }

    const generateCssCode = () => {
        const backgroundCssStr = `.background {${backgroundCss({ bgColor })}}`
        const generalCssStr = `.background ${generalCss({ speed })}`
        const liCss = `${createCSS({ addBgClass: true, count, size })}`

        return `${createKeyframe()}
${backgroundCssStr}
${generalCssStr}
${liCss}`
    }

    const htmlCode = generateHtmlCode()
    const cssCode = generateCssCode()

    // Live container CSS (matches styled Container: createKeyframe +
    // backgroundCss + generalCss + createCSS). Independent random draw from the
    // copyable code, as in the original.
    const containerStyle = useMemo(() => {
        const childRules = createCSS({ count, size }).replace(
            /(^|\n)li:nth-child/g,
            '$1.acbg-bg2-container li:nth-child',
        )
        const general = generalCss({ speed }).replace(/(^|\n)li /, '$1.acbg-bg2-container li ')
        return `${createKeyframe()}
.acbg-bg2-container {${backgroundCss({ bgColor })}}
.acbg-bg2-container ${general}
${childRules}`
    }, [bgColor, count, size, speed])

    return (
        <div>
            <Controls
                source="https://codepen.io/mohaiman/pen/MQqMyo"
                credit="Mohammad Abdul Mohaiman"
                htmlCode={htmlCode}
                cssCode={cssCode}
                changeBg={changeBg}
                activeBg={activeBg}
            >
                <label htmlFor="bg2-count">Count:</label>
                <input
                    type="range"
                    id="bg2-count"
                    step={1}
                    min={1}
                    max={50}
                    value={count}
                    onChange={(e) => setCount(Number(e.target.value))}
                />

                <label htmlFor="bg2-size">Size:</label>
                <input
                    type="range"
                    id="bg2-size"
                    step={1}
                    min={1}
                    max={500}
                    value={size[0]}
                    onChange={(e) => setSize([Number(e.target.value), size[1]] as [number, number])}
                />

                <label htmlFor="bg2-count">Speed:</label>
                <input
                    type="range"
                    id="bg2-count"
                    step={1}
                    min={1}
                    max={50}
                    value={speed}
                    onChange={(e) => setSpeed(Number(e.target.value))}
                />

                <label htmlFor="bg2-bg-color">Background Color:</label>
                <input
                    type="color"
                    id="bg2-bg-color"
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                />
            </Controls>

            <style dangerouslySetInnerHTML={{ __html: containerStyle }} />
            <ul className="acbg-bg2-container">{buildList()}</ul>
        </div>
    )
}
