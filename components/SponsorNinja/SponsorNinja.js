import React, { useEffect } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin-bottom: 40px;
  padding: 0 !important;
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

  return <Container id="sponsor-ninja-container"></Container>
}

export default SponsorNinjaWidget
