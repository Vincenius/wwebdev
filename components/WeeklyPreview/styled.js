import styled from 'styled-components'
import Skeleton from '@material-ui/lab/Skeleton'
import { lightGrey, darkGrey, lightBlue, greyBlue } from '../../ui/constants'

export const Container = styled.article`
    position: relative;
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
export const ImageSkeleton = styled(Skeleton)`
    padding-top: 63.125%;
    width: 100%;
`
export const Time = styled.time`
    color: ${greyBlue};
    font-size: .82397rem;
    margin-bottom: 8px;
`
export const Headline = styled.h3`
    font-size: 1.3em;
    font-weight: 500;
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
export const ReadMore = styled.span`
    display: inline-flex;
    align-items: center;
    line-height: 1;
    font-size: .77248rem;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: underline;
    color: ${lightBlue};

    &:hover {
        color: ${darkGrey};
        text-decoration: underline;
        cursor: pointer;
    }
`
