import React from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ThemeProvider } from 'styled-components';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import { GlobalStyles } from './styles/globalStyles';
import { darkTheme, lightTheme } from './styles/theme';
import Loading from './components/Loading/Loading';
import favicon from './app/source/favicon.ico';
import Login from './pages/Login';

const App = () => {
  const { theme } = useSelector((state) => state.ui);
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Helmet>
        <title>Developer's Calendar</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href={favicon} />{' '}
      </Helmet>
      <>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/loading">
              <Loading />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
          </Switch>
        </Layout>
      </>
    </ThemeProvider>
  );
};

export default App;
