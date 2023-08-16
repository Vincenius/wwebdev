import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Hamburger from 'hamburger-react'
import SearchIcon from '@mui/icons-material/Search'

import SocialBar from '../SocialBar'
import * as ui from '../../ui'
import * as S from './styled'
import { lightGrey } from '../../ui/constants'

const links = [
  // { href: '/about', label: 'About' },
  { href: '', label: 'Home' },
  { href: 'blog', label: 'Articles' },
  { href: 'resources', label: 'Resources' },
  // { href: 'weekly', label: 'Weekly' },
  { href: 'templates', label: 'Templates' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Logo = ({ title, isArticle }) => {
  const logoUrl = "https://ik.imagekit.io/wwebdev/tr:w-180/logo-text_51kQarOOiD-.png"
  return (
    <Link href='/'>
      { isArticle && <img src={logoUrl} alt="Logo of wweb.dev" />}
      { !isArticle && <img src={logoUrl} alt={title} /> }
    </Link>
  )
}

const Nav = ({ isArticle, title, transparentBg }) => {
  const router = useRouter()
  const activePath = router.pathname.split('/')[1]

  return (
    <S.Container isArticle={isArticle} transparentBg={transparentBg}>
      <S.DesktopContainer>
        <Desktop title={title} isArticle={isArticle} activePath={activePath} />
      </S.DesktopContainer>
      <S.MobileContainer>
        <Mobile title={title} isArticle={isArticle} activePath={activePath} />
      </S.MobileContainer>
    </S.Container>
  )
}

const Desktop = ({ title, isArticle, activePath }) => (
  <S.Navigation as="nav">
    <S.Main>
      <Logo isArticle={isArticle} title={title} />
      <ul>
        {links.map(({ key, href, label }) => (
          <li key={key}>
            <Link href={`/${href}`}>
              <S.Link active={activePath === href}>
                {label}
              </S.Link>
            </Link>
          </li>
        ))}
      </ul>
    </S.Main>
    <S.Right>
      <SocialBar>
        <li>
          <Link href="/search">
            <ui.Screenreader>Search</ui.Screenreader>
            <SearchIcon width="24px" height="24px" />
          </Link>
        </li>
      </SocialBar>
    </S.Right>
  </S.Navigation>
)

const Mobile = ({ isArticle, title, activePath }) => {
  const [isOpen, setOpen] = useState(false)

  return (
    <React.Fragment>
      <S.Navigation as="header">
        <Logo isArticle={isArticle} title={title} />
        <S.Right>
          <Hamburger
            direction="right"
            toggled={isOpen}
            toggle={setOpen}
            color={lightGrey}
            label="Toggle menu"
          />
        </S.Right>
      </S.Navigation>
      <S.MobileNavigation isOpen={isOpen}>
        <ul>
          {links.map(({ key, href, label }) => (
            <li key={key}>
              <Link href={`/${href}`}>
                <S.MobileLink active={activePath === href}>
                  {label}
                </S.MobileLink>
              </Link>
            </li>
          ))}
        </ul>

        <S.MobileSocialBar>
          <SocialBar>
            <li>
              <a href="/search">
                <ui.Screenreader>Search</ui.Screenreader>
                <SearchIcon width="24px" height="24px" />
              </a>
            </li>
          </SocialBar>
        </S.MobileSocialBar>
      </S.MobileNavigation>
    </React.Fragment>
  )
}

export default Nav
