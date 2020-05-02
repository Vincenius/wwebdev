import styled from 'styled-components'

const linkColor = '#4fc3f7';
const linkHoverColor = '#03a9f4';

export const Container = styled.div`
    position: relative;
    min-height: 100vh;
    height: 100%;

    font-size: 1.6rem;
    background-color: #000;
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
    max-width: 900px;
    margin: 0 auto;
    padding: 50px;

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
            margin-bottom: 2em;
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

export const GitHubLink = styled.a`
    font-size: 1em;
    color: ${linkColor};
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    margin-left: 0.2em;

    &:hover {
        color: ${linkHoverColor};
        svg { fill: ${linkHoverColor}; }
    }

    svg {
        fill: ${linkColor};
        width: 1em;
        height: 0.8em;
    }

    span {
        clip: rect(1px, 1px, 1px, 1px);
        position: absolute;
        height: 1px;
        width: 1px;
        overflow: hidden;
        word-wrap: normal;
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
        max-width: 275px;
    }
`
