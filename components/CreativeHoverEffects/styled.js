import styled from 'styled-components'
import { greenBlue, breakpointLarge } from '../../ui/constants'

// TODO import from constants
const linkColor = '#4fc3f7';
const linkHoverColor = '#03a9f4';
const curvyColor = 'rgba(0,0,0,.5)';
const gradientBg = 'rgba(0, 0, 0, 0) linear-gradient(90deg, hsl(141,81%,76%),hsl(186,81%,76%),hsl(231,81%,76%),hsl(276,81%,76%),hsl(321,81%,76%),hsl(6,81%,76%),hsl(51,81%,76%),hsl(96,81%,76%)) repeat scroll 0% 0% / 200% 200%'

export const Container = styled.div`
    position: relative;
    min-height: 100vh;
    height: 100%;

    font-size: 1.6rem;
    background-color: #001224;
    color: #fff;
    min-height: 100vh;
    height: 100%;
    width: 100%;

    a {
        color: #fff;
        font-weight: bold;
        text-decoration: none;
        font-size: 2em;

        @media (max-width: 600px) {
            font-size: 1.6em;
        }
    }
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: center;
    max-width: 1128px;
    margin: 0 auto;
    padding: 44px;

    h1,
    h2 {
        margin-bottom: 0.8em;
        max-width: 100%;
        line-height: 1.1em;
    }

    h1 {
        text-decoration: underline;

        @media (max-width: 800px) {
            font-size: 1.5em;
            margin-bottom: 0;
        }

        @media (max-width: 768px) {
            text-align: center;
        }

        @media (max-width: 600px) {
            font-size: 1.2em;
        }
    }

    h2, h2 a {
        font-weight: light;
        font-size: 18px;
    }

    h2 {
        display: inline-flex;
        justify-content: space-between;
    }

    h2 a {
        color: ${linkColor};
        text-decoration: none;

        &:hover {
            color: ${linkHoverColor};
            text-decoration: underline;
        }
    }
`

export const Subline = styled.p`
    display: none;
    font-size: 0.6em;

    @media (max-width: 800px) {
        display: block;
        margin-bottom: 3em;
        text-align: center;
    }
`

export const GitHubLink = styled.a`
    font-size: 1em !important;
    color: ${linkColor} !important;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    margin-left: 0.2em;

    &:hover {
        color: ${linkHoverColor} !important;
        svg { fill: ${linkHoverColor}; }
    }

    svg {
        fill: ${linkColor};
        width: 1em;
        height: 0.8em;
    }
`

export const DemoContainer = styled.section`
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;

    > * {
        margin-right: 50px;

        &:last-child {
            margin-right: 0;
        }
    }

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;;
        margin-bottom: 0;
        > * { margin-right: 0; }
    }
`

export const Demo = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        margin-bottom: 50px;
        max-width: 300px;
    }
`

export const Wave = styled.a`
    color: transparent !important;
    background: url("/resources/creative-hover-effects/wave.svg") repeat-x #fff;
    background-clip: text;
    background-size: 200% 100%;
    background-position-x: 0;
    background-position-y: 1em;
    transition: background-position-y 0.6s ease;
    animation: waveAnimation 4s infinite linear;
    animation-play-state: paused;

    &:hover, &.hover  {
        background-position-x: 0;
        background-position-y: 0;
        animation-play-state: running;
    }

    @keyframes waveAnimation{
        from {
            background-position-x: 0%;
        }
        to {
            background-position-x: 200%;
        }
    }
`

export const Stripes = styled.a`
    color: transparent !important;
    background: url("/resources/creative-hover-effects/stripes.png") repeat #fff;
    background-size: 100%;
    background-position: 0%;
    background-clip: text;
    animation: stripeAnimation 3s linear infinite;
    animation-play-state: paused;

    &:hover, &.hover {
        animation-play-state: running;
    }

    @keyframes stripeAnimation {
        100% {
            background-position-y: -200%;
        }
    }
`

export const Curvy = styled.a`
    background: radial-gradient(circle at 100% 50%, transparent 20%, ${curvyColor} 21%, ${curvyColor} 34%, transparent 35%, transparent),
        radial-gradient(circle at 0% 50%, transparent 20%, ${curvyColor} 21%, ${curvyColor} 34%, transparent 35%, transparent) 0 -50px;
    background-color: #fff;
    background-size: 75px 100px;
    background-clip: text;
    background-repeat: repeat-x;
    background-position-y: -2em;
    transition: background-position-y 0.6s ease;
    color: transparent !important;
    animation: curvyAnimation 3s linear infinite;
    animation-play-state: paused;

    &:hover, &.hover  {
        animation-play-state: running;
        background-position-y: 0%, -50px;
    }

    @keyframes curvyAnimation {
        100% {
            background-position-x: 135%;
        }
    }
`

export const Border = styled.a`
    position: relative;
    white-space: nowrap;
    text-shadow: -2px 0 ${greenBlue}, 0 2px ${greenBlue}, 2px 0 ${greenBlue}, 0 -2px ${greenBlue};
    width: 100%;
    transition: width 0.5s ease;

    &::after {
        content: 'HOVER ME';
        color: #fff;
        position: absolute;
        top: 0;
        left: 0;
        text-shadow: -2px 0 #000, 0 2px #000, 2px 0 #000, 0 -2px #000;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
    }

    &:hover, &.hover  {
        width: 0%;
    }
`

export const Gradient = styled.a`
    background: ${gradientBg};
    color: transparent !important;
    background-clip: text;

    &:hover, &.hover  {
        animation: GradientAnimation 2s ease infinite;
    }

    @keyframes GradientAnimation {
        0% { background-position: 0% 50% }
        50% { background-position: 100% 50% }
        100% { background-position: 0% 50% }
    }
`

const stripeOneColor = 'rgb(241, 241, 241)'
const stripeTwoColor = 'rgb(128, 128, 128)'
const stripeThreeColor = 'rgb(190, 190, 190)'

export const Stripes2 = styled.a`
    position: relative;
    color: transparent !important;
    background-image: repeating-linear-gradient(45deg, ${stripeOneColor} 0px, ${stripeOneColor} 144px, ${stripeTwoColor} 144px, ${stripeTwoColor} 288px, ${stripeThreeColor} 288px, ${stripeThreeColor} 432px);
    background-size: 250%;
    background-position: 0%;
    background-clip: text;
    animation: stripe2Animation 3s linear infinite;
    animation-play-state: paused;

    &:hover, &.hover {
        animation-play-state: running;
    }

    @keyframes stripe2Animation {
        100% {
            background-position: 165%;
        }
    }
`
