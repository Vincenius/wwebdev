import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import * as S from './styled'

const Newsletter = () => {
  return <S.Newsletter
      as="form"
      id="mc-embedded-subscribe-form"
      action="https://dev.us3.list-manage.com/subscribe/post?u=23a611280baff5c6bd68c83e3&amp;id=8dd07d6ca8"
      method="post"
      name="mc-embedded-subscribe-form"
      novalidate=""
      target="_blank"
    >
    <h2>Subscribe to the Newsletter</h2>
    <p>Don't miss the next update. Drop your email below and get it straight in your inbox.</p>
    <S.InputContainer>
      <S.Input
        id="mce-EMAIL"
        name="EMAIL"
        required={true}
        type="email"
        placeholder="E-Mail"
        variant="outlined"
        fullWidth
      />
      <S.SubmitButton
        id="mc-embedded-subscribe"
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
              value="1"
              name="group[26582][1]"
              id="mce-group[26582]-26582-0"
              defaultChecked
            />
          }
          label="Weekly Resources"
        />
      </li>
      <li>
        <FormControlLabel
          control={
            <S.Checkbox
              value="4"
              name="group[26582][4]"
              id="mce-group[26582]-26582-2"
              defaultChecked
            />
          }
          label="Resources & Templates"
        />
      </li>
      <li>
        <FormControlLabel
          control={
            <S.Checkbox
              value="2"
              name="group[26582][2]"
              id="mce-group[26582]-26582-1"
              defaultChecked
            />
          }
          label="Articles"
        />
      </li>
    </S.CheckboxList>
    <S.HiddenInput>
      <label htmlFor="b_23a611280baff5c6bd68c83e3_8dd07d6ca8">input</label>
      <input id="b_23a611280baff5c6bd68c83e3_8dd07d6ca8" tabIndex="-1" name="b_23a611280baff5c6bd68c83e3_8dd07d6ca8" type="text" />
    </S.HiddenInput>
  </S.Newsletter>
}

export default Newsletter
