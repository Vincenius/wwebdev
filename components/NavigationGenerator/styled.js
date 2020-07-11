import styled, { css } from 'styled-components'
import Tab from '@material-ui/core/Tab'
import { lightGrey } from '../../ui/constants'

const mainPadding = 20;

const mediaQueryOrCode = ({ width, isMobile, code, breakpoint }) => {
  if (!!width) {
    return isMobile
      ? width <= breakpoint && code
      : width > breakpoint && code
  } else {
    const mediaSelector = isMobile
      ? `max-width: ${breakpoint - 1}px`
      : `min-width: ${breakpoint}px`
    return `@media only screen and (${mediaSelector}) { ${code}}`
  }
}

export const generateNavigationCss = ({
  width,
  primaryColor,
  secondaryColor,
  hoverColor,
  burgerMenuPosition,
  breakpoint,
}) =>
`.menu-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: ${burgerMenuPosition === 'right' ? 'flex-end' : 'flex-start'};
  margin-bottom: 20px;
  background: ${primaryColor};
  color: ${secondaryColor};
  padding: ${mainPadding}px;
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;
  box-sizing: border-box;
}

.menu-container a {
  text-decoration: none;
  color: ${primaryColor};
  transition: color 0.3s ease;
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
}

/* Burger menu */
.menu-container span {
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  background: ${secondaryColor};
  border-radius: 3px;
  z-index: 1;
  transform-origin: 4px 0px;
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
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
  background: ${primaryColor};
}

.menu-container input:checked ~ span:nth-last-child(3) {
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

.menu-container input:checked ~ span:nth-last-child(2) {
  transform: rotate(-45deg) translate(0, -1px);
}

.menu ul {
  list-style: none;
}

.menu li {
  padding: 10px 0;
  font-size: 22px;
}

/* mobile styles */
${mediaQueryOrCode({ width, breakpoint, isMobile: true, code: `
  body {
    overflow-x: hidden;
  }
  .menu {
    position: absolute;
    box-sizing: border-box;
    width: 300px;
    ${burgerMenuPosition}: -300px;
    top: 0;
    margin: -${mainPadding}px;
    padding: 75px 50px 50px;
    background: ${secondaryColor};
    -webkit-font-smoothing: antialiased;
    /* to stop flickering of text in safari */
    transform-origin: 0% 0%;
    transform: translateX(0%);
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
  }

  .menu-container input:checked ~ .menu {
    transform: translateX(${burgerMenuPosition === 'right' ? '-100%' : '100%'});
  }
`})}

/* desktop styles */
${mediaQueryOrCode({ width, breakpoint, isMobile: false, code: `
  .menu-container {
    width: 100%;
  }

  .menu-container a {
    color: ${secondaryColor};
  }

  .menu-container input {
    display: none;
  }

  /* Burger menu */
  .menu-container span {
    display: none;
  }

  .menu {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .menu ul {
    display: flex;
    padding: 0;
  }

  .menu li {
    padding: 0 20px;
  }
`})}`

export const Navigation = styled.div`
  ${props => css`${
    generateNavigationCss(props)
  }`}
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