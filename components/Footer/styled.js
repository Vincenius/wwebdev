import styled from 'styled-components'
import { darkGrey, lightGrey } from '../../ui/constants'
import * as ui from '../../ui'

export const Container = styled.footer`
    position: relative;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0px;
    background: ${darkGrey};
    color: ${lightGrey};
    margin-top: 50px;

    img {
        width: 100px;
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
`
export const Copyright = styled.div`
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0px;
    color: ${lightGrey};
    margin-top: 12px;
`
export const RightFooter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0;

    > * {
        display: inline-flex;
        justify-content: flex-end;
    }
`
export const FooterLinks = styled.ul`
    list-style: none;

    li {
        margin-right: 16px;

        &:last-child {
            margin-right: 0;
        }
    }

    a {
        text-decoration: none;
        color: ${lightGrey};

        &:hover {
            text-decoration: underline;
        }
    }
`