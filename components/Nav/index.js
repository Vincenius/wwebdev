import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import SearchIcon from '@material-ui/icons/Search'

import { SocialBar } from '../'
import * as ui from '../../ui'
import * as S from './styled'

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

const Nav = ({ isArticle, title, transparentBg }) => {
  const router = useRouter()
  const activePath = router.pathname.split('/')[1]
  const logo = alt => <img src="https://ik.imagekit.io/wwebdev/tr:w-180/logo-text_51kQarOOiD-.png" alt={alt} />
  return (
    <S.Container isArticle={isArticle} transparentBg={transparentBg}>
      <S.Navigation as="nav">
        <S.Main>
          <Link href='/'><a>
            { isArticle && logo('Logo of wweb.dev') }
            { !isArticle && <S.HeadlineLogo>{ logo(title) }</S.HeadlineLogo> }
          </a></Link>
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

        <SocialBar>
          <li>
            <a href="/search">
              <ui.Screenreader>Search</ui.Screenreader>
              <SearchIcon width="24px" height="24px" />
            </a>
          </li>
        </SocialBar>
      </S.Navigation>
    </S.Container>
  )
}

export default Nav
