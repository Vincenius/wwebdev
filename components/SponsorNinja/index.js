import React, { useEffect, useContext } from 'react'
import styled from 'styled-components'
import Skeleton from '@mui/material/Skeleton'
import { SponsorNinjaContext } from '../../utils/context'

const Container = styled.div`
  margin-bottom: 40px;
  padding: 0 !important;
`

const LoadingContainer = styled(Container)`
  display: flex;
  column-gap: 2em;
  row-gap: 1.5em;
  flex-wrap: wrap;
  padding: 1em,
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
  const data = useContext(SponsorNinjaContext)
  useEffect(() => {
    if (data) {
      new SponsorNinja({
        id: '63d7dd38d907a8ed61dca67f',
        target: '#sponsor-ninja-container',
        position: 'bottom',
        alignment: 'left',
        color: '#017a8c',
        initData: data,
      })
    }
  }, [data])

  return <div>
    <Label>Sponsors</Label>
    { !data && <LoadingContainer>
      <Skeleton variant="circular" height={64} width={64} />
      <Skeleton variant="circular" height={64} width={64} />
      <Skeleton variant="circular" height={64} width={64} />
      <Skeleton variant="circular" height={64} width={64} />
      <Skeleton variant="circular" height={64} width={64} />
    </LoadingContainer>}
    <Container id="sponsor-ninja-container"></Container>
  </div>
}

export default SponsorNinjaWidget
