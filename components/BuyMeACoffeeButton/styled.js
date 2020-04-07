import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import { greyBlue } from '../../ui/constants'

export const CoffeeButton = styled(Button)`
  margin: 0 0 0 auto !important;
  background-color: ${greyBlue} !important;

  img {
    width: 24px;
    margin-right: 12px;
  }
`
