import styled, { css } from 'styled-components'

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function shadeColor(color, percent) {
    var R = parseInt(color.substring(1,3),16);
    var G = parseInt(color.substring(3,5),16);
    var B = parseInt(color.substring(5,7),16);

    R = parseInt(R * (100 + percent) / 100);
    G = parseInt(G * (100 + percent) / 100);
    B = parseInt(B * (100 + percent) / 100);

    R = (R<255)?R:255;
    G = (G<255)?G:255;
    B = (B<255)?B:255;

    var RR = ((R.toString(16).length==1)?"0"+R.toString(16):R.toString(16));
    var GG = ((G.toString(16).length==1)?"0"+G.toString(16):G.toString(16));
    var BB = ((B.toString(16).length==1)?"0"+B.toString(16):B.toString(16));

    return "#"+RR+GG+BB;
}

export const createKeyframe = () => {
    return `@keyframes cube {
    from {
        transform: scale(0) rotate(0deg) translate(-50%, -50%);
        opacity: 1;
    }
    to {
        transform: scale(20) rotate(960deg) translate(-50%, -50%);
        opacity: 0;
    }
}
`
}

export const Container = styled.ul`
    ${createKeyframe()}
    ${props => backgroundCss(props)}
    ${props => liStyle(props)}
    ${props => liChildStyle(props)}
`

export const backgroundCss = ({ bgColor }) => {
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

export const liStyle = ({ speed, bgColor }) => {
    return `li {
    position: absolute;
    top: 80vh;
    left: 45vw;
    width: 10px;
    height: 10px;
    border: solid 1px ${shadeColor(bgColor, -10)};
    color: transparent;
    transform-origin: top left;
    transform: scale(0) rotate(0deg) translate(-50%, -50%);
    animation: cube ${23 - speed}s ease-in forwards infinite;
}`
}

export const liChildStyle = ({ count, bgColor, addBgClass }) => {
    let styles
    let randomTops = []
    let randomLefts = []
    const percentage = (100 / count)

    // generate array of balanced positions
    for (let i = 0; i < count; i += 1) {
        randomTops.push(Math.floor((Math.random() * percentage) + percentage * i))
        randomLefts.push(Math.floor((Math.random() * percentage) + percentage * i))
    }

    randomTops = shuffle(randomTops)
    randomLefts = shuffle(randomLefts)

    for (let i = 0; i < count; i += 1) {
        const randomLeft = randomLefts.pop()
        const randomTop = randomTops.pop()
        const lighten = Math.random() < 0.5 ? true : false

        styles += `
${addBgClass ? '.background ' : ''}li:nth-child(${i}) {
    animation-delay: ${i * 2}s;
    left: ${randomLeft}vw;
    top: ${randomTop}vh;${lighten ? `
    border-color: ${shadeColor(bgColor, 10)};` : ''}
}
`
    }

    return css`${styles}`;
}
