import styled from 'styled-components'
import { lightGrey, breakpointLarge } from '../../ui/constants'

export const Screenreader = styled.span`
    clip: rect(1px, 1px, 1px, 1px);
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    word-wrap: normal !important;
`
export const Social = styled.ul`
    list-style: none;

    svg {
        fill: ${lightGrey};

        &:hover {
            fill: #fff;
        }
    }

    li {
        a {
            padding: 16px;
        }

        &:last-child a {
            padding-right: 0;
        }
    }
`