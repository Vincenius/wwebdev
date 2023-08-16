import React from 'react'
import FormControlLabel from '@mui/material/FormControlLabel'

import * as S from './styled'

const Newsletter = ({ type = '' }) => {
  return <S.Newsletter
      as="form"
      action="https://static.mailerlite.com/webforms/submit/g5y6d6"
      data-code="g5y6d6"
      target="_blank"
      type={type}
      method="post"
    >
    { type !== 'inline' && <h2>Subscribe to the Newsletter</h2> }
    { type !== 'inline' && <p>Don't miss the next update. Drop your email below and get it straight in your inbox.</p> }
    <S.InputContainer>
      <S.Input
        name="fields[email]"
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
              name="groups[]" value="112091235"
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
              name="groups[]" value="112091236"
              defaultChecked
            />
          }
          label="Articles" htmlFor="6a18b"
        />
      </li>
    </S.CheckboxList>
    <S.HiddenInput>
      <input type="hidden" name="ml-submit" value="1" />
    </S.HiddenInput>
  </S.Newsletter>
}

export default Newsletter
