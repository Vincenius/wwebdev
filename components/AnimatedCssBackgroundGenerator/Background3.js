import React from 'react'
import Slider from '@material-ui/core/Slider'
import Controls from './Controls'

import * as S from './styles/styledBg3'

class Background2 extends React.Component {
    state = {
        bgColor: '#0040C1',
        count: 6,
        speed: 16,
    }

    generateHtmlCode = () => {
        let htmlCode = '<ul class="background">\n'
        for (let i = 0; i < this.state.count; i++) {
            htmlCode = htmlCode + '   <li></li>\n'
        }
        return htmlCode + '</ul>'
    }

    generateCssCode = () => {
        const { bgColor, speed, count } = this.state
        const bgCss = S.backgroundCss({ bgColor })
        const liStyle = S.liStyle({ speed, bgColor })
        const liChildStyle = S.liChildStyle({ count, bgColor, addBgClass: true })
        return `${S.createKeyframe()}
.background {${bgCss}}
.background ${liStyle}
${liChildStyle}`
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

    render() {
        const {
            bgColor,
            count,
            speed,
        } = this.state

        const htmlCode = this.generateHtmlCode()
        const cssCode = this.generateCssCode()

        return (
            <div>
                <Controls
                    source="https://codepen.io/BjornRombaut/pen/mOLGgX"
                    credit="Bjorn"
                    htmlCode={htmlCode}
                    cssCode={cssCode}
                >
                    <label>Count:</label>
                    <Slider
                        aria-labelledby="count-slider"
                        valueLabelDisplay="auto"
                        step={1}
                        min={1}
                        max={40}
                        value={count}
                        onChange={(event, value) => this.setState({
                            count: Number(value)
                        })}
                    />

                    <label>Speed:</label>
                    <Slider
                        aria-labelledby="count-slider"
                        valueLabelDisplay="auto"
                        step={1}
                        min={1}
                        max={20}
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
                    bgColor={bgColor}
                    count={count}
                    speed={speed}
                >
                    { this.buildList() }
                </S.Container>
            </div>
        )
    }
}

export default Background2
