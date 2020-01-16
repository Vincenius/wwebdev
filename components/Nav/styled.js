import styled from 'styled-components'
import * as ui from '../../ui'
import { darkGrey, breakpointSmall, breakpoint } from '../../ui/constants'

export const Container = styled.div`
    background: ${darkGrey};
    position: relative;
    padding: 16px 20px;
    margin: 0 auto 30px;

    img {
        width: 90px;

        @media (max-width: ${breakpoint}) {
            margin-bottom: 10px;
        }
    }
`

export const Navigation = styled(ui.Container)`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;

    @media (max-width: ${breakpoint}) {
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

            @media (max-width: ${breakpoint}) {
                line-height: 50px;
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