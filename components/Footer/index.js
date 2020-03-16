import React from 'react'
import { SocialBar } from '../'
import * as S from './styled'

const Footer = () => (
  <S.Container>
    <S.Content>
      <div>
        <a href='/'>
            <img src="/logo.png" alt="wweb.dev Logo" />
        </a>
        <S.Copyright>
          © {new Date().getFullYear()} - wweb.dev
        </S.Copyright>
      </div>

      <S.RightFooter>
        <SocialBar />

        <S.FooterLinks>
          <li><a href="/privacy">Privacy Policy</a></li>
        </S.FooterLinks>
      </S.RightFooter>
    </S.Content>
  </S.Container>
)

export default Footer
