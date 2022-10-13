import React, { useState } from 'react'
import AbsoluteAd from '../Ads/AbsoluteAd'
import Controls from './Controls'
import * as S from './styled'

const BlurBackgroundGenerator = () => {
  const [values, setValues] = useState({
    bgColor: ['#FFFFFF', '#ECE9E6'],
    circles: [
      { color: ['#1FCFC3', '#1F91CF'], size: 30, left: 20, top: 20 },
      { color: ['#0800FF', '#E32BE3'], size: 40, left: 50, top: 50 },
      { color: ['#1FCFC3', '#1F91CF'], size: 30, left: 80, top: 80 },
    ]
  })

  const generateHtmlCode = () => {
    let htmlCode = '<div class="background">\n'
    for (let i = 0; i < values.circles.length; i++) {
        htmlCode = htmlCode + '   <div></div>\n'
    }
    return htmlCode + '</div>'
  }

  const generateCssCode = () => {
    const backgroundCss = `.background {${S.backgroundCss(values)}}`
    const generalCircleCss = `.background div {${S.generalCircleCss()}}`
    let circleCss = ''

    for (let i = 0; i < values.circles.length; i++) {
      circleCss = `${circleCss}.background ${S.circleCss({ ...values.circles[i], index : i+1 })}`
    }

    return `${backgroundCss}

${generalCircleCss}

${circleCss}`
  }

  const htmlCode = generateHtmlCode()
  const cssCode = generateCssCode()

  return <S.InnerContainer>
    <AbsoluteAd position="top" />
    <Controls values={values} setValues={setValues} htmlCode={htmlCode} cssCode={cssCode} />
    <S.Background values={values} >
      {/* https://cssgradient.io/gradient-backgrounds/ */}
      { values.circles.map((c, i) => <div key={`circle-${i}`}></div>)}
    </S.Background>
  </S.InnerContainer>
}

export default BlurBackgroundGenerator
