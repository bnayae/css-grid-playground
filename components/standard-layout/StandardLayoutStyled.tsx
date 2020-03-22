import styled from 'styled-components';
import { StandardLayout } from './StandardLayout';

export const StandardLayoutStyled = styled(StandardLayout)`
  background-color: ${props => props.theme.colors.primary};

  .header {
    grid-area: header;
    background: #549;
    position: sticky;
    top: 0;
    z-index: 3;
  }
  .header > button {
    font: ${props => props.theme.fonts.primary};
    background: #e79;
    margin: 3rem;
  }
  .menu {
    grid-area: menu;
    background: #39e;
    min-width: 30rem;
    padding: 1rem;
  }
  .menu-close {
    display: none;
  }
  .main {
    grid-area: main;
  }
  .main-content {
    height: 86vh;
    overflow: auto;
  }
  .footer {
    grid-area: footer;
    background: #ea8;
    padding: 0.1rem;
  }

  .grid-container {
    display: grid;
    grid-template-columns: auto 1fr;
    /* grid-template-rows: 100px 1fr 80px; */
    grid-template-rows: 10vh 86vh 4vh;
    /* grid-auto-rows: 88vh; */
    grid-template-areas:
      'header header'
      'menu   main'
      'footer footer';
    overflow: hidden;
    font: ${props => props.theme.fonts.primary};
  }
`;
