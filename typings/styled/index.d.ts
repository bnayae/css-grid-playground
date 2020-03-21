import "styled-components";

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/interface-name-prefix
  export interface DefaultTheme {
    colors: {
      brightRed: string;
      primary: string;
      secondary: string;
      grey: string;
    };
    fonts: {
      primary: string;
      primarySubtitle: string;
      primaryDim: string;
      secondary: string;
      secondaryBold: string;
      bold: string;
      title: string;
      subtitle: string;
      fontFamily: string;
      textAlign: string;
      letterSpacing: number;
      color: string;
      opacity: number;
    };
    background: {
      primary: string;
      secondary: string;
    };
  }
}
