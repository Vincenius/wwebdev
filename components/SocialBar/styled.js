import styled from 'styled-components'
import { lightGrey, breakpointLarge } from '../../ui/constants'

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