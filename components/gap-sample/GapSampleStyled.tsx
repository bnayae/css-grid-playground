import styled from 'styled-components';
import { Baseline9ItemStyled } from '../BaseLine';

export const GapSampleStyled = styled(Baseline9ItemStyled)`
  background-color: ${props => props.theme.colors.primary};

  .grid-container {
    display: grid;
    grid-column-gap: 2rem;
    grid-row-gap: 5rem;
    grid-template-columns: auto auto auto;
    padding: 1rem;
  }
`;
