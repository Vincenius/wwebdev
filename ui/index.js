import styled from 'styled-components'
import {
    breakpoint,
    breakpointSmall,
    breakpointLarge,
    lightBlue,
    darkGrey,
    blue,
} from './constants'

export const Container = styled.div`
    max-width: 1128px;
    padding-left: 24px;
    padding-right: 24px;
    width: 100%;
    margin: 30px auto;

    @media (max-width: ${breakpoint}) {
        padding-left: 16px;
        padding-right: 16px;
    }
`
export const ArticleContainer = styled(Container)`
    line-height: 1.5;
    letter-spacing: 1;
    font-size: 20px;

    ul li {
        margin: 10px 0;
    }

    img {
        max-width: 100%;
    }

    a {
        color: ${blue};
    }

    h2, h3 {
        color: ${blue};
        margin: 1.6em 0 0.6em;
    }
`
export const PaddingContainer = styled(Container)`
    padding: 0 100px;

    @media (max-width: ${breakpoint}) {
        padding: 0 50px;
    }
    @media (max-width: ${breakpointSmall}) {
        padding: 0 20px;
    }
`
export const BlockLink = styled.a`
    display: block;
`
export const SidebarContainer = styled.div`
    display: flex;

    @media (max-width: ${breakpointLarge}) {
        flex-direction: column;
    }
`
export const SidebarMain = styled.div`
    margin-bottom: 30px;

    > a {
        display: block;
        text-align: center;
        font-weight: bold;
        color: ${lightBlue};
        margin-bottom: 20px;

        &:hover {
            color: ${darkGrey};
        }
    }
`
export const Sidebar = styled.aside`
    width: 100%;
    max-width: 250px;
    margin-left: 50px;

    @media (max-width: ${breakpointLarge}) {
        margin: 0;
        max-width: 100%;
    }
`

export const SidebarContent = styled.aside`
    @media (max-width: ${breakpointLarge}) {
        display: flex;
        flex-direction: column;
    }

    > * {
        @media (max-width: ${breakpointLarge}) {
            max-width: 480px;
        }
    }

    > a:last-child {
        display: block;
        text-align: center;
        font-weight: bold;
        color: ${lightBlue};

        &:hover {
            color: ${darkGrey};
        }
    }
`

export const FlexContainer = styled.div`
    display: flex;
`

export const Code = styled.code`
    margin: 0 4px;
    background: rgb(245, 242, 240) none repeat scroll 0% 0%;
`
export const SmallImage = styled.img`
    max-width: 400px;
    max-height: 400px;
`

export const Screenreader = styled.span`
    clip: rect(1px, 1px, 1px, 1px);
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    word-wrap: normal !important;
`

export const SectionHeadline = styled.h2`
    font-size: 2em;
    margin: 0 0 26px;
`

export const GridContainer = styled(Container)`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 40px;
    margin: 40px auto;
`
export const IntroText = styled(Container)`
    margin: 20px auto 40px;
`
