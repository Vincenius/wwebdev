import styled, { css } from 'styled-components'
import Image from 'next/image'
import { breakpointSmall, lightBlue, darkGrey } from '../../ui/constants'

export const Container = styled.div`
  display: flex;
  margin-bottom: 62px;
  font-size: 1rem;

  @media (max-width: ${breakpointSmall}) {
    flex-direction: column;
  }
`

export const Article = styled.div`
  width: 100%;
  margin: ${props => props.margin ? '0 30px' : '0'};

  a {
    text-decoration: none;
  }

  @media (max-width: ${breakpointSmall}) {
    margin: 0 0 30px;
  }

  > * {
    cursor: pointer;
  }

  h3 {
    margin: 0;
    font-weight: normal;
    color: ${darkGrey};
    font-size: 1.1em;

    &:hover {
      color: ${lightBlue};
    }
  }
`

export const PreviewImage = styled(Image)`
  width: 100%;
  height: 100px;
  object-fit: cover;

  @media (max-width: ${breakpointSmall}) {
    height: 160px;
  }
`
