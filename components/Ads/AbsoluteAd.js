import React from 'react'
import styled from 'styled-components'
import Ad from './Ad'

export const Container = styled.div`
    position: absolute;
    right: 20px;
    top: ${props => props.position === 'top'
      ? '20px'
      : props.position === 'bottom' ? 'auto' : '50%'};
    bottom: ${props => props.position === 'bottom'
      ? '20px'
      : props.position === 'top' ? 'auto' : '50%'};
    transform: translateY(${props => props.position === 'center' ? '-50%' : '0'});
    z-index: 2;
`

const AbsoluteAd = ({ position = 'center' }) => {
    return <Container position={position}>
      <Ad />
    </Container>
}

export default AbsoluteAd
