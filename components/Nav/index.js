import React from 'react'
import Link from 'next/link'
import { SocialBar } from '../'
import * as S from './styled'

const links = [
  // { href: '/about', label: 'About' },
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
  { href: '/resources', label: 'Resources' },
  { href: '/weekly', label: 'Weekly' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = ({ isArticle, title }) => {
  const logo = alt => <img src="https://ik.imagekit.io/wwebdev/tr:w-180/logo-text_51kQarOOiD-.png" alt={alt} />
  return (
    <S.Container isArticle={isArticle}>
      <S.Navigation as="nav">
        <S.Main>
          <Link href='/'><a>
            { isArticle && logo('Logo of wweb.dev') }
            { !isArticle && <S.HeadlineLogo>{ logo(title) }</S.HeadlineLogo> }
          </a></Link>
          <ul>
            {links.map(({ key, href, label }) => (
              <li key={key}>
                <Link href={href}><a>{label}</a></Link>
              </li>
            ))}
          </ul>
        </S.Main>

        <SocialBar />
      </S.Navigation>
    </S.Container>
  )
}

export default Nav
