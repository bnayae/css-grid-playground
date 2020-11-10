import styled from 'styled-components';
import { BasicLayout } from './BasicLayout';

export const BasicLayoutStyled = styled(BasicLayout)`
  background-color: ${(props) => props.theme.colors.primary};

  .grid-container {
    display: grid;
    grid-template-areas:
      'header header header header header header'
      'menu   main   main   main   right  right'
      'menu   footer footer footer footer footer';
    grid-gap: 1rem; /* gap between item's areas */
    padding: 1rem; /* outer gap */
  }

  .grid-container > div {
    background-color: ${(props) => props.theme.colors.secondary};
    text-align: center;
    padding: 2rem 1rem; /* 2rem vertical, 1rem horizontal (within item area) */
    font-size: 3rem;
  }

  .top {
    grid-area: header;
  }
  .side {
    grid-area: menu;
  }
  .main {
    grid-area: main;
  }
  .right {
    grid-area: right;
  }
  .footer {
    grid-area: footer;
  }

  @media (max-width: 900px) {
    .grid-container {
      grid-template-areas:
        'menu   header header header header header'
        'main   main   main   main   right  right'
        'footer footer footer footer footer footer';
    }
  }
`;
