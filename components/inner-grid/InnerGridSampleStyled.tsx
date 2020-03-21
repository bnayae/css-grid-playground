import styled from "styled-components";
import { InnerGridSample } from "./InnerGridSample";

export const InnerGridSampleStyled = styled(InnerGridSample)`
  background-color: ${props => props.theme.background.primary};

  .grid-container {
    display: grid;
    grid-column-gap: 2rem;
    grid-row-gap: 5rem;
    grid-template-columns: auto auto auto;
    /* grid-template-rows: repeat(10, minmax(25rem, auto)); */
    padding: 1rem;
  }

  .inner-grid-container {
    display: grid;
    gap: 1rem;
    grid-template-columns: 10rem 10rem 10rem;
    grid-auto-flow: row;
    padding: 1rem;
  }

  .grid-item {
    background-color: ${props => props.theme.colors.secondary};
    border: 0.2rem solid #444;
    padding: 2rem;
    font: ${props => props.theme.fonts.subtitle};
    text-align: center;
  }

  .grid-item-inner {
    background-color: ${props => props.theme.colors.primary};
    border: 0.2rem solid #222;
    padding: 2rem;
    font: ${props => props.theme.fonts.subtitle};
    color: #eee;
    text-align: center;
    height: 10rem;
  }
`;
