import styled from 'styled-components';
import { JustifyContentBaseStyled } from './JustifyContentBaseStyled';

export const JustifyContentSpaceEvenlySampleStyled = styled(JustifyContentBaseStyled)`
  background-color: ${props => props.theme.colors.primary};

  .grid-container {
    justify-content: space-evenly;
  }
`;
