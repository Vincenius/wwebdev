import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import * as S from './styled'

function SubscribeForm({ type, isSmall }) {
    return (
        <S.Container
            id="mc-embedded-subscribe-form"
            action="https://dev.us3.list-manage.com/subscribe/post?u=23a611280baff5c6bd68c83e3&amp;id=8dd07d6ca8"
            method="post"
            name="mc-embedded-subscribe-form"
            novalidate=""
            target="_blank"
        >
            <S.Wrapper id="mc_embed_signup_scroll">
                <h2>Always get the latest updates</h2>
                <S.Text>
                    Don't miss { type === 'weekly' ? 'the next weekly' : 'the next post' }. Drop your email below and get it straight in your inbox.
                </S.Text>

                <S.Input
                    id="mce-EMAIL"
                    label="E-Mail"
                    name="EMAIL"
                    required={true}
                    type="email"
                    placeholder="E-Mail"
                    variant="filled"
                />

                <S.CheckboxContainer>
                    <strong>Choose what you want to get informed about</strong>
                    <S.CheckboxList isSmall={isSmall}>
                        <li>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="1"
                                        color="primary"
                                        name="group[26582][1]"
                                        id="mce-group[26582]-26582-0"
                                    />
                                }
                                label="Weekly"
                            />
                        </li>
                        <li>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="2"
                                        color="primary"
                                        name="group[26582][2]"
                                        id="mce-group[26582]-26582-1"
                                    />
                                }
                                label="Blog Posts"
                            />
                        </li>
                        <li>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="4"
                                        color="primary"
                                        name="group[26582][4]"
                                        id="mce-group[26582]-26582-2"
                                    />
                                }
                                label="Resources & Templates"
                            />
                        </li>
                    </S.CheckboxList>
                </S.CheckboxContainer>
                <S.HiddenInput>
                    <label htmlFor="b_23a611280baff5c6bd68c83e3_8dd07d6ca8">input</label>
                    <input id="b_23a611280baff5c6bd68c83e3_8dd07d6ca8" tabIndex="-1" name="b_23a611280baff5c6bd68c83e3_8dd07d6ca8" type="text" />
                </S.HiddenInput>
                <div>
                    <S.SubmitButton
                        id="mc-embedded-subscribe"
                        variant="contained"
                        type="submit"
                        label="submit button"
                    >
                        Subscribe
                    </S.SubmitButton>
                </div>
            </S.Wrapper>
        </S.Container>
    )
}

export default SubscribeForm
