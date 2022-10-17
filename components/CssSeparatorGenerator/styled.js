import styled, { css } from 'styled-components'
import _get from 'lodash/get'
import Card from '@material-ui/core/Card'
import MuiCheckbox from '@material-ui/core/Checkbox'
import MuiSlider from '@material-ui/core/Slider'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import MuiFormControlLabel from '@material-ui/core/FormControlLabel'
import { darkGrey, greyBlue, lightGrey, logoColorLeft, breakpointLarge } from '../../ui/constants'
import * as ui from '../../ui'
import {
  generateSkewCss,
  generateSemiCircleCss,
  generateWaveCss,
  generateSpikesCss,
  generateTriangleCss,
  generateCurvedCss,
} from './codeGenerators'
import { MobileFriendly } from '@material-ui/icons'

export const Container = styled.main`
  height: 100%;
`

export const Header = styled.header`
  position: absolute;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 20px;
  box-sizing: border-box;

  a {
    color: #fff;
  }

  img {
    height: 50px;
    margin-left: 3px;
  }

  svg {
    font-size: 32px;
  }
`
export const SidebarContainer = styled(ui.SidebarContainer)`
  @media (max-width: ${breakpointLarge}) {
    flex-direction: column-reverse;
  }
`
const Section = styled.section`
  position: relative;
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Top = styled(Section)`
  color: #fff;
  background: ${props => props.noBgColor ? 'transparent' : darkGrey};
`

export const SkewBg = styled.div`
  ${props => generateSkewCss(props.options)}
`

export const SemiCircle = styled(Top)`
  ${props => generateSemiCircleCss(props.options)}
`

export const Wave = styled.div`
  ${props => generateWaveCss(props.options)}
`

export const Spikes = styled(Top)`
  ${props => generateSpikesCss(props.options)}
`

export const Triangle = styled(Top)`
  ${props => generateTriangleCss(props.options)}
`

export const Curved = styled(Top)`
  ${props => generateCurvedCss(props.options)}
`

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: ${breakpointLarge}) {
    margin-bottom: 15px;
  }

  > * {
    width: 100%;
    flex-basis: calc(50% - 20px);
    margin: 20px 0;

    @media (max-width: ${breakpointLarge}) {
      flex-basis: calc(33% - 20px);
    }

    &.active,
    &:hover {
      cursor: pointer;
      box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
  }

  img {
    width: 100%;
  }
`

export const ControlContainer = styled.div`
  position: absolute;
  top: 40px;
  left: 20px;
  background: rgba(0,0,0,0.8);
  color: #fff;
  margin: 20px;
  padding: 20px;
  max-width: 300px;
  z-index: 100;

  h3 {
    margin: 0;
    color: #fff;
  }

  label {
    color: ${lightGrey};
  }
`
export const SliderContainer = styled.div`
  label {
    text-transform: capitalize;
  }
`

export const Controls = styled(Card)`
  position: relative;
  margin-top: 30px;
`

export const ControlContent = styled.div`
  padding: 10px;
  display: ${props => props.isVisible ? 'block' : 'none'};
`

export const FormControlLabel = styled(MuiFormControlLabel)`
  margin-bottom: 10px;
`
export const Checkbox = styled(MuiCheckbox)`
    color: ${lightGrey} !important;
`
export const Slider = styled(MuiSlider)`
  color: ${logoColorLeft} !important;
`
export const CodeArea = styled(TextareaAutosize)`
    width: 100%;
    margin-bottom: ${props => props.marginBottom ? '20px' : '0'};
`

export const CopyContainer = styled.div`
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  svg {
    color: ${darkGrey};
    margin-right: 4px;
  }
`

export const Copied = styled.span`
    display: inline-block;
    padding: 4px;
    margin-right: 5px;
    background: rgba(0,0,0,0.8);
    color: rgba(255,255,255,0.6);
    border-radius: 5px;
    opacity: 0;
    transition: opacity 0.3s;

    ${props => props.visible && css`
        opacity: 1;
    `}
`
export const GithubLink = styled.a`
  padding: 20px;
  color: ${darkGrey};

  &:hover {
    color: ${greyBlue};
  }
`
export const MobileHide = styled.div`
  @media (max-width: ${breakpointLarge}) {
    display: none;
  }
`
