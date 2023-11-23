import styled from 'styled-components'
import TextField from '@mui/material/TextField'
import MuiCheckbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import { darkGrey, lightGrey, lightBlue, middleDarkGrey, breakpoint, breakpointSmall, logoColorLeft, middleGrey } from '../../ui/constants'
import * as ui from '../../ui'

export const Container = styled.footer`
    position: relative;
    font-size: 15px;
    line-height: 20px;
    letter-spacing: 0px;
    background: ${darkGrey};
    color: ${lightGrey};
    margin-top: 50px;
    padding: 30px 0;

    &::after, &::before {
        content: '';
        position: absolute;
        right: 0;
        left: 0;
        z-index: 1;
        display: block;
        height: 50px;
        background-size: 50px 100%;
        background-image: linear-gradient(135deg, ${darkGrey} 25%, transparent 25%), linear-gradient(225deg, ${darkGrey} 25%, transparent 25%);
        background-position: 0 0;
    }

    &::before {
        top: 0;
        transform: translateY(-100%) rotate(180deg);
    }

    &::after {
        top: 100%;
    }

    h2 {
        color: ${lightGrey};
        margin-top: 0;
    }
`
export const Content = styled(ui.Container)`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 50px;
    padding-bottom: 50px;
    margin: 0 auto;

    > * {
        width: 50%;
    }

    @media (max-width: ${breakpoint}) {
        flex-direction: column-reverse;

        > * {
            width: 100%;
            padding: 0 10px;
        }
    }
`
export const Copyright = styled.div`
    font-size: 15px;
    line-height: 20px;
    letter-spacing: 0px;
    color: ${lightGrey};
    margin-top: 12px;
    text-align: center;
`
export const LeftFooter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    a img {
        height: 40px;
        width: auto;

        @media (max-width: ${breakpoint}) {
            height: 50px;
        }
    }
`
export const Logo = styled.img`
    max-width: 125px;
    height: auto;
    margin: 20px 0 0;

    @media (max-width: ${breakpointSmall}) {
        margin: 30px auto;
    }
`
export const SocialContainer = styled.div`
    margin: 20px 0 10px;

    ul {
        margin: 20px 0 0;
        padding: 0;
        display: inline-flex;
    }

    @media (max-width: ${breakpointSmall}) {
        margin: 0 auto;
    }
`
export const RightFooter = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0;
`
export const FooterLinks = styled.ul`
    list-style: none;
    margin-bottom: 0;
    padding: 0;

    @media (max-width: ${breakpointSmall}) {
        flex-direction: column;
        text-align: right;
    }

    li, img {
        margin: 10px 0;
    }

    a {
        text-decoration: none;
        color: ${lightGrey};

        &:hover {
            text-decoration: underline;
        }
    }
`

export const NewsletterContainer = styled(Container)`
    position: relative;
    margin-top: 50px;
    background-color: ${middleDarkGrey};
    padding-bottom: 0;


`

export const Newsletter = styled(ui.Container)`
    padding-top: ${props => props.type === 'inline' ? '30px' : '50px'};
    padding-bottom: ${props => props.type === 'inline' ? '10px' : '70px'};
    margin: 0 auto;

    h2 {
        color: #fff;
        font-size: 2em;
        font-weight: 300;
        margin-bottom: 0;
        line-height: 1;
    }
    p {
        margin: 10px 0;
        color: ${middleGrey};
    }
`
export const Input = styled(TextField)`
    margin-bottom: 20px !important;
    background: #fff;
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;

    fieldset {
        display: none;
    }
`
export const SubmitButton = styled(Button)`
    background-color: ${lightBlue} !important;
    color: #fff !important;
    height: 58px !important;
    border-top-left-radius: 0px !important;
    border-bottom-left-radius: 0px !important;
`

export const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
export const CheckboxList = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
    padding-left: 0;
    margin-top: 0;

    @media (max-width: ${breakpoint}) {
        flex-direction: column;
    }

    li {
        margin-right: 5px;
    }
`
export const Checkbox = styled(MuiCheckbox)`
    color: ${logoColorLeft} !important;
`
export const HiddenInput = styled.div`
    position: absolute;
    left: -5000px;
`
