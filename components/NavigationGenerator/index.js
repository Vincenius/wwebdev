import React, { useEffect, useState } from 'react'
import { SizeMe } from 'react-sizeme'
import ReactHtmlParser from 'react-html-parser'

import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

import * as ui from '../../ui'
import * as S from './styled'
import CodeBlock from '../CodeBlock'
import { copyToClipboard } from '../../utils/copyToClipboard'
import BrowserMockup from './components/BrowserMockup'
import MenuItemsControl from './components/MenuItemsControl'
import StylingControl from './components/StylingControl'
import { htmlGenerator } from './generator'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const defaultMenu = {
  logo: {
    url: '/resources/navigation-generator/logo-placeholder.png',
    alt: 'My Awesome Website',
    link: '#',
    isUsed: true,
  },
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
  breakpoint: 768,
}

const NavigationGenerator = props => {
  const [menuItems, setMenuItems] = useState(defaultMenu)
  const [menuStyle, setMenuStyle] = useState(stylingOptions)
  const [htmlCode, setHtmlCode] = useState(htmlGenerator(menuItems))
  const [cssCode, setCssCode] = useState(S.generateNavigationCss({
    ...menuStyle,
    useLogo: menuItems.logo.isUsed,
  }))
  const [copySuccessOpen, setCopySuccessOpen] = useState(false)

  useEffect(() => {
    const newHtmlCode = htmlGenerator(menuItems)
    setHtmlCode(newHtmlCode)
  }, [menuItems])

  useEffect(() => {
    const newCssCode = S.generateNavigationCss({
      ...menuStyle,
      useLogo: menuItems.logo.isUsed,
    })
    setCssCode(newCssCode)
  }, [menuStyle, menuItems])

  return (
    <ui.Container>
      <h2>Preview</h2>

      <BrowserMockup>
        <SizeMe>{({ size }) =>
          <S.Navigation width={size.width} useLogo={menuItems.logo.isUsed} {...menuStyle}>
            { ReactHtmlParser(htmlCode) }
          </S.Navigation>
        }</SizeMe>
        <S.Center>
          <span>
            This window is resizable.<br/>
            Scroll down for customization & code.
          </span>
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
        <S.ButtonAccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="expand HTML Code"
        >
          HTML
          <Button
            variant="outlined"
            onClick={e => {
              e.stopPropagation()
              copyToClipboard(htmlCode)
              setCopySuccessOpen(true)
            }}
            onFocus={event => event.stopPropagation()}
          >
            Copy Code
          </Button>
        </S.ButtonAccordionSummary>
        <AccordionDetails>
          <CodeBlock language="html" value={htmlCode} />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <S.ButtonAccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="expand CSS Code"
        >
          CSS
          <Button
            variant="outlined"
            onClick={e => {
              e.stopPropagation()
              copyToClipboard(cssCode)
              setCopySuccessOpen(true)
            }}
            onFocus={event => event.stopPropagation()}
          >
            Copy Code
          </Button>
        </S.ButtonAccordionSummary>
        <AccordionDetails>
          <CodeBlock language="css" value={cssCode} />
        </AccordionDetails>
      </Accordion>

      <Snackbar
        open={copySuccessOpen}
        autoHideDuration={2000}
        onClose={() => setCopySuccessOpen(false)}
      >
        <Alert onClose={() => setCopySuccessOpen(false)} severity="success">
          Copied
        </Alert>
      </Snackbar>
    </ui.Container>
  )
}

export default NavigationGenerator
