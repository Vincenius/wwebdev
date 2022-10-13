import styled, { css } from 'styled-components'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import Button from '@material-ui/core/Button'

export const Controls = styled.div`
    position: relative;
    z-index: 1;
    height: 100%;

    @media (max-width: 640px) {
        margin-top: 120px;
    }
`

export const Container = styled.div`
    background: rgba(0,0,0,0.8);
    color: #fff;
    padding: 20px;
    width: 260px;
    margin: 20px;

    h3 {
        margin: 0;
    }
    label {
        display: block;
        margin: 10px 0 0;
    }
`
export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${props => props.noMargin ? '0' : '20px'};

    svg {
        font-size: 18px;
        cursor: pointer;
    }
`
export const Source = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    font-size: 14px;

    > *:first-child {
        margin-right: 20px;
    }
`
export const CodeArea = styled(TextareaAutosize)`
    width: 100%;
    margin-bottom: ${props => props.marginBottom ? '20px' : '0'};
`
export const Copied = styled.span`
    display: inline-block;
    padding: 4px;
    margin-right: 5px;
    background: rgba(0,0,0,0.8);
    color: rgba(255,255,255,0.6);
    border-radius: 5px;
    opacity: 0;
    transition: opacity 0.3s;

    ${props => props.visible && css`
        opacity: 1;
    `}
`

export const Nav = styled.div`
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;

    a {
        color: #fff;
        cursor: pointer;
        text-decoration: none;

        &.active, &:hover {
            text-decoration: underline;
        }
    }
`

export const CircleContainer = styled.div`
    display: flex;
`
export const CircleControls = styled.div`
    width: 100%;
    margin: 0 6px;
`
export const NavButton = styled(Button)`
    padding: 0 !important;
    min-width: 32px !important;
`
