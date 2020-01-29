import styled, { css } from 'styled-components'

export const Container = styled.ul`
    ${createKeyframe()}
    ${props => backgroundCss(props)}
    ${props => generalCss(props)}
    ${props => createCSS(props)}
`

export function createKeyframe() {
    return `@keyframes animate {
    0%{
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }
    100%{
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }
}
`
}

export function createCSS({ addBgClass, count, size }) {
    let styles = '';

    for (let i = 0; i < count; i += 1) {
        const randomLeft = Math.floor(Math.random() * 90);
        const randomSize = Math.floor((Math.random() * (size[1] - size[0])) + size[0]);
        const randomDelay = Math.floor((Math.random() * (i * 5)) + 1);

        styles += `
${addBgClass ? '.background ' : ''}li:nth-child(${i}) {
    left: ${randomLeft}%;
    width: ${randomSize}px;
    height: ${randomSize}px;
    bottom: -${randomSize}px;
    animation-delay: ${randomDelay}s;
}`
    }

    return css`${styles}`;
}

export const generalCss = ({ speed }) => {
    return `li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    animation: animate ${54 - speed}s linear infinite;
}


`
}

export const backgroundCss = ({bgColor}) => {
    return `
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    background: ${bgColor};
    overflow: hidden;
`
}