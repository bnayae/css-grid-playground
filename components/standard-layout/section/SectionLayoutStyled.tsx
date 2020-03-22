import styled from 'styled-components';
import { SectionLayout } from './SectionLayout';

export const SectionLayoutStyled = styled(SectionLayout)`
  background-color: ${props => props.theme.colors.primary};
  height: 88vh;

  .grid-container-page {
    display: grid;
    grid-template-columns: 1fr 192rem 1fr;
    /* grid-template-rows: 88vh; */
    /* grid-auto-rows: 88vh; */
    grid-template-areas: 'page-margin page-section page-margin';
    margin: 1rem;
  }
`;
