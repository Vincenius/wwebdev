import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Hamburger from 'hamburger-react'
import { SizeMe } from 'react-sizeme'
import SearchIcon from '@material-ui/icons/Search'

import SocialBar from '../SocialBar'
import * as ui from '../../ui'
import * as S from './styled'
import { lightGrey, breakpointLargeNumber } from '../../ui/constants'

const links = [
  // { href: '/about', label: 'About' },
  { href: '', label: 'Home' },
  { href: 'blog', label: 'Blog' },
  { href: 'resources', label: 'Resources' },
  { href: 'weekly', label: 'Weekly' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Logo = ({ title, isArticle }) => {
  const logoUrl = "https://ik.imagekit.io/wwebdev/tr:w-180/logo-text_51kQarOOiD-.png"
  return (
    <Link href='/'><a>
      { isArticle && <img src={logoUrl} alt="Logo of wweb.dev" />}
      { !isArticle && <img src={logoUrl} alt={title} /> }
    </a></Link>
  )
}

const Nav = ({ isArticle, title, transparentBg }) => {
  const router = useRouter()
  const activePath = router.pathname.split('/')[1]

  return (
    <SizeMe>{({ size }) =>
      <S.Container isArticle={isArticle} transparentBg={transparentBg}>
        { size.width > breakpointLargeNumber &&
          <Desktop title={title} isArticle={isArticle} activePath={activePath} />
        }
        { size.width <= breakpointLargeNumber &&
          <Mobile title={title} isArticle={isArticle} activePath={activePath} />
        }
      </S.Container>
    }</SizeMe>
  )
}

const Desktop = ({ title, isArticle, activePath }) => (
  <S.Navigation as="nav">
    <S.Main>
      <Logo isArticle={isArticle} title={title} />
      <ul>
        {links.map(({ key, href, label }) => (
          <li key={key}>
            <Link href={`/${href}`}><a>
              <S.Link active={activePath === href}>
                {label}
              </S.Link>
            </a></Link>
          </li>
        ))}
      </ul>
    </S.Main>
    <S.Right>
      <SocialBar>
        <li>
          <a href="/search">
            <ui.Screenreader>Search</ui.Screenreader>
            <SearchIcon width="24px" height="24px" />
          </a>
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
