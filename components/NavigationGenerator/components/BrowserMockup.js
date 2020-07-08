import React from 'react'
import styled from 'styled-components'
import resizePolyfill from 'resize-polyfill'

const dotSize = 12;

const BrowserMockup = styled.div`
  position: relative;
  background: #fff;
  border-radius: 10px;
  overflow-x: hidden;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  margin: 0;
  height: 400px;
  resize: horizontal;
  min-width: 320px;
  max-width: 1080px;
`
const BrowserHead = styled.div`
  position: sticky;
  z-index: 10;
  height: 30px;
  width: 100%;
  top: 0;
  background: #e8e8e8;
  display: flex;
  align-items: center;
`
const BrowserDots = styled.div`
  width: ${dotSize}px;
  height: ${dotSize}px;
  border-radius: ${dotSize}px;
  margin: 0 ${dotSize * 2.5}px;
  background-color: #ffbb00;

  &::before, &::after {
    width: ${dotSize}px;
    height: ${dotSize}px;
    border-radius: ${dotSize}px;
    content: " ";
    position: absolute;
  }

  &::before {
    margin: 0 ${dotSize * -1.5}px;
    background-color: #ff4f4d;
  }

  &::after {
    margin: 0 ${dotSize * 1.5}px;
    background-color: #00ce15;
  }
`

const NavigationPreview = ({ children }) => (
  <BrowserMockup ref={(el) => {
    // IF !CSS.supports
    if (el && (!CSS.supports || !CSS.supports('resize', 'horizontal'))) {
      resizePolyfill(el, true);
    }
  }}>
    <BrowserHead>
      <BrowserDots></BrowserDots>
    </BrowserHead>
    <div>
      { children }
    </div>
  </BrowserMockup>
)

export default NavigationPreview
