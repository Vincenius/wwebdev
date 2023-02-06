import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import FormGroup from '@material-ui/core/FormGroup'
import { greyBlue } from '../../ui/constants'

export const SearchInput = styled(TextField)`
  width: calc(100% - 120px);
`

export const SearchButton = styled(Button)`
  width: 120px;
  height: 58px;
`

export const LoadingContainer = styled.main`
  margin: 50px 0;
  display: flex;
  justify-content: center;

  svg { width: auto; }
`

export const NoResults = styled.main`
  margin: 50px 0;
  color: ${greyBlue};
`

export const ResultContainer = styled.main`
  margin: 50px 0;
`

export const CheckboxContainer = styled(FormGroup)`
  display: flex;
  flex-direction: row !important;
  margin: 20px 0;
`
