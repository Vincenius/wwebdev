import styled from 'styled-components'
import { breakpointSmall } from '../../ui/constants'

export const Navigation = styled.nav`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: ${breakpointSmall}) {
        flex-direction: column;
    }

    ul {
        display: inline-flex;
        list-style: none;
        padding: 0;
        margin: 0;

        @media (max-width: ${breakpointSmall}) {
            margin-top: 20px;
            flex-wrap: wrap;
            justify-content: center;
        }

        a {
            font-size: 13px;
            line-height: 18px;
            letter-spacing: 0px;
            font-weight: 700;
            color: rgba(255,255,255,0.8);
            text-transform: uppercase;
            text-decoration: none;
            line-height: 16px;
            padding: 8px 24px;

            @media (max-width: ${breakpointSmall}) {
                line-height: 32px;
            }

            &:hover {
                color: #fff;
            }
        }

        li:last-child a {
            padding-right: 0;

            @media (max-width: ${breakpointSmall}) {
                padding-right: 24px;
            }
        }
    }
`