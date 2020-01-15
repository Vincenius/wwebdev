import styled from 'styled-components'
import { breakpoint } from '../../ui/constants'

export const Container = styled.div`
    display: flex;
    margin-bottom: 70px;
    margin-top: 30px;

    @media only screen and (max-width: ${breakpoint}) {
        flex-direction: column;
    }

    h3 {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 32px;

        a { text-decoration: none; }
    }
`
export const Image = styled.img`
    width: 34%;
    height: 100%;
    object-fit: cover;
    margin-right: 20px;
    margin-top: 0;

    @media only screen and (max-width: ${breakpoint}) {
        width: 100%;
        margin-bottom: 20px;
    }
`

export const Content = styled.div`
    width: 66%;

    @media only screen and (max-width: ${breakpoint}) {
        width: 100%;
    }
`
