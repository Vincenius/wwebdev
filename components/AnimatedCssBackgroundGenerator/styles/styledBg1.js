import styled, { css, keyframes } from 'styled-components'

const move = keyframes`
    100% {
        transform: translate3d(0, 0, 1px) rotate(360deg);
    }
`

export function createCSS({
    count,
    colors,
    size,
    speed,
    addBgClass,
}) {
    let styles = '';

    for (let i = 0; i < count; i += 1) {
        const speedValue = 500 - (speed * 10);
        const color = colors[Math.floor((Math.random() * colors.length))];
        const randomTop = Math.floor((Math.random() * 100) + 1);
        const randomLeft = Math.floor((Math.random() * 100) + 1);
        const randomDuration =
            ((Math.floor((Math.random() * speedValue) + 1) * 10) / 10) + 5;
        const randomDelay =
        ((Math.floor((Math.random() * speedValue) + 1) * 10) / 10) * -1;
        const randomTransition1 = Math.floor((Math.random() * 50) + 1) - 25;
        const randomTransition2 = Math.floor((Math.random() * 50) + 1) - 25;
        const blurRadius = Math.random() + 0.5 * size * 0.5;
        const x = Math.random() < 0.5 ? -1 : 1;
        const boxShadow = size * 2 * x;

        styles += `
${addBgClass ? '.background ' : ''}span:nth-child(${i}) {
    color: ${color};
    top: ${randomTop}%;
    left: ${randomLeft}%;
    animation-duration: ${randomDuration}s;
    animation-delay: ${randomDelay}s;
    transform-origin: ${randomTransition1}vw ${randomTransition2}vh;
    box-shadow: ${boxShadow}vmin 0 ${blurRadius}vmin currentColor;
}`
    }

    return css`${styles}`;
}

export const backgroundCss = ({ bgColor }) =>
`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: ${bgColor};
    overflow: hidden;
`

export const spanCss = ({ size, speed, addAnimation }) =>
`
    width: ${size}vmin;
    height: ${size}vmin;
    border-radius: ${size}vmin;
    backface-visibility: hidden;
    position: absolute;
    ${addAnimation ? 'animation: move;' : ''}
    animation-duration: ${speed};
    animation-timing-function: linear;
    animation-iteration-count: infinite;
`

export const Container = styled.div`
    ${props => backgroundCss(props)}
    ${props => createCSS(props)}
`

export const Span = styled.span`
    ${props => spanCss(props)}
    animation-name: ${move};
`
