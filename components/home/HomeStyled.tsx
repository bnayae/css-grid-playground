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
`;
