import styled from 'styled-components'
import * as ui from '../../ui'
import { darkGrey, breakpointSmall, breakpointLarge, breakpointLargeMin, logoColorLeft } from '../../ui/constants'

export const Container = styled.div`
    position: relative;
    margin: ${props => props.isArticle ? '0 auto' : '0 auto 32px'};
    background: ${props => props.transparentBg ? 'rgba(44,62,80, 0.6)' : darkGrey};
    padding: 16px 0;
    width: 100%;
    z-index: 10;

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
    justify-content: flex-start;
    align-items: center;
    margin: 0 auto;
    z-index: 10000;

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

export const Right = styled.div`
    margin-left: auto;
`

export const Link = styled.span`
    color: ${props => props.active ? logoColorLeft : 'rgba(255,255,255,0.8)'};

    &:hover {
        color: ${logoColorLeft};
    }
`

export const MobileNavigation = styled.nav`
    position: fixed;
    transition: transform 0.2s ease-out;
    transform: ${props => props.isOpen ? 'translateY(0)' : 'translateY(100%)'};
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 9999;
    padding-top: 90px;
    background: ${darkGrey};

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
`

export const MobileLink = styled.span`
    display: block;
    cursor: pointer;
    font-size: 18px;
    line-height: 1.3;
    letter-spacing: 0px;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
    padding: 16px 32px;
    background: ${props => props.active ? logoColorLeft : 'transparent'};
    color: ${props => props.active ? darkGrey : 'rgba(255,255,255,0.8)'};

    &:hover {
        color: #fff;
    }
`

export const MobileSocialBar = styled.div`
    ul {
        display: flex;
        justify-content: space-between;
        margin-top: 30px;
        padding: 0 32px;
    }
`

export const DesktopContainer = styled.div`
    @media (max-width: ${breakpointLarge}) {
        display: none;
    }
`

export const MobileContainer = styled.div`
    @media (min-width: ${breakpointLargeMin}) {
        display: none;
    }
`
