import styled from 'styled-components'
import Paper from '@mui/material/Paper'
import Chip from '@mui/material/Chip'
import Skeleton from '@mui/material/Skeleton'
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