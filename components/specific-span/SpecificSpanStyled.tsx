import styled from 'styled-components';
import { Baseline9ItemStyled } from '../BaseLine';

export const SpecificSpanStyled = styled(Baseline9ItemStyled)`
  background-color: ${props => props.theme.colors.primary};

  .grid-container {
    display: grid;
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    grid-template-columns: auto auto auto;
    padding: 1rem;
  }

  .B {
    grid-column: span 2;
  }

  .C {
    grid-row: span 3;
  }

  .G {
    grid-column: 2 / span 2;
    grid-row: 2;
  }

  .I {
    grid-column: span 3;
  }
`;
