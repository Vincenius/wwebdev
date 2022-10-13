import styled from 'styled-components'
import { breakpoint } from '../../ui/constants'

export const backgroundCss = ({ bgColor }) =>
`
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(to right, ${bgColor[0]}, ${bgColor[1]});
    display: flex;
    flex-grow: 1;
    z-index: -1;
`

export const generalCircleCss = () =>
`
    position: absolute;
    border-radius: 100%;
    height: 0;
    filter: blur(240vw);
    opacity: 0.4;
`

export const circleCss = ({ index, color, size, left, top }) =>
`div:nth-child(${index}) {
    background: linear-gradient(132deg, ${color[0]} 0.00%, ${color[1]} 100.00%);
    width: ${size}%;
    padding-top: ${size}%;
    left: ${left}%;
    top: ${top}%;
    transform: translateX(-50%) translateY(-50%);
}

`

export const Container = styled.div`
    position: relative;
    min-height: 80vh;
    height: 80%;
    display: flex;
    flex-direction: column;
`
export const BottomContainer = styled.div`
    background: #fff;
    padding: 50px 0 0;
    position: relative
`

export const InnerContainer = styled.div`
    position: relative;
    display: flex;
    flex-grow: 1;
    overflow: hidden;
`

export const Background = styled.div`
    ${props => backgroundCss(props.values)}

    & div {
        ${generalCircleCss()}
    }

    ${props => props.values.circles.map((c, i) => circleCss({ index: i+1, ...c }) )}
`

export const RelatedContainer = styled.div`
    display: flex;

    @media (max-width: ${breakpoint}) {
        flex-direction: column;
    }
`