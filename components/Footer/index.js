import React from 'react'
import Link from 'next/link'
import MailOutlineIcon from '@material-ui/icons/MailOutline'

import Newsletter from './Newsletter'
import SocialBar from '../SocialBar'
import BuyMeACoffeeButton from '../BuyMeACoffeeButton'
import * as S from './styled'
import * as ui from '../../ui'

const Footer = ({ hideNewsletter }) => {
  return (
    <React.Fragment>
      { !hideNewsletter && <S.NewsletterContainer>
        <Newsletter />
      </S.NewsletterContainer> }
      <S.Container>
        <S.Content>
          <S.LeftFooter>
            <a href="https://www.co2neutralwebsite.com/certificate/7187/en" target="_blank">
              <img src="//www.co2neutralwebsite.com/icons/logo/inverse_en.svg" alt="CO2 neutral website" />
            </a>
            <S.Copyright>
              © {new Date().getFullYear()} - wweb.dev
            </S.Copyright>
          </S.LeftFooter>

          <S.RightFooter>
            <SocialBar>
              <li>
                <a href="mailto:info@wweb.dev">
                  <ui.Screenreader>E-Mail</ui.Screenreader>
                  <MailOutlineIcon width="24px" height="24px" />
                </a>
              </li>
            </SocialBar>

            <BuyMeACoffeeButton />

            <S.FooterLinks>
              <li><Link href="/sponsorship"><a>Sponsorship</a></Link></li>
              <li><Link href="/about"><a>About</a></Link></li>
              <li><Link href="/privacy"><a>Privacy Policy</a></Link></li>
            </S.FooterLinks>
          </S.RightFooter>
        </S.Content>
      </S.Container>
    </React.Fragment>
  )
}

export default Footer
