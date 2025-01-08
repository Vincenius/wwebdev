import React, { useState } from 'react'
import Ad from '../Ads/HtmlRev'
import Featured from '../Featured'
import BrowserMockup from '../BrowserMockup'
import Controls from './Controls'
import * as S from './styled'
import * as ui from '../../ui'

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

  return <ui.Container>
      <ui.SidebarContainer>
          <ui.SidebarArticle as="article">
            <ui.SectionHeadline>Blur Background CSS Generator</ui.SectionHeadline>

            <ui.MobileOnly>
              <Ad />
            </ui.MobileOnly>

            <BrowserMockup>
                <S.Background values={values} >
                {/* https://cssgradient.io/gradient-backgrounds/ */}
                { values.circles.map((c, i) => <div key={`circle-${i}`}></div>)}
              </S.Background>
            </BrowserMockup>

            <ui.MobileOnly>
              <Controls values={values} setValues={setValues} htmlCode={htmlCode} cssCode={cssCode} />
            </ui.MobileOnly>

            <p>
                This is a tool to generate the CSS for a customizable blur background.
                Afterward, you can easily copy the code and use it on your website.
            </p>
            <p>
                You can customize the gradient background color as well as the gradient color of the circles.
                You can set the position and the size of the circles as well.
            </p>
            <p>
                As everything on wweb.dev this tool is under the <a href="https://choosealicense.com/licenses/mit/" target="_blank" rel="noopener noreferrer">MIT license</a>.
                This means that you can use the generated backgrounds for commercial or private projects without attribution.
            </p>
            <p>
                If you like the generated blur backgrounds or use them anywhere in your project, I'd be happy if you'd let me know.
                Also, feedback for this generator is always welcome. Just pass me a message on <a href="https://twitter.com/wweb_dev" target="_blank" rel="noopener noreferrer">Twitter</a> or via email: <a href="mailto:info@wweb.dev">info@wweb.dev</a>.
            </p>
            <ui.Subheadline as="h2">You might also like</ui.Subheadline>
            <Featured articleIds={[5, 10, 7]} />
          </ui.SidebarArticle>
          <ui.Sidebar hideOnMobile>
            <Ad />
            <Controls values={values} setValues={setValues} htmlCode={htmlCode} cssCode={cssCode} />
          </ui.Sidebar>
      </ui.SidebarContainer>
  </ui.Container>
}

export default BlurBackgroundGenerator
