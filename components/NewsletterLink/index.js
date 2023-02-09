import React from 'react'
import * as S from './styled'

const NewsletterLink = () => {
  const scrollToNewsletter = () => {
    document.querySelector('#listmonk-newsletter-form').scrollIntoView({ behavior: 'smooth' });
  }

  return <S.Container>
    <S.TopContainer>
      <h2>Newsletter</h2>
      <S.Content>
        <img src="/email.png" alt="email postbox illustration"/>
        <p>Don't miss the next update. Drop your email below and get it straight in your inbox.</p>
      </S.Content>
    </S.TopContainer>
    <S.Button color="primary" onClick={scrollToNewsletter}>Subscribe</S.Button>
  </S.Container>
}

export default NewsletterLink
