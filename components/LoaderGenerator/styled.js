import styled, { css } from 'styled-components'
import Paper from '@mui/material/Paper'
import { blue } from '../../ui/constants'

export const ControlContainer = styled.div`
  display: flex;
  gap: 2em;
  width: 100%;
  margin-bottom: 2em;
`

export const SliderContainer = styled.div`
  width: 100%;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3em;
`

export const LoaderCard = styled(Paper)`
  padding: 1em;
  width: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${props => props.active ? blue : 'transparent'};
  cursor: pointer;
`

export const getLoaderCss = ({ count, color, size, gap, speed }) =>`
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  padding: 1px;
  background: conic-gradient(#0000, ${color}) content-box;
  mask: repeating-conic-gradient(
    #0000 0deg,
    #000 1deg calc(360deg/${count} - ${(gap*10)/count}deg - 1deg),
    #0000 calc(360deg/${count} - ${(gap*10)/count}deg) calc(360deg/${count})
  ), radial-gradient(
    farthest-side,
    #0000 calc(98% - ${size}px),
    #000 calc(100% - ${size}px)
  );
  mask-composite: intersect;
  -webkit-mask-composite: destination-in;
  animation: spin ${speed}ms infinite steps(${count});
`

export const getLoaderAnimation = () => `
@keyframes spin { to { transform: rotate(1turn) } }
`

export const getLoaderDotsCss = ({ count, color, size, gap, speed }) => `
  transform: scale(0.5);
  display: inline-block;
  height: 1em;
  width: 1em;
  line-height: 1;
  vertical-align: middle;
  border-radius: 1em;
  transition: all 150ms linear 0s;
  color: ${color};
  box-shadow: ${Array.from(Array(count).keys()).map(i =>
    `${2 * (Math.cos((i * 360 / count) * 0.01745329252))}em
      ${2 * (Math.sin((i * 360 / count) * 0.01745329252))}em 0
      ${(35/size) / 40 * -1}em`
  ).slice((gap / 30) * (count / 2)).join(',')};
  animation: spinDots ${speed}ms infinite steps(${count});
`
export const getLoaderDotsAnimation = () => `
@keyframes spinDots {
  0% {
    transform: scale(0.5) rotate(0);
    animation-timing-function: cubic-bezier(.55,.055,.675,.19);
  }
  50% {
    transform: scale(0.5) rotate(180deg);
    animation-timing-function: cubic-bezier(.215,.61,.355,1);
  }
  100% {
    transform: scale(0.5) rotate(360deg);
  }
}`

export const getLoaderRingCss = ({ speed }) => `
  width: 2.2em;
  height: 2.2em;
  display: block;
  position: relative;
  animation: spinRing ${speed*1.5}ms linear infinite;
`
export const getLoaderRingAfter = ({ count, color, size, gap, speed }) => `
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  height: auto;
  width: auto;
  border: ${size/2}px solid ${color};
  border-radius: 50%;
  clip-path: polygon(50% 50%, 50% 0%, 100% 0%,100% ${-100 + ((30/gap) * 60)}%);
  animation: spinRingInner ${speed*1.5}ms cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite;
`

export const getLoaderRingAnimation = () => `
@keyframes spinRing {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
@keyframes spinRingInner {
  0%   { transform: rotate(-180deg); }
  50%  { transform: rotate(-160deg); }
  100% { transform: rotate(180deg); }
}`

export const getLoaderHourglasCss = ({ speed }) => `
  position: relative;
  display: block;
  height: 50px;
  width: 50px;
  transition: all .3s;
  transition-timing-function: ease-in;
  animation: spinHourglas ${speed}ms infinite;
`
export const getLoaderHourglasAfter = ({ color, size }) => `
  content: '';
  box-sizing: border-box;
  display: inline-block;
  width: 100%;
  height: 100%;
  background: 0 0;
  border-width: ${0.065 * (size-1)}em;
  border-color: ${color} transparent;
  border-radius: 50%;
  border-style: solid;
`

export const getLoaderHourglasAnimation = () => `
@keyframes spinHourglas {
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(.55,.055,.675,.19);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(.215,.61,.355,1);
  }
  100% {
    transform: rotate(360deg);
  }
}`

export const Loader = styled.div`
  ${props => getLoaderCss(props.settings)}
  ${getLoaderAnimation()}
`
export const LoaderDots = styled.div`
  ${props => getLoaderDotsCss(props.settings)}
  ${getLoaderDotsAnimation()}
`
export const LoaderRing = styled.div`
  ${props => getLoaderRingCss(props.settings)}
  ${getLoaderRingAnimation()}
  &::after {
    ${props => getLoaderRingAfter(props.settings)}
  }
`
export const LoaderHourglas = styled.div`
  ${props => getLoaderHourglasCss(props.settings)}
  ${getLoaderHourglasAnimation()}
  &::after {
    ${props => getLoaderHourglasAfter(props.settings)}
  }
`

export const getCssString = ({ settings, variant }) => {
  if (variant === 0) {
    return `.loader {${getLoaderCss(settings)}}${getLoaderAnimation()}`
  } else if (variant === 1) {
    return `.loader {${getLoaderDotsCss(settings)}}${getLoaderDotsAnimation()}`
  } else if (variant === 2) {
    return `.loader {${getLoaderRingCss(settings)}}
.loader::after{${getLoaderRingAfter(settings)}}${getLoaderRingAnimation()}`
  } else if (variant === 3) {
    return `.loader {${getLoaderHourglasCss(settings)}}
.loader::after{${getLoaderHourglasAfter(settings)}}${getLoaderHourglasAnimation()}`
  }
}

export const CopyLink = styled.a`
  position: relative;
  cursor: pointer;

  &::after {
    content: 'copied';
    position: absolute;
    top: 0;
    left: 0;
    transform: ${props => props.showCopied
      ? 'translateY(-100%)'
      : 'translateY(-50%)'};
    opacity: ${props => props.showCopied
      ? '1'
      : '0'};
    transition: all 500ms ease-out;
  }
`
