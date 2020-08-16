import { createGlobalStyle } from 'styled-components';

export const primaryColorDark = '#689F38';
export const primaryColor = '#8BC34A';
export const primaryColorLight = '#DCEDC8';
export const primaryColorText = '#212121';
export const accentColor = '#CDDC39';
export const primaryTextColor = '#212121';
export const secondaryTextColor = '#757575';
export const dividerColor = '#BDBDBD';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ul, li, h1, h2, h3, p, button { margin: 0; padding: 0; }
  ul { list-style: none; }
  button { background: transparent; border: 0; outline: 0 }

  body {
    background: #fefefe;
    height: 100vh;
    margin: 0;
    overscroll-behavior: none;
    width: 100%; 
  }

  #app {
    overflow-x: hidden;
    min-height: 100vh;
    padding-bottom: 10px;
  }
`;
