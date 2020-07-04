import React from 'react'
import * as ui from '../../ui'
import * as S from './styled'
import BrowserMockup from './components/BrowserMockup'

const NavigationGenerator = props => {
  return (
    <ui.Container>
      <BrowserMockup>
        <S.Navigation>
          <div id="menuToggle">
            <input type="checkbox" />

            <span></span>
            <span></span>
            <span></span>

            <ul id="menu">
              <a href="#"><li>Home</li></a>
              <a href="#"><li>About</li></a>
              <a href="#"><li>Info</li></a>
              <a href="#"><li>Contact</li></a>
            </ul>
          </div>
        </S.Navigation>
      </BrowserMockup>
    </ui.Container>
  )
}

export default NavigationGenerator
