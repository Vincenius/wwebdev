import React from 'react'
import Link from 'next/link'
import * as ui from '../../ui'
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
  <ui.Container>
    <S.Navigation>
      <Link href='/'>
        <a>
          <img src="/logow.png" alt="Logo of Vincent Will"/>
        </a>
      </Link>
      <ul>
        {links.map(({ key, href, label }) => (
          <li key={key}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </S.Navigation>
  </ui.Container>
)

export default Nav
