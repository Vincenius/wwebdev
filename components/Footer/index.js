import React from 'react'
import Link from 'next/link'
import MailOutlineIcon from '@mui/icons-material/MailOutline'

import SocialBar from '../SocialBar'
import * as S from './styled'
import * as ui from '../../ui'

const Footer = () => {
  return (
    <React.Fragment>
      <S.Container>
        <S.Content>
          <S.LeftFooter>
            <S.Logo src="/logo-text.png" alt="wweb.dev logo" />
            <S.SocialContainer>
              <SocialBar>
                <li>
                  <a href="mailto:info@wweb.dev">
                    <ui.Screenreader>E-Mail</ui.Screenreader>
                    <MailOutlineIcon width="24px" height="24px" />
                  </a>
                </li>
              </SocialBar>
            </S.SocialContainer>
          </S.LeftFooter>

          <S.RightFooter>
            <S.FooterLinks>
              <li><h2>Other Projects</h2></li>
              <li><Link href="https://immoradar.xyz">ImmoRadar</Link></li>
              <li><Link href="https://github.com/Vincenius/OpenMailer">OpenMailer</Link></li>
              <li><Link href="https://github.com/Vincenius/bsky-embed">bsky-embed</Link></li>
              <li><Link href="https://css-speedrun.netlify.app/">CSS Speedrun</Link></li>
            </S.FooterLinks>

            <S.FooterLinks>
              <li><h2>More</h2></li>
              <li><Link href="https://ko-fi.com/wweb_dev">Donate</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
            </S.FooterLinks>
          </S.RightFooter>
        </S.Content>
        <S.Copyright>
          © Copyright 2018 - {new Date().getFullYear()} | wweb.dev
        </S.Copyright>
      </S.Container>
    </React.Fragment>
  )
}

export default Footer
