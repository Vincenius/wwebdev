import styled from 'styled-components'
import { Container as UiContainer } from '../../ui/index'

export const Container = styled(UiContainer)`
    margin: 50px auto;
    display: flex;
    justify-content: space-between;
`
export const Link = styled.a`
    max-width: 50%;
    margin: ${props => props.right ? '0 0 0 20px' : '0 20px 0 0'};
    text-align: ${props => props.right ? 'right' : 'left'};
    cursor: pointer;

    span {
        display: block;
    }
`
export const Next = styled.div`
    display: inline-flex;
    align-items: center;
    margin-bottom: 10px;

    svg {
        margin-left: 10px;
    }
`
export const Prev = styled.div`
    display: inline-flex;
    align-items: center;
    margin-bottom: 10px;

    svg {
        transform: rotate(180deg);
        margin-right: 10px;
    }
`