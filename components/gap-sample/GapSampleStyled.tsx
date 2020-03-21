import styled from "styled-components";
import { GapSample } from "./GapSample";

export const GapSampleStyled = styled(GapSample)`
  background-color: ${props => props.theme.colors.primary};

  .grid-container {
    display: grid;
    grid-column-gap: 2rem;
    grid-row-gap: 5rem;
    grid-template-columns: auto auto auto;
    padding: 1rem;
  }

  .grid-item {
    background-color: ${props => props.theme.colors.secondary};
    border: 0.2rem solid #444;
    padding: 2rem;
    font: ${props => props.theme.fonts.subtitle};
    text-align: center;
  }
`;
