import styled, { css } from 'styled-components'
import { lightGrey, greyBlue, darkGrey, lightBlue, breakpoint, breakpointSmall } from '../../ui/constants'

export const Container = styled.article`
    border-bottom: 1px solid ${lightGrey};
    margin-bottom: 3.2rem;
    padding-bottom: 3.2rem;
    display: flex;

    @media only screen and (max-width: ${breakpointSmall}) {
        flex-direction: column;
    }
`
export const Type = styled.span`
    font-weight: bold;
    font-size: .82397rem;
    line-height: 1.86667rem;

    ${props => props.highlight && css`
        b { color: ${lightBlue}; }
    `}
`
export const Updated = styled.span`
    color: ${greyBlue};
    font-size: .82397rem;
    line-height: 1.86667rem;
    margin-bottom: 8px;
    font-style: italic;
`
export const Time = styled.time`
    color: ${greyBlue};
    font-size: .82397rem;
    line-height: 1.86667rem;
    margin-bottom: 8px;
`
export const Headline = styled.h2`
    font-size: calc(1.29454rem + .17836 * ((100vw - 20rem)/ 100));
    font-weight: 700;
    hyphens: manual;
    line-height: 1.2;
    margin: 0 0 16px;

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
    display: block;
    font-size: .77248rem;
    font-weight: 700;
    margin-top: calc(1.06667rem + .25vw);
    text-transform: uppercase;
    color: ${lightBlue};

    &:hover {
        color: ${darkGrey};
        text-decoration: underline;
        cursor: pointer;
    }
`
export const PreviewImage = styled.img`
    width: 200px;
    height: 200px;
    object-fit: cover;
    margin-right: 20px;
    margin-top: 15px;

    @media only screen and (max-width: ${breakpoint}) {
        width: 100px;
        height: 100px;
    }

    @media only screen and (max-width: ${breakpointSmall}) {
        width: 100%;
        height: 200px;
    }
`