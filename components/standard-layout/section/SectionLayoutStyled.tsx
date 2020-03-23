import styled from 'styled-components';
import { SectionLayout } from './SectionLayout';

export const SectionLayoutStyled = styled(SectionLayout)`
  background-color: ${props => props.theme.colors.primary};
  height: 88vh;

  .grid-container-page {
    display: grid;
    grid-template-columns: minmax(1rem, 1fr) 100rem minmax(1rem, 1fr);
    /* grid-template-rows: 88vh; */
    /* grid-auto-rows: 88vh; */
    grid-template-areas: 'page-margin page-section page-margin';
    margin: 1rem;
    /* align-items: stretch; */
  }

  .page-margin {
    background: rgba(3,3,3, 0.05);
    /* background-color: ${props => props.theme.colors.primary};
    opacity: 0.6; */
  }
`;
