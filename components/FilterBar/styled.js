import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'
import Chip from '@material-ui/core/Chip'
import Skeleton from '@material-ui/lab/Skeleton'
import { darkGrey, greyBlue } from '../../ui/constants'

export const Container = styled(Paper)`
  margin-top: 30px;
  padding: 15px;
`

export const FilterChip = styled(Chip)`
  margin: 0 10px 10px 0 !important;
`

export const FilterLabel = styled.p`
  color: ${darkGrey};
  margin: 0 0 10px;

  span {
    color: ${greyBlue};
  }
`

export const LoadingChip = styled(Skeleton)`
  border-radius: 16px;
`