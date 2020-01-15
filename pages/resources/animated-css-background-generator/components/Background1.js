import React from 'react'
import Slider from '@material-ui/core/Slider';

import * as S from '../../../../styles/resources/styledBg1'
import Controls from './Controls'

class Background1 extends React.Component {
    state = {
        spanCount: 20,
        bgColor: '#3E1E68',
        circleColors: [
            '#583C87',
            '#E45A84',
            '#FFACAC',
        ],
        size: 20,
        speed: 45,
    }

    removeColor = () => {
        const { circleColors } = this.state
        const arr = circleColors.slice(0,-1)
        this.setState({
            circleColors: arr,
        })
    }
    addColor = () => {
        const { circleColors } = this.state
        const randomColor = "#"+((1<<24)*Math.random()|0).toString(16)
        const arr = [...circleColors, randomColor]
        this.setState({
            circleColors: arr,
        })
    }

    buildSpans = () => {
        const spans = []
        const { spanCount, size, speed } = this.state
        for (let i = 0; i < spanCount; i++) {
            spans.push(
                <S.Span
                    key={i}
                    size={size}
                    speed={speed}
                ></S.Span>
            )
        }
        return spans
    }

    generateHtmlCode = () => {
        let htmlCode = '<div class="background">\n'
        for (let i = 0; i < this.state.spanCount; i++) {
            htmlCode = htmlCode + '   <span></span>\n'
        }
        return htmlCode + '</div>'
    }

    generateCssCode = () => {
        const {
            spanCount,
            circleColors,
            size,
            speed,
            bgColor
        } = this.state
        const spanCss = S.createCSS({
            count: spanCount,
            colors: circleColors,
            size,
            speed,
            addBgClass: true,
        })
        const backgroundCss = `.background {${S.backgroundCss({ bgColor })}}`
        const allSpanCss = `.background span {${S.spanCss({ size, speed, addAnimation: true })}}`

        return `@keyframes move {
    100% {
        transform: translate3d(0, 0, 1px) rotate(360deg);
    }
}

${backgroundCss}

${allSpanCss}

${spanCss}
`
    }

    buildCircleInputs = () => {
        const inputs = []
        const { circleColors } = this.state
        for (let i = 0; i < circleColors.length; i++) {
            inputs.push(<input
                key={`input-${i}`}
                type="color"
                value={circleColors[i]}
                onChange={e => {
                    circleColors[i] = e.target.value
                    this.setState({ circleColors })
                }}
            />)
        }
        return inputs
    }

    render() {
        const {
            spanCount,
            bgColor,
            circleColors,
            size,
            speed,
        } = this.state

        const htmlCode = this.generateHtmlCode()
        const cssCode = this.generateCssCode()

        return (
            <div>
                <Controls
                    source="https://codepen.io/Mamboleoo/pen/BxMQYQ"
                    credit="Louis Hoebregts"
                    htmlCode={htmlCode}
                    cssCode={cssCode}
                >
                    <label>Count:</label>
                    <Slider
                        aria-labelledby="count-slider"
                        valueLabelDisplay="auto"
                        step={1}
                        min={1}
                        max={50}
                        value={spanCount}
                        onChange={(event, value) => this.setState({
                            spanCount: Number(value)
                        })}
                    />

                    <label>Size:</label>
                    <Slider
                        aria-labelledby="size-slider"
                        valueLabelDisplay="auto"
                        step={1}
                        min={1}
                        max={50}
                        value={size}
                        onChange={(event, value) => this.setState({
                            size: Number(value)
                        })}
                    />

                    <label>Average Speed:</label>
                    <Slider
                        aria-labelledby="speed-slider"
                        valueLabelDisplay="auto"
                        step={1}
                        min={1}
                        max={50}
                        value={speed}
                        onChange={(event, value) => this.setState({
                            speed: Number(value)
                        })}
                    />

                    <label>Background Color:</label>
                    <input
                        type="color"
                        value={bgColor}
                        onChange={e => this.setState({ bgColor: e.target.value })}
                    />

                    <label>Circle Colors:</label>
                    { this.buildCircleInputs() }
                    <br />
                    { circleColors.length > 1 &&
                        <button onClick={this.removeColor}>
                            -
                        </button>
                    }
                    { circleColors.length < 8 &&
                        <button onClick={this.addColor}>
                            +
                        </button>
                    }
                </Controls>
                <S.Container
                    count={spanCount}
                    bgColor={bgColor}
                    colors={circleColors}
                    size={size}
                    speed={speed}
                >
                    { this.buildSpans() }
                </S.Container>
            </div>
        )
    }
}

export default Background1
