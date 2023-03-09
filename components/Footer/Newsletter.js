import React from 'react'
import FormControlLabel from '@mui/material/FormControlLabel'

import * as S from './styled'

const Newsletter = ({ type = '' }) => {
  return <S.Newsletter
      as="form"
      action="https://email.vincenius.com/subscription/form"
      className="listmonk-form"
      type={type}
      method="post"
      id="listmonk-newsletter-form"
    >
    { type !== 'inline' && <h2>Subscribe to the Newsletter</h2> }
    { type !== 'inline' && <p>Don't miss the next update. Drop your email below and get it straight in your inbox.</p> }
    <S.InputContainer>
      <S.Input
        name="email"
        required={true}
        type="email"
        placeholder="E-Mail"
        variant="outlined"
        fullWidth
      />
      <S.SubmitButton
        variant="contained"
        type="submit"
        label="submit button"
      >
        Subscribe
      </S.SubmitButton>
    </S.InputContainer>

    <S.CheckboxList>
      <li>
        <FormControlLabel
          control={
            <S.Checkbox
              id="3ed85" type="checkbox" name="l" value="3ed857fa-efc9-4f26-9a66-ab85ed8e2b09"
              defaultChecked
            />
          }
          label="Weekly Resources" htmlFor="3ed85"
        />
      </li>
      <li>
        <FormControlLabel
          control={
            <S.Checkbox
              id="f3443" type="checkbox" name="l" value="f3443ac3-a941-47d2-9111-298844aec14e"
              defaultChecked
            />
          }
          label="Resources & Templates" htmlFor="f3443"
        />
      </li>
      <li>
        <FormControlLabel
          control={
            <S.Checkbox
              id="6a18b" type="checkbox" name="l" value="6a18ba09-fc2f-48c5-b78b-0aa731915149"
              defaultChecked
            />
          }
          label="Articles" htmlFor="6a18b"
        />
      </li>
    </S.CheckboxList>
    <S.HiddenInput>
      <input type="hidden" name="nonce" />
    </S.HiddenInput>
  </S.Newsletter>
}

export default Newsletter
