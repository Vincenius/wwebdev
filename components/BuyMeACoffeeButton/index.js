import React from 'react'
import * as S from './styled'

const BuyMeACoffeeButton = props => (
    <S.Button class="bmc-button" target="_blank" href="https://www.buymeacoffee.com/wwebdev">
        <img src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Buy me a coffee logo" />
        <span>Buy me a coffee</span>
    </S.Button>
)

export default BuyMeACoffeeButton
