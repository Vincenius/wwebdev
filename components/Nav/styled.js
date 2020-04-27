import styled from 'styled-components'
import * as ui from '../../ui'
import { darkGrey, breakpointSmall, breakpoint, breakpointLarge, logoColorLeft } from '../../ui/constants'

export const Container = styled.div`
    background: ${darkGrey};
    position: relative;
    padding: 16px 20px;
    margin: ${props => props.isArticle ? '0 auto' : '0 auto 32px'};
    width: 100%;

    img {
        width: 90px;
        margin-right: 30px;

        @media (max-width: ${breakpointLarge}) {
            margin-right: 0
        }
    }
`

export const HeadlineLogo = styled.h1`
    margin: 0;
`

export const Navigation = styled(ui.Container)`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;

    @media (max-width: ${breakpointLarge}) {
        flex-direction: column;
    }

    ul {
        display: inline-flex;
        list-style: none;
        padding: 0;
        margin: 0;

        @media (max-width: ${breakpointLarge}) {
            margin-bottom: 15px;
            line-height: 50px;
        }

        li {
            &:last-child a {
                @media (max-width: ${breakpointLarge}) {
                    padding-right: 16px;
                }
            }
        }
    }
`

export const Main = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: ${breakpointLarge}) {
        flex-direction: column;
    }

    ul {
        @media (max-width: ${breakpointLarge}) {
            margin: 15px 0;
        }

        @media (max-width: ${breakpointSmall}) {
            flex-wrap: wrap;
            justify-content: center;
        }

        a {
            cursor: pointer;
            font-size: 13px;
            line-height: 18px;
            letter-spacing: 0px;
            font-weight: 700;
            text-transform: uppercase;
            text-decoration: none;
            line-height: 16px;
            padding: 8px 24px;

            &:hover {
                color: #fff;
            }
        }

        li:last-child a {
            padding-right: 0;

            @media (max-width: ${breakpointLarge}) {
                padding-right: 24px;
            }
        }
    }
`

export const Link = styled.a`
    color: ${props => props.active ? logoColorLeft : 'rgba(255,255,255,0.8)'};

    &:hover {
        color: ${logoColorLeft};
    }
`
