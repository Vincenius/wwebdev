// Ported verbatim from
// legacy-next/components/AnimatedCssBackgroundGenerator/styles/styledBg3.js

function shuffle<T>(a: T[]): T[] {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        const tmp = a[i]!
        a[i] = a[j]!
        a[j] = tmp
    }
    return a
}

function shadeColor(color: string, percent: number): string {
    let R = parseInt(color.substring(1, 3), 16)
    let G = parseInt(color.substring(3, 5), 16)
    let B = parseInt(color.substring(5, 7), 16)

    R = parseInt(String((R * (100 + percent)) / 100))
    G = parseInt(String((G * (100 + percent)) / 100))
    B = parseInt(String((B * (100 + percent)) / 100))

    R = R < 255 ? R : 255
    G = G < 255 ? G : 255
    B = B < 255 ? B : 255

    const RR = R.toString(16).length == 1 ? '0' + R.toString(16) : R.toString(16)
    const GG = G.toString(16).length == 1 ? '0' + G.toString(16) : G.toString(16)
    const BB = B.toString(16).length == 1 ? '0' + B.toString(16) : B.toString(16)

    return '#' + RR + GG + BB
}

export const createKeyframe = (): string => {
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

export const backgroundCss = ({ bgColor }: { bgColor: string }): string => {
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

export const liStyle = ({ speed, bgColor }: { speed: number; bgColor: string }): string => {
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

export const liChildStyle = ({
    count,
    bgColor,
    addBgClass,
}: {
    count: number
    bgColor: string
    addBgClass?: boolean
}): string => {
    let styles = ''
    let randomTops: number[] = []
    let randomLefts: number[] = []
    const percentage = 100 / count

    // generate array of balanced positions
    for (let i = 0; i < count; i += 1) {
        randomTops.push(Math.floor(Math.random() * percentage + percentage * i))
        randomLefts.push(Math.floor(Math.random() * percentage + percentage * i))
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
    top: ${randomTop}vh;${
            lighten
                ? `
    border-color: ${shadeColor(bgColor, 10)};`
                : ''
        }
}
`
    }

    return styles as string
}
