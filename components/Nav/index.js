import React from 'react'
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
      <a href='/'>
        <img src="/logo-text.png" alt="Logo of wweb.dev"/>
      </a>
      <ul>
        {links.map(({ key, href, label }) => (
          <li key={key}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </S.Navigation>
  </S.Container>
)

export default Nav
