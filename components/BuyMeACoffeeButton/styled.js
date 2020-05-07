import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import { lightGrey, breakpointSmall, darkGrey } from '../../ui/constants'

export const CoffeeButton = styled(Button)`
  margin: 0 0 0 auto !important;
  background-color: ${lightGrey} !important;
  color: ${darkGrey} !important;

  &:hover {
    background-color: #fff !important;
  }

  @media (max-width: ${breakpointSmall}) {
    span span {
      font-size: 12px !important;
      text-align: center;
    }
  }

  img {
    width: 24px !important;
    margin-right: 12px;
  }
`
