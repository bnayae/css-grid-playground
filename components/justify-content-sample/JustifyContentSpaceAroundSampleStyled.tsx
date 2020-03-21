import styled from 'styled-components';
import { Baseline9ItemStyled } from '../BaseLine';

export const JustifyContentSpaceAroundSampleStyled = styled(Baseline9ItemStyled)`
  background-color: ${props => props.theme.colors.primary};

  .grid-container {
    display: grid;
    justify-content: space-around;
    grid-template-columns: auto auto auto; /*Make the grid smaller than the container*/
    grid-row-gap: 1rem;
    padding: 10px;
  }

  .grid-item {
    background-color: ${props => props.theme.colors.secondary};
    border: 0.2rem solid #444;
    padding: 2rem;
    font: ${props => props.theme.fonts.subtitle};
    text-align: center;
  }
`;
