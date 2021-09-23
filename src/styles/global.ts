import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #dfdfdf;
    --background-button: #842432;
    --background-about: #74183e;
    --background-contact: #a96a85;

    --text-color: #985463;
    --text-white: #ffffff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 1rem;
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
