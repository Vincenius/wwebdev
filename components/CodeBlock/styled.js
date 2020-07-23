import styled, { css } from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 100%;

  ${props => props.hasLabel && css`
    margin-top: 30px;
  `}
`
export const Label = styled.label`
  position: absolute;
  top: -15px;
  background: rgb(245, 242, 240) none repeat scroll 0% 0%;
  padding: 0 15px;
`
