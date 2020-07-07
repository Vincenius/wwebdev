import styled from 'styled-components'

const mainPadding = 20;

export const Navigation = styled.nav`
  position: relative;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
  background: #232323;
  color: #cdcdcd;
  padding: ${mainPadding}px;

  .menuToggle {
    position: relative;
    z-index: 1;
    -webkit-user-select: none;
    user-select: none;
  }

  .menuToggle a {
    text-decoration: none;
    color: #232323;
    transition: color 0.3s ease;
  }

  .menuToggle a:hover {
    color: tomato;
  }

  .menuToggle input {
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

  /*
  * Just a quick hamburger
  */
  .menuToggle span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    background: #cdcdcd;
    border-radius: 3px;
    z-index: 1;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                opacity 0.55s ease;
  }

  .menuToggle span:first-child {
    transform-origin: 0% 0%;
  }

  .menuToggle span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

  .menuToggle input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: #232323;
  }

  .menuToggle input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  .menuToggle input:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
  }

  .menu {
    position: absolute;
    width: 300px;
    right: 0;
    top: 0;
    margin: -${mainPadding}px;
    padding: 75px 50px 50px;
    background: #ededed;
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    /* to stop flickering of text in safari */
    transform-origin: 0% 0%;
    transform: translate(100%, 0);
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
  }

  .menu li {
    padding: 10px 0;
    font-size: 22px;
  }

  .menuToggle input:checked ~ ul {
    transform: none;
  }
`

export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
`