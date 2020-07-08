import React from 'react'
import { SizeMe } from 'react-sizeme'
import * as ui from '../../ui'
import * as S from './styled'
import BrowserMockup from './components/BrowserMockup'

const NavigationGenerator = props => {
  return (
    <ui.Container>
        <BrowserMockup>
          <SizeMe>{({ size }) =>
            <S.Navigation width={size.width}>
              <div className="menuContainer">
                <input type="checkbox" />

                <span></span>
                <span></span>
                <span></span>

                <div className="menu">
                  <ul>
                    <a href="#"><li>Home</li></a>
                    <a href="#"><li>About</li></a>
                    <a href="#"><li>Info</li></a>
                    <a href="#"><li>Contact</li></a>
                  </ul>
                  <ul>
                    <a href="#"><li>Info</li></a>
                    <a href="#"><li>Contact</li></a>
                  </ul>
                </div>
              </div>
            </S.Navigation>
          }</SizeMe>
          <S.Center>
            This window is resizable.
          </S.Center>
        </BrowserMockup>
    </ui.Container>
  )
}

export default NavigationGenerator
