// Ported from
// legacy-next/components/AnimatedCssBackgroundGenerator/Background1.js
// React class → function component (useState). @mui/material/Slider →
// <input type="range">. react-color / color <input type="color"> preserved.
// The styled Container/Span (styledBg1.js) are rendered via a scoped <style>
// tag so the live background is pixel-identical to the styled-components output.
import { useMemo, useState } from 'react'
import Controls from './Controls'
import { createCSS, backgroundCss, spanCss } from './bg1.css'

interface Props {
    changeBg: (index: number) => void
    activeBg: number
}

export default function Background1({ changeBg, activeBg }: Props) {
    const [spanCount, setSpanCount] = useState(20)
    const [bgColor, setBgColor] = useState('#3E1E68')
    const [circleColors, setCircleColors] = useState<string[]>(['#583C87', '#E45A84', '#FFACAC'])
    const [size, setSize] = useState(20)
    const [speed, setSpeed] = useState(45)

    const removeColor = () => {
        setCircleColors(circleColors.slice(0, -1))
    }
    const addColor = () => {
        const randomColor = '#' + (((1 << 24) * Math.random()) | 0).toString(16)
        setCircleColors([...circleColors, randomColor])
    }

    const buildSpans = () => {
        const spans = []
        for (let i = 0; i < spanCount; i++) {
            spans.push(<span key={i}></span>)
        }
        return spans
    }

    const generateHtmlCode = () => {
        let htmlCode = '<div class="background">\n'
        for (let i = 0; i < spanCount; i++) {
            htmlCode = htmlCode + '   <span></span>\n'
        }
        return htmlCode + '</div>'
    }

    const generateCssCode = () => {
        // `spanCssRules` <- S.createCSS(...) in the original (namespaced there).
        const spanCssRules = createCSS({
            count: spanCount,
            colors: circleColors,
            size,
            speed,
            addBgClass: true,
        })
        const backgroundCssStr = `.background {${backgroundCss({ bgColor })}}`
        const allSpanCss = `.background span {${spanCss({ size, speed, addAnimation: true })}}`

        return `@keyframes move {
    100% {
        transform: translate3d(0, 0, 1px) rotate(360deg);
    }
}

${backgroundCssStr}

${allSpanCss}

${spanCssRules}
`
    }

    const buildCircleInputs = () => {
        const inputs = []
        for (let i = 0; i < circleColors.length; i++) {
            inputs.push(
                <input
                    key={`input-${i}`}
                    type="color"
                    value={circleColors[i]}
                    onChange={(e) => {
                        const next = [...circleColors]
                        next[i] = e.target.value
                        setCircleColors(next)
                    }}
                />,
            )
        }
        return inputs
    }

    const htmlCode = generateHtmlCode()
    const cssCode = generateCssCode()

    // Recompute the live-container CSS only when inputs change (matches the
    // styled-components Container which regenerates createCSS on each render of
    // its props). Independent random draw from the copyable code, as in the
    // original. `createCSS` (addBgClass=false) emits `span:nth-child(N) {...}`
    // rules; we scope them under the container class below.
    const containerBaseCss = useMemo(() => backgroundCss({ bgColor }), [bgColor])
    const containerChildCss = useMemo(
        () =>
            createCSS({
                count: spanCount,
                colors: circleColors,
                size,
                speed,
            }).replace(/(^|\n)span:nth-child/g, '$1.acbg-bg1-container span:nth-child'),
        [spanCount, circleColors, size, speed],
    )
    const spanStyle = useMemo(() => spanCss({ size, speed }), [size, speed])

    return (
        <div>
            <Controls
                source="https://codepen.io/Mamboleoo/pen/BxMQYQ"
                credit="Louis Hoebregts"
                htmlCode={htmlCode}
                cssCode={cssCode}
                changeBg={changeBg}
                activeBg={activeBg}
            >
                <label htmlFor="bg1-count">Count:</label>
                <input
                    type="range"
                    id="bg1-count"
                    step={1}
                    min={1}
                    max={50}
                    value={spanCount}
                    onChange={(e) => setSpanCount(Number(e.target.value))}
                />

                <label htmlFor="bg1-size">Size:</label>
                <input
                    type="range"
                    id="bg1-size"
                    step={1}
                    min={1}
                    max={50}
                    value={size}
                    onChange={(e) => setSize(Number(e.target.value))}
                />

                <label htmlFor="bg1-speed">Average Speed:</label>
                <input
                    type="range"
                    id="bg1-speed"
                    step={1}
                    min={1}
                    max={50}
                    value={speed}
                    onChange={(e) => setSpeed(Number(e.target.value))}
                />

                <label htmlFor="bg1-bg-color">Background Color:</label>
                <input
                    type="color"
                    id="bg1-bg-color"
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                />

                <span className="acbg-group-label">Circle Colors:</span>
                {buildCircleInputs()}
                <br />
                {circleColors.length > 1 && (
                    <button type="button" aria-label="Remove color" onClick={removeColor}>
                        -
                    </button>
                )}
                {circleColors.length < 8 && (
                    <button type="button" aria-label="Add color" onClick={addColor}>
                        +
                    </button>
                )}
            </Controls>
            <style
                dangerouslySetInnerHTML={{
                    __html: `@keyframes move {
    100% {
        transform: translate3d(0, 0, 1px) rotate(360deg);
    }
}
.acbg-bg1-container {${containerBaseCss}}
.acbg-bg1-container span {${spanStyle}animation-name: move;}
${containerChildCss}`,
                }}
            />
            <div className="acbg-bg1-container">{buildSpans()}</div>
        </div>
    )
}
