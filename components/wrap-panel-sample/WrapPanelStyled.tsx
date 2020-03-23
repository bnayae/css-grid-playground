import styled from 'styled-components';
import { Baseline9ItemStyled } from '../BaseLine';

export const WrapPanelStyled = styled(Baseline9ItemStyled)`
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 1rem;
    padding: 10px;
    transition: all 2s;
  }
`;
