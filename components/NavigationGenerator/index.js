import React, { useEffect, useState } from 'react'
import { SizeMe } from 'react-sizeme'
import ReactHtmlParser from 'react-html-parser'

import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import * as ui from '../../ui'
import * as S from './styled'
import BrowserMockup from './components/BrowserMockup'
import MenuItemsControl from './components/MenuItemsControl'
import { htmlGenerator } from './generator'
import CodeBlock from '../CodeBlock'

const defaultMenu = {
  left: [
    { caption: 'Home', link: '#home' },
    { caption: 'Pricing', link: '#pricing' },
    { caption: 'Blog', link: '#blog' },
    { caption: 'Docs', link: '#docs' }
  ],
  right: [
    { caption: 'Sign-up', link: '#signup' },
    { caption: 'Login', link: '#login' },
  ]
}

const NavigationGenerator = props => {
  const [activeTab, setActiveTab] = useState(0)
  const [menuItems, setMenuItems] = useState(defaultMenu)
  const [htmlCode, setHtmlCode] = useState(htmlGenerator(menuItems))

  useEffect(() => {
    const htmlCode = htmlGenerator(menuItems)
    setHtmlCode(htmlCode)
  }, [menuItems])

  return (
    <ui.Container>
        <BrowserMockup>
          <SizeMe>{({ size }) =>
            <S.Navigation width={size.width}>
              { ReactHtmlParser(htmlCode) }
            </S.Navigation>
          }</SizeMe>
          <S.Center>
            { // CSS.supports && CSS.supports('resize', 'horizontal') &&
                <span>
                  This window is resizable.<br/>
                  Scroll down for customization & code.
                </span> }
          </S.Center>
        </BrowserMockup>

        <h2>Configuration</h2>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="menu items configuration"
          >
            Menu Items
          </AccordionSummary>
          <AccordionDetails>
            <MenuItemsControl
              menuItems={menuItems}
              setMenuItems={setMenuItems}
            />
          </AccordionDetails>
        </Accordion>

        <h2>Code</h2>

        <CodeBlock language="html" value={htmlCode}/>
    </ui.Container>
  )
}

export default NavigationGenerator
