import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  margin-bottom: 50px;
  font-size: 1rem;
`

export const Article = styled.div`
  width: 100%;
  margin: ${props => props.margin ? '0 30px' : '0'};

  > * {
    cursor: pointer;
  }

  img {
    width: 100%;
    height: 100px;
    object-fit: cover;
  }

  h3 {
    margin: 0;
  }
`
