import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  :root {
    font-family: "Roboto", sans-serif;
    margin: 0;
  }

  body {
    display: flex;
    justify-content: center;
    text-align: center;
    background-color: #525252F0;
    color: #eee;
  }
`;
