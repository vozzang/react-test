import React from 'react';
import { Global, css } from '@emotion/react';
import { MediaQuery } from './shared/theme';
import Home from './home/Home';
import Header from './layout/header/Header';
import Main from './layout/main/Main';

const ResetCss = css`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    overflow-x: hidden;
    font-family: 'Noto Sans KR', sans-serif;
    background-color: #353353;
    color: #fff;
  }

  p {
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  section {
    padding: 30px;
  }

  .section-title {
    margin-bottom: 30px;
    font-size: 2.5rem;
    font-weight: 700;
  }

  .print-block {
    display: none;
  }

  .container {
    width: 100%;
  }

  ${MediaQuery.medium} {
    section {
      padding: 15px 5px;
    }
    .section-title {
      font-size: 2rem;
    }
  }

  @media print {
    .app-header {
      display: none;
    }
    .app-main {
      margin: 0;
    }
    .print-block {
      display: block;
    }
  }
`;

function App() {
  return (
    <div className="App">
      <Global styles={css`
        ${ResetCss}
      `} />
      <Header />
      <Main>
        <Home />
      </Main>
    </div>
  );
}

export default App;
