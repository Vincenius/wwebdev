import React from 'react'
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
        <a href='/'>
          <img src="https://res.cloudinary.com/wwebdev/image/upload/q_auto,w_180,dpr_auto,c_scale,f_auto/v1585149959/logo-text_rhuhcl.png" alt="Logo of wweb.dev"/>
        </a>
        <ul>
          {links.map(({ key, href, label }) => (
            <li key={key}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
      </S.Main>

      <SocialBar />
    </S.Navigation>
  </S.Container>
)

export default Nav
