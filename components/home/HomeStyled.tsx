import styled from 'styled-components';
import { Home } from './Home';

export const HomeStyled = styled(Home)`
  background-color: ${(props) => props.theme.colors.grey};

  .title {
    font: ${(props) => props.theme.fonts.title};
  }

  .content {
    display: grid;
    grid-template-columns: 35rem 1fr;
    font: ${(props) => props.theme.fonts.subtitle};
  }

  .grid-container {
    display: grid;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0.5rem; /* gap between item's areas */
    padding-left: 2rem; /* outer gap */
  }

  .img {
    max-height: 20rem;
    max-width: 60rem;
    grid-template-columns: 2;
    padding: 0 0 4rem 10rem;
  }

  .emphasis {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-column-gap: 1rem;
    align-items: start;
  }
  .emphasis-sign {
    color: ${({ theme }) => theme.colors.brightRed};
    font: ${(props) => props.theme.fonts.subtitle};
  }
`;
