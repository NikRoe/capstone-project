import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
  }
  
  :root {
    --main-text-color: #eee;
    --button-text-color: black;
    --main-background-color: #525252F0;
    --card-background-color: #2E2E2E;
    --main-callToAction-background-color: #00adb5;
    --highlighted-callToAction-background-color: #00d8e3;
  }
  
  body {
    font-family: "Roboto", sans-serif;
    display: flex;
    justify-content: center;
    text-align: center;
    background-color: var(--main-background-color);
    color: var(--main-text-color);
  }
`;
