import styled from 'styled-components'
import MuiButton from '@material-ui/core/Button'

export const Container = styled.div`
  box-shadow: 0 1px 4px 1px hsla(0, 0%, 0%, 0.1);
  margin-bottom: 40px;
`

export const TopContainer = styled.div`
  padding: 20px 20px 0 20px;

  h2 {
    position: relative;
    font-weight: 300;
    font-size: 1.2em;
    margin: 0;
    padding-bottom: 5px;

    &::after {
      content: '';
      display: block;
      width: 1.5em;
      height: 1px;
      position: absolute;
      left: 0;
      top: 100%;
      background: #017a8c;
    }
  }
`

export const Content = styled.div`
  display: flex;

  img {
    width: 50%;
    margin-right: 10px;
    object-fit: contain;
  }

  p {
    width: 50%;
    font-size: 0.8em;
  }
`
export const Button = styled(MuiButton)`
  width: 100%;
  background: #017a8c !important;
  margin-top: 10px;
  border-radius: 0 !important;
  color: #fff !important;
`