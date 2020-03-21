import styled from "styled-components";
import { Home } from "./Home";

export const HomeStyled = styled(Home)`
  background-color: ${props => props.theme.colors.secondary};

  .title {
    font: ${props => props.theme.fonts.title};
  }

  .content {
    font: ${props => props.theme.fonts.subtitle};
  }

  .grid-container {
    display: grid;
    grid-template-areas: "content";
    grid-gap: 1rem; /* gap between item's areas */
    padding: 1rem; /* outer gap */
  }
`;
