import styled from 'styled-components'
import { lightGrey, breakpointLarge } from '../../ui/constants'

export const Social = styled.ul`
    list-style: none;

    svg {
        fill: ${lightGrey};
        width: auto;

        &:hover {
            fill: #fff;
        }
    }

    li {
        a {
            padding: 16px 20px;
        }

        &:last-child a {
            padding-right: 0;
        }

        &:first-child a {
            padding-left: 0;
        }
    }
`