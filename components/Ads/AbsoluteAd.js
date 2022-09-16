import React from 'react'
import styled from 'styled-components'
import Ad, { ids } from './Ad'

export const Container = styled.div`
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
`

const AbsoluteAd = () => {
    return <Container>
      <Ad id={ids.absolute} />
    </Container>
}

export default AbsoluteAd
