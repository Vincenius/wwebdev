import styled from 'styled-components'
import { logoGradient } from '../../ui/constants'

export const Button = styled.a`
  padding: 7px 10px 7px 10px !important;
  line-height: 35px !important;
  height:51px !important;
  min-width:217px !important;
  text-decoration: none !important;
  display:inline-flex !important;
  color:#FFFFFF !important;
  background: ${logoGradient} !important;
  border-radius: 5px !important;
  border: 1px solid transparent !important;
  padding: 7px 10px 7px 10px !important;
  margin: 0 0 0 auto;
  font-size: 22px !important;
  letter-spacing: 0.6px !important;
  box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5) !important;
  font-family:'Cookie', cursive !important;
  box-sizing: border-box !important;
  transition: 0.3s all linear !important;

  &:hover {
    text-decoration: none !important;
    box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;
    opacity: 0.85 !important;
    color:#FFFFFF !important;
  }

  img {
    height: 34px !important;
    width: 35px !important;
    margin-bottom: 1px !important;
    box-shadow: none !important;
    border: none !important;
    vertical-align: middle !important;
  }

  span {
    margin-left: 15px;
    font-size: 28px !important;
  }
`
