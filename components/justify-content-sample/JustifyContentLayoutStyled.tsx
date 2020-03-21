import styled from 'styled-components';
import { JustifyContentLayout } from './JustifyContentLayout';

export const JustifyContentLayoutStyled = styled(JustifyContentLayout)`
  .parent-grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
    grid-auto-flow: row;

    padding: 1rem;
  }

  .child-grid-container {
    background-color: ${props => props.theme.colors.primary};
    display: grid;
    grid-template-areas:
      'title'
      'sample';
    grid-column-gap: 3rem;
    grid-row-gap: 2rem;
    /* grid-auto-flow: column; */

    padding: 1rem;
    border: 0.2rem solid;
  }

  .title {
    font: ${props => props.theme.fonts.subtitle};
  }

  .sample {
  }

  @media (max-width: 100rem) {
    .parent-grid-container {
      grid-template-columns: 1fr;
    }
  }
`;
