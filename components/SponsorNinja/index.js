import React, { useEffect } from 'react'
import styled from 'styled-components'
import { SponsorNinja } from 'sponsor-ninja-widget'

const Container = styled.div`
  margin-bottom: 40px;
  padding: 0 !important;
`

const SponsorNinjaWidget = () => {
  useEffect(() => {
    new SponsorNinja({
      id: '63d7dd38d907a8ed61dca67f',
      target: '#sponsor-ninja-container',
      position: 'bottom',
      alignment: 'left',
      color: '#017a8c'
    })
  })

  return <div>
    <span>This roject is sponsored by:</span>
    <Container id="sponsor-ninja-container"></Container>
  </div>
}

export default SponsorNinjaWidget
