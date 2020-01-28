import React from 'react'
import Controls from './Controls'
import Slider from '@material-ui/core/Slider'

import * as S from './styles/styledBg2'

class Background2 extends React.Component {
    state = {
        bgColor: '#4e54c8',
        count: 10,
        size: [100, 200],
        speed: 35,
    }

    buildList = () => {
        const { count } = this.state
        const items = []

        for (let i = 0; i < count; i++) {
            items.push(
                <li></li>
            )
        }
        return items
    }

    generateHtmlCode = () => {
        let htmlCode = '<ul class="background">\n'
        for (let i = 0; i < this.state.count; i++) {
            htmlCode = htmlCode + '   <li></li>\n'
        }
        return htmlCode + '</ul>'
    }

    generateCssCode = () => {
        const {
            bgColor,
            count,
            size,
            speed,
        } = this.state

        const backgroundCss = `.background {${S.backgroundCss({ bgColor })}}`
        const generalCss = `.background ${ S.generalCss({ speed }) }`
        const liCss = `${S.createCSS({ addBgClass: true, count, size })}`

        return `${S.createKeyframe()}
${backgroundCss}
${generalCss}
${liCss}`
    }

    render() {
        const {
            bgColor,
            count,
            size,
            speed,
        } = this.state

        const htmlCode = this.generateHtmlCode()
        const cssCode = this.generateCssCode()

        return (
            <div>
                <Controls
                    source="https://codepen.io/mohaiman/pen/MQqMyo"
                    credit="Mohammad Abdul Mohaiman"
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
                        value={count}
                        onChange={(event, value) => this.setState({
                            count: Number(value)
                        })}
                    />

                    <label>Size:</label>
                    <Slider
                        aria-labelledby="size-slider"
                        valueLabelDisplay="auto"
                        step={1}
                        min={1}
                        max={500}
                        value={size}
                        onChange={(event, value) => this.setState({
                            size: value
                        })}
                    />

                    <label>Speed:</label>
                    <Slider
                        aria-labelledby="count-slider"
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
                </Controls>

                <S.Container
                    count={count}
                    size={size}
                    speed={speed}
                    bgColor={bgColor}
                >
                    { this.buildList() }
                </S.Container>
            </div>
        )
    }
}

export default Background2
