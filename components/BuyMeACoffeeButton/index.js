import React from 'react'
import * as S from './styled'

const BuyMeACoffeeButton = props => (
    <S.CoffeeButton target="_blank" rel="noopener noreferrer" href="https://www.buymeacoffee.com/wwebdev">
        <img src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Buy me a coffee logo" />
        <span>Buy me a coffee</span>
    </S.CoffeeButton>
)

export default BuyMeACoffeeButton
