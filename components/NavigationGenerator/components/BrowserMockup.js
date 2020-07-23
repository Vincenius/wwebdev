import React from 'react'
import styled from 'styled-components'

const dotSize = 12;
const headHeight = 30;

const BrowserMockup = styled.div`
  position: relative;
  background: #fff;
  border-radius: 10px;
  overflow-x: hidden;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  margin: 0;
  height: 450px;
  resize: horizontal;
  min-width: 320px;
  max-width: 1080px;
  margin-bottom: 50px;
`
const BrowserHead = styled.div`
  position: sticky;
  z-index: 10;
  height: ${headHeight}px;
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

const BrowserContent = styled.div`
  height: calc(100% - ${headHeight}px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const NavigationPreview = ({ children }) => (
  <BrowserMockup>
    <BrowserHead>
      <BrowserDots></BrowserDots>
    </BrowserHead>
    <BrowserContent>
      { children }
    </BrowserContent>
  </BrowserMockup>
)

export default NavigationPreview
