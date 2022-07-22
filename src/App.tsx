import { Global, css } from '@emotion/react';
import { GlobalCss } from './global.styles';
import Home from './home/Home';
import Header from './layout/header/Header';
import Main from './layout/main/Main';

function App() {
  return (
    <div className="App">
      <Global styles={css`
        ${GlobalCss}
      `} />
      <Header />
      <Main>
        <Home />
      </Main>
    </div>
  );
}

export default App;
