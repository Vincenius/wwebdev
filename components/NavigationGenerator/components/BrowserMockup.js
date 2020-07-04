import React from 'react'
import styled from 'styled-components'

const dotSize = 12;

const BrowserMockup = styled.div`
  position: relative;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  margin: 20px;
  height: 400px;
`
const BrowserHead = styled.div`
  position: relative;
  z-index: 10;
  height: 30px;
  width: 100%;
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
  <BrowserMockup>
    <BrowserHead>
      <BrowserDots></BrowserDots>
    </BrowserHead>
    <div>
      { children }
    </div>
  </BrowserMockup>
)

export default NavigationPreview
