import styled from 'styled-components';
import { Baseline9ItemStyled } from '../BaseLine';

export const AlignContentBaseStyled = styled(Baseline9ItemStyled)`
  .grid-container {
    display: grid;
    grid-template-columns: auto auto auto; /*Make the grid smaller than the container*/
    grid-column-gap: 1rem;
    padding: 10px;
    height: 50rem;
  }
`;
