import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import { greyBlue, breakpointSmall } from '../../ui/constants'

export const CoffeeButton = styled(Button)`
  margin: 0 0 0 auto !important;
  background-color: ${greyBlue} !important;

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
