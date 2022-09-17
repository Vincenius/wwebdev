import styled from 'styled-components'
import { breakpointLarge } from '../../../ui/constants'

export const Container = styled.div`
    position: relative;
    min-height: 100vh;
    height: 100%;
`
export const BottomContainer = styled.div`
    background: #fff;
    padding: 50px 0 0;
    position: relative
`
export const Navigation = styled.nav`
    position: relative;
    z-index: 2;
    padding: 20px 20px 0;

    @media (max-width: ${breakpointLarge}) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    img {
        width: 90px;
        margin-right: 30px;
        cursor: pointer;

        @media (max-width: ${breakpointLarge}) {
            margin-right: 0;
            margin-bottom: 10px;
        }
    }

    a {
        cursor: pointer;
        color: #fff;
        margin-left: 20px;
        text-decoration: none;

        &:first-child {
            margin-left: 0;
        }

        &.active, &:hover {
            text-decoration: underline;
        }
    }
`
