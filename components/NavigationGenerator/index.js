import React, { useEffect, useState } from 'react'
import { SizeMe } from 'react-sizeme'
import ReactHtmlParser from 'react-html-parser'

import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import * as ui from '../../ui'
import * as S from './styled'
import CodeBlock from '../CodeBlock'
import BrowserMockup from './components/BrowserMockup'
import MenuItemsControl from './components/MenuItemsControl'
import StylingControl from './components/StylingControl'
import { htmlGenerator } from './generator'

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

const stylingOptions = {
  primaryColor: '#232323',
  secondaryColor: '#cdcdcd',
  hoverColor: '#00C6A7',
  burgerMenuPosition: 'right', // or "left"
  breakpoint: 760,
}

const NavigationGenerator = props => {
  const [menuItems, setMenuItems] = useState(defaultMenu)
  const [menuStyle, setMenuStyle] = useState(stylingOptions)
  const [htmlCode, setHtmlCode] = useState(htmlGenerator(menuItems))
  const [cssCode, setCssCode] = useState(S.generateNavigationCss(stylingOptions))

  useEffect(() => {
    const newHtmlCode = htmlGenerator(menuItems)
    setHtmlCode(newHtmlCode)
  }, [menuItems])

  useEffect(() => {
    const newCssCode = S.generateNavigationCss(menuStyle)
    setCssCode(newCssCode)
  }, [menuStyle])

  return (
    <ui.Container>
      <h2>Preview</h2>

        <BrowserMockup>
          <SizeMe>{({ size }) =>
            <S.Navigation width={size.width} {...menuStyle}>
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
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="menu items configuration"
          >
            Styling
          </AccordionSummary>
          <AccordionDetails>
            <StylingControl
              menuStyle={menuStyle}
              setMenuStyle={setMenuStyle}
            />
          </AccordionDetails>
        </Accordion>

        <h2>Code</h2>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="expand HTML Code"
          >
            HTML Code [todo copy]
          </AccordionSummary>
          <AccordionDetails>
            <CodeBlock language="html" value={htmlCode} />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="expand CSS Code"
          >
            CSS Code [todo copy]
          </AccordionSummary>
          <AccordionDetails>
            <CodeBlock language="css" value={cssCode} />
          </AccordionDetails>
        </Accordion>
    </ui.Container>
  )
}

export default NavigationGenerator
