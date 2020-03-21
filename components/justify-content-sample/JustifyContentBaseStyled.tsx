import styled from 'styled-components';
import { Baseline9ItemStyled } from '../BaseLine';

export const JustifyContentBaseStyled = styled(Baseline9ItemStyled)`
  .grid-container {
    display: grid;
    grid-template-columns: auto auto auto; /*Make the grid smaller than the container*/
    grid-row-gap: 1rem;
    padding: 10px;
  }
`;
