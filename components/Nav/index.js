import React from 'react'
import Link from 'next/link'
import { SocialBar } from '../'
import * as S from './styled'

const links = [
  // { href: '/about', label: 'About' },
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
  { href: '/weekly', label: 'Weekly' },
  { href: '/resources', label: 'Resources' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <S.Container>
    <S.Navigation as="nav">
      <S.Main>
        <Link href='/'><a>
          <img src="https://ik.imagekit.io/wwebdev/tr:w-180/logo-text_51kQarOOiD-.png" alt="Logo of wweb.dev"/>
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

export default Nav
