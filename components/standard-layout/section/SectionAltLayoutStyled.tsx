import styled from 'styled-components';
import { SectionLayoutStyled } from './SectionLayoutStyled';

export const SectionAltLayoutStyled = styled(SectionLayoutStyled)`
  background-color: ${props => props.theme.colors.secondary};
`;
