import React from 'react'
import styled from 'styled-components'
import Script from 'next/script'

const Container = styled.div`
  margin-bottom: 40px;
  padding: 0 !important;
`

const Label = styled.h3`
  position: relative;
  font-size: 1.2em;
  margin: 0 0 1em;
  padding-bottom: 5px;
  font-family: "Lato", sans-serif;
  font-weight: 300;

  &::after {
    content: '';
    display: block;
    width: 1.5em;
    height: 1px;
    position: absolute;
    left: 0;
    top: 100%;
    background: #017a8c;
  }
`

const SponsorNinjaWidget = () => {
  return <div>
    <Script
      src="https://app.sponsor.ninja/widget.js"
      onLoad={() => {
        new SponsorNinja({
          id: '63d7dd38d907a8ed61dca67f',
          target: '#sponsor-ninja-container',
          position: 'bottom',
          alignment: 'left',
          color: '#017a8c'
        })
      }}
    />
    <Label>Sponsors</Label>
    <Container id="sponsor-ninja-container"></Container>
  </div>
}

export default SponsorNinjaWidget
