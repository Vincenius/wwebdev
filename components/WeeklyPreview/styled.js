import styled from 'styled-components'
import { lightGrey, darkGrey, lightBlue, greyBlue } from '../../ui/constants'

export const Container = styled.article`
    border-bottom: 1px solid ${lightGrey};
    margin-bottom: 1.6rem;
    padding-bottom: 1.6rem;

    header {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }
`
export const Image = styled.img`
    width: 100%;
`
export const Time = styled.time`
    color: ${greyBlue};
    font-size: .82397rem;
    margin-bottom: 8px;
`
export const Headline = styled.h3`
    font-size: calc(1.29454rem + .17836 * ((100vw - 20rem)/ 100));
    font-weight: 700;
    hyphens: manual;
    line-height: 1.2;
    margin: 0 0 6px;

    a {
        color: ${darkGrey};
        text-decoration: none;
        transition: all .12s ease;

        &:hover {
            color: ${lightBlue};
        }
    }
`
export const ReadMore = styled.a`
    display: inline-flex;
    align-items: center;
    line-height: 1;

    &:hover {
        color: ${lightBlue};
        text-decoration: none;
        cursor: pointer;
    }
`
