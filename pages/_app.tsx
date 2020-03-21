import React from "react";
import App from "next/app";
import { Theme, GlobalStyle } from "../theme";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Theme>
        <GlobalStyle />
        <Component {...pageProps} />
      </Theme>
    );
  }
}

export default MyApp;
