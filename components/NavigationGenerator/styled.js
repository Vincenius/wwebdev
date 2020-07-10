import styled, { css } from 'styled-components'
import Tab from '@material-ui/core/Tab'
import { lightGrey } from '../../ui/constants'

const mainPadding = 20;
const breakpoint = 760;
const backgroundColor = '#232323'
const textColor = '#cdcdcd'
const hoverColor = 'tomato'

export const Navigation = styled.nav`
  position: relative;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
  background: ${backgroundColor};
  color: ${textColor};
  padding: ${mainPadding}px;

  .menu-container {
    position: relative;
    z-index: 1;
    -webkit-user-select: none;
    user-select: none;

    ${props => props.width > breakpoint && css`
      width: 100%;
    `}
  }

  .menu-container a {
    text-decoration: none;
    color: ${backgroundColor};
    transition: color 0.3s ease;

    ${props => props.width > breakpoint && css`
      color: ${textColor};
    `}
  }

  .menu-container a:hover {
    color: ${hoverColor};
  }

  .menu-container input {
    display: block;
    width: 35px;
    height: 25px;
    margin: 0;
    position: absolute;
    cursor: pointer;
    opacity: 0; /* hide this */
    z-index: 2; /* and place it over the hamburger */
    -webkit-touch-callout: none;

    ${props => props.width > breakpoint && css`
      display: none;
    `}
  }

  /*
  * Just a quick hamburger
  */
  .menu-container span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    background: ${textColor};
    border-radius: 3px;
    z-index: 1;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                opacity 0.55s ease;

    ${props => props.width > breakpoint && css`
      display: none;
    `}
  }

  .menu-container span:first-child {
    transform-origin: 0% 0%;
  }

  .menu-container span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

  .menu-container input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: ${backgroundColor};
  }

  .menu-container input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  .menu-container input:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
  }

  .menu {
    /* BURGER MENU */
    ${props => props.width <= breakpoint && css`
      position: absolute;
      width: 300px;
      right: -300px;
      top: 0;
      margin: -${mainPadding}px;
      padding: 75px 50px 50px;
      background: ${textColor};
      -webkit-font-smoothing: antialiased;
      /* to stop flickering of text in safari */
      transform-origin: 0% 0%;
      transform: translateX(0%);
      transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
    `}

    ${props => props.width > breakpoint && css`
      position: relative;
      width: 100%;
      display: flex;
      justify-content: space-between;
    `}
  }

  .menu ul {
    list-style: none;

    ${props => props.width > breakpoint && css`
      display: flex;
      padding: 0;
    `}
  }

  .menu li {
    padding: 10px 0;
    font-size: 22px;

    ${props => props.width > breakpoint && css`
      padding: 0 20px;
    `}
  }

  .menu-container input:checked ~ .menu {
    ${props => props.width <= breakpoint && css`
      transform: translateX(-100%);
    `}
  }
`

export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;
`

export const TabButton = styled(Tab)`&&{
  background: ${lightGrey};
  min-width: 100px;
}`