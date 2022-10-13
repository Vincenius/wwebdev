import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import { breakpoint } from '../../ui/constants'

export const Container = styled(Card)`
    display: flex;
    margin-bottom: 70px;
    margin-top: 0;
    flex-direction: ${props => props.isSmall ? 'column' : 'row'};

    @media only screen and (max-width: ${breakpoint}) {
        flex-direction: column;
    }

    h3 {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 24px;
        line-height: 1.2;

        a { text-decoration: none; }
    }
`
export const Image = styled.img`
    width: ${props => props.small ? '100%' : '34%;'};
    height: 100%;
    object-fit: cover;
    margin-top: 0;
    margin-bottom: ${props => props.small ? '20px' : '0'};

    @media only screen and (max-width: ${breakpoint}) {
        width: 100%;
        margin-bottom: 20px;
    }
`

export const Content = styled.div`
    width: ${props => props.small ? '100%' : '66%;'};
    padding: 20px;

    @media only screen and (max-width: ${breakpoint}) {
        width: 100%;
    }
`
