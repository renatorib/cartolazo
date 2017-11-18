import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { injectGlobal } from 'styled-components';
import styleSheet from 'styled-components/lib/models/StyleSheet';

injectGlobal`
  body, html {
    margin: 0;
  }

  body {
    font-family: "Roboto";
    font-weight: 300;
    font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    letter-spacing: 0.5px;
    line-height: 1.3em;
  }

  *, *:after, *:before {
    box-sizing: border-box;
  }

  *:focus {
    outline: none;
  }

  #nprogress {
    pointer-events: none;
  }

  #nprogress .bar {
    background: white;
    box-shadow: 0 1px 10px 0 #ffffff;
    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
  }

  .small {
    font-size: 0.7em;
  }

  .x-small {
    font-size: 0.5em;
  }

  .big {
    font-size: 1.3em;
  }

  .x-big {
    font-size: 1.5em;
  }

  .bold {
    font-weight: bold;
  }

  .green {
    color: green;
  }

  .red {
    color: red;
  }
`;

class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const page = renderPage();
    const styles = (
      <style
        dangerouslySetInnerHTML={{ // eslint-disable-line
          __html: styleSheet.rules().map(rule => rule.cssText).join('\n'),
        }}
      />
    );

    return { ...page, styles };
  }

  render() {
    return (
      <html lang="en-US">
        <Head>
          <title>Cartolazo</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <link rel="shortcut icon" type="image/png" href="/static/favicon.png" />
          <link rel="icon" type="image/png" href="/static/image.png" />
          <link rel="apple-touch-icon" type="image/png" href="/static/appicon.png" />
          <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Rajdhani:300,400,600" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
