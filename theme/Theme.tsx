import React, { ReactElement } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    primary: '#5885b0',
    secondary: '#cdaed6',
    brightRed: '#EE6668',
    grey: '#CCC',
  },
  fonts: {
    primary: '500 1.7rem/2rem Gilroy',
    primaryDim: 'Bold 2.1rem/2.7rem Gilroy',
    primarySubtitle: '800 3rem/3.4rem Gilroy;',
    secondary: '800 2.8rem/4.2rem Gilroy',
    bold: 'Bold 1.7rem/2rem Gilroy',
    secondaryBold: '900 2.1rem/3.1rem Gilroy',
    title: '900 5.7rem/7.2rem Gilroy',
    subtitle: '900 3rem/3.9rem Gilroy;',
    fontFamily: 'Gilroy',
    color: '#000000',
    letterSpacing: 0,
    textAlign: 'left',
    opacity: 1,
  },
  background: {
    primary: '#F4EEEC 0% 0% no-repeat padding-box',
    secondary: '#FFFFFF',
  },
};

type ThemeProps = {
  children: React.ReactNode;
};

export const Theme = ({ children }: ThemeProps): ReactElement => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
