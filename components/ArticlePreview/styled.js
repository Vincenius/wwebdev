import styled, { css } from 'styled-components'
import Skeleton from '@material-ui/lab/Skeleton'
import { lightGrey, greyBlue, darkGrey, lightBlue, breakpoint } from '../../ui/constants'

export const Container = styled.article`
    border-bottom: 1px solid ${lightGrey};
    margin-bottom: 3.2rem;
    padding-bottom: 3.2rem;
    display: flex;
    margin-top: -10px;

    @media only screen and (max-width: ${breakpoint}) {
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
    font-size: 1.3em;
    font-weight: 500;
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
export const ReadMore = styled.span`
    display: inline-flex;
    align-items: center;
    line-height: 1;
    font-size: .77248rem;
    font-weight: 700;
    margin-top: calc(1.06667rem + .25vw);
    text-transform: uppercase;
    text-decoration: underline;
    color: ${lightBlue};

    &:hover {
        color: ${darkGrey};
        text-decoration: underline;
        cursor: pointer;
    }
`
const imageStyle = css`
    width: 300px;
    height: 170px !important; /* to overwrite skeleton default */
    object-fit: cover;
    margin-right: 20px;
    margin-top: 10px;

    @media only screen and (max-width: ${breakpoint}) {
        width: 100%;
        height: auto;
        min-height: 250px;
        max-height: 300px;
    }
`
export const PreviewImage = styled.img`
    ${imageStyle}
`
export const ImageSkeleton = styled(Skeleton)`
    ${imageStyle}
`