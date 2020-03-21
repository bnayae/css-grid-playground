import styled from 'styled-components';
import { JustifyContentSpaceAroundSampleStyled } from './JustifyContentSpaceAroundSampleStyled';

export const JustifyContentSpaceBetweenSampleStyled = styled(JustifyContentSpaceAroundSampleStyled)`
  background-color: ${props => props.theme.colors.primary};

  .grid-container {
    justify-content: space-between;
  }
`;
