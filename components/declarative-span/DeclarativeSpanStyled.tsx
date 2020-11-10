import styled from 'styled-components';
import { Baseline9ItemStyled } from '../BaseLine';

export const DeclarativeSpanStyled = styled(Baseline9ItemStyled)`
  background-color: ${(props) => props.theme.colors.primary};

  .grid-container {
    display: grid;
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    grid-template-areas:
      'A    B1  .   D'
      'E    .   B2  F'
      'H1   G1  .   G2'
      'H2   I   I   I'
      'C    C   C   .';
    padding: 1rem;
  }

  .A {
    grid-area: A;
  }

  .B {
    /* grid-area: row-start / column-start / row-end / column-end */
    grid-area: B1 / B1 / B2 / B2;
  }

  .C {
    grid-area: C;
  }

  .D {
    grid-area: D;
  }

  .E {
    grid-area: E;
  }

  .F {
    grid-area: F;
  }

  .G {
    /* grid-area: row-start / column-start / row-end / column-end */
    grid-area: G1 / G1 / G1 / G2;
  }

  .H {
    /* grid-area: row-start / column-start / row-end / column-end */
    grid-area: H1 / H1 / H2 / H1;
  }

  .I {
    grid-area: I;
  }
`;
