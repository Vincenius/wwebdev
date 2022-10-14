import styled from 'styled-components'
import { breakpointSmall, lightBlue } from '../../ui/constants'

export const Container = styled.div`
  display: flex;
  margin-bottom: 50px;
  font-size: 1rem;

  @media (max-width: ${breakpointSmall}) {
    flex-direction: column;
  }
`

export const Article = styled.div`
  width: 100%;
  margin: ${props => props.margin ? '0 30px' : '0'};

  @media (max-width: ${breakpointSmall}) {
    margin: 0 0 30px;
  }

  > * {
    cursor: pointer;
  }

  img {
    width: 100%;
    height: 100px;
    object-fit: cover;

    @media (max-width: ${breakpointSmall}) {
      height: 140px;
    }
  }

  h3 {
    margin: 0;

    &:hover {
      color: ${lightBlue};
    }
  }
`
