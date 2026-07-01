// Pure CSS-generation logic ported verbatim from
// legacy-next/components/NavigationGenerator/styled.js (generateNavigationCss +
// mediaQueryOrCode). This produces both the live-preview CSS and the copyable
// output, so the text must stay byte-identical to the original.

const mainPadding = 20

export interface NavigationCssOptions {
    width?: number | undefined
    primaryColor: string
    secondaryColor: string
    hoverColor: string
    burgerMenuPosition: string
    breakpoint: number
    useLogo: boolean
}

interface MediaQueryOrCodeArgs {
    width?: number | undefined
    isMobile: boolean
    code: string
    breakpoint: number
}

const mediaQueryOrCode = ({ width, isMobile, code, breakpoint }: MediaQueryOrCodeArgs): string => {
    if (width) {
        const matches = isMobile ? width <= breakpoint : width > breakpoint
        return matches ? code : '' // '' (not the boolean `false`) so no stray "false" leaks into the CSS
    }
    const mediaSelector = isMobile ? `max-width: ${breakpoint - 1}px` : `min-width: ${breakpoint}px`
    return `@media only screen and (${mediaSelector}) { ${code}}`
}

export const generateNavigationCss = ({
    width,
    primaryColor,
    secondaryColor,
    hoverColor,
    burgerMenuPosition,
    breakpoint,
    useLogo,
}: NavigationCssOptions): string =>
    `body {
  overflow-x: hidden;
  font-family: Sans-Serif;
  margin: 0;
}

.menu-container {
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  background: ${primaryColor};
  color: ${secondaryColor};
  padding: ${mainPadding}px;
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;
  box-sizing: border-box;
}
${
    useLogo
        ? `
.menu-logo {
  line-height: 0;
  margin: 0 20px;
}

.menu-logo img {
  max-height: 40px;
  max-width: 100px;
  flex-shrink: 0;
}
`
        : ''
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

.menu-container span:nth-child(3) {
  transform-origin: 0% 100%;
}

.menu-container input:checked ~ span {
  opacity: 1;
  transform: rotate(45deg) translate(3px,-1px);
  background: ${primaryColor};
}

.menu-container input:checked ~ span:nth-child(4) {
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

.menu-container input:checked ~ span:nth-child(3) {
  transform: rotate(-45deg) translate(-5px,11px);
}

.menu ul {
  list-style: none;
}

.menu li {
  padding: 10px 0;
  font-size: 22px;
}

/* mobile styles */
${mediaQueryOrCode({
    width,
    breakpoint,
    isMobile: true,
    code: `
  .menu-container {
    flex-direction: column;
    align-items: ${burgerMenuPosition === 'right' ? 'flex-end' : 'flex-start'};
  }
  ${
      useLogo
          ? `
  .menu-logo {
    position: absolute;
    ${burgerMenuPosition === 'left' ? 'right' : 'left'}: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  .menu-logo img {
    max-height: 30px;
  }
`
          : ''
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
`,
})}

/* desktop styles */
${mediaQueryOrCode({
    width,
    breakpoint,
    isMobile: false,
    code: `
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
`,
})}`
