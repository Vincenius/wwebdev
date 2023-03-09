import React, { useEffect } from 'react'
import styled from 'styled-components'
import dynamic from 'next/dynamic'

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
  useEffect(() => {
    import('sponsor-ninja-widget').then(({ SponsorNinja }) => {
      new SponsorNinja({
        id: '63d7dd38d907a8ed61dca67f',
        target: '#sponsor-ninja-container',
        position: 'bottom',
        alignment: 'left',
        color: '#017a8c'
      })
    })
  })

  return <div>
    <Label>Sponsors</Label>
    <Container id="sponsor-ninja-container"></Container>
  </div>
}

export default SponsorNinjaWidget
