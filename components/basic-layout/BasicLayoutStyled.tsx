import styled from "styled-components";
import { BasicLayout } from "./BasicLayout";

export const BasicLayoutStyled = styled(BasicLayout)`
  background-color: lightcoral;

  .top {
    grid-area: header;
  }
  .side {
    grid-area: menu;
  }
  .main {
    grid-area: main;
  }
  .right {
    grid-area: right;
  }
  .footer {
    grid-area: footer;
  }

  .grid-container {
    display: grid;
    grid-template-areas:
      "header header header header header header"
      "menu   main   main   main   right  right"
      "menu   footer footer footer footer footer";
    grid-gap: 10px;
    padding: 10px;
  }

  .grid-container > div {
    background-color: indianred;
    text-align: center;
    padding: 20px 0;
    font-size: 30px;
  }

  @media (max-width: 900px) {
    .grid-container {
      display: grid;
      grid-template-areas:
        "menu   header header header header header"
        "main   main   main   main   right  right"
        "footer footer footer footer footer footer";
      grid-gap: 10px;
      padding: 10px;
    }
  }
`;
