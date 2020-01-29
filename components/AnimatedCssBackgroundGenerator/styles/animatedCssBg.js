import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    min-height: 100vh;
    height: 100%;
`
export const Navigation = styled.nav`
    position: relative;
    z-index: 2;
    padding: 20px 20px 0;

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
export const Footer = styled.footer`
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 10px 20px;
    color: #fff;
    letter-spacing: 0rem;

    a {
        color: #fff;
    }
`