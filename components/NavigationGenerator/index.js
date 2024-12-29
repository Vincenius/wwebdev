import React, { useEffect, useState } from 'react'
import { SizeMe } from 'react-sizeme'
import parse from 'html-react-parser'

import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Button from '@mui/material/Button'

import * as ui from '../../ui'
import * as S from './styled'
import CodeBlock from '../CodeBlock'
import { copyToClipboard } from '../../utils/copyToClipboard'
import BrowserMockup from '../BrowserMockup'
import Featured from '../Featured'
import Ad from '../Ads/Ad'
import MenuItemsControl from './components/MenuItemsControl'
import StylingControl from './components/StylingControl'
import { htmlGenerator } from './generator'

const defaultMenu = {
  logo: {
    url: 'https://wweb.dev/resources/navigation-generator/logo-placeholder.png',
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
  const [copyCSSSuccessOpen, setCopyCSSSuccessOpen] = useState(false)

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
      <S.SidebarContainer>
        <ui.SidebarArticle as="article">
          <ui.SectionHeadline as="h1">Responsive Navigation Generator</ui.SectionHeadline>
          <p>
            This is a tool to quickly generate a responsive navigation. You can adjust the menu items, the logo, the colors and the breakpoint.
            When the breakpoint is reached, the navigation turns into a burger menu.
          </p>
        </ui.SidebarArticle>
        <ui.Sidebar>
          <Ad />
        </ui.Sidebar>
      </S.SidebarContainer>

      <ui.Subheadline as="h2">Preview</ui.Subheadline>
      <BrowserMockup>
        <SizeMe>{({ size }) =>
          <S.Navigation width={size.width} useLogo={menuItems.logo.isUsed} {...menuStyle}>
            { parse(htmlCode) }
          </S.Navigation>
        }</SizeMe>
        <S.Center>
          <span>
            This window is resizable.<br/>
            Scroll down for customization & code.
          </span>
        </S.Center>
      </BrowserMockup>

      <ui.Subheadline as="h2">Configuration</ui.Subheadline>

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

      <ui.Subheadline as="h2">Code</ui.Subheadline>

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
              setTimeout( () => {
                setCopySuccessOpen(false)
              }, 2000);
            }}
            onFocus={event => event.stopPropagation()}
          >
            <S.CopyCode showCopied={copySuccessOpen}>Copy Code</S.CopyCode>
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
              setCopyCSSSuccessOpen(true)
              setTimeout( () => {
                setCopyCSSSuccessOpen(false)
              }, 2000);
            }}
            onFocus={event => event.stopPropagation()}
          >
            <S.CopyCode showCopied={copyCSSSuccessOpen}>Copy Code</S.CopyCode>
          </Button>
        </S.ButtonAccordionSummary>
        <AccordionDetails>
          <CodeBlock language="css" value={cssCode} />
        </AccordionDetails>
      </Accordion>

      <br />
      <ui.Subheadline as="h2">You might also like</ui.Subheadline>
      <Featured articleIds={[5, 10, 24]} />
    </ui.Container>
  )
}

export default NavigationGenerator
