import styled from 'styled-components'
import {
    breakpoint,
    breakpointSmall,
    breakpointLarge,
    lightBlue,
    darkGrey,
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
    line-height: 1.4;
    letter-spacing: 1;
    font-size: 20px;

    ul li {
        margin: 10px 0;
    }

    img {
        max-width: 100%;
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
    max-width: 275px;
    margin-left: 50px;

    @media (max-width: ${breakpointLarge}) {
        margin: 0;
        max-width: 100%;
    }

    h2 {
        margin: 6px 0 16px;
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
    background: #f8f8f8f8;
`