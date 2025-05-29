import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

import Header from '../Header';
import Rout from '../../Routes';

import { Container } from './styles';

import ToastContainer from '../Toast/ToastContainer';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <ToastContainer />
        <Container>
          <Header />
          <Rout />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
