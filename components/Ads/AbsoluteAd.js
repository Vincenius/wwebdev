import React from 'react'
import styled from 'styled-components'
import Ad, { ids } from './Ad'

export const Container = styled.div`
    position: absolute;
    right: 20px;
    bottom: 20px;
`

const AbsoluteAd = () => {
    return <Container>
      <Ad id={ids.absolute} />
    </Container>
}

export default AbsoluteAd
