import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
`

const AbsoluteAd = () => {
    return <Container>
      <div id="ezoic-pub-ad-placeholder-105"> </div>
    </Container>
}

export default AbsoluteAd
