import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ThemeProvider } from 'styled-components';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import { GlobalStyles } from './styles/globalStyles';
import { darkTheme, lightTheme } from './styles/theme';
import favicon from './app/source/favicon.ico';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import BoardPage from './components/Board/BoardPage';
import BoardSaveForm from './components/Board/saveForm';
import BoardDetail from './components/Board/BoardDetail';

export default function App() {
  const { theme } = useSelector((state) => state.ui);
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  useEffect(() => {
    const bodyEl = document.getElementsByTagName('body')[0];
    const loadingEl = document.getElementById('init-loading');
    bodyEl.removeChild(loadingEl);
  }, []);

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
            <Route exact path="/login">
              <SignIn />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
            <Route exact path="/board">
              <BoardPage />
            </Route>
            <Route exact path="/saveForm">
              <BoardSaveForm />
            </Route>
            <Route exact path="/board/:id">
              <BoardDetail />
            </Route>
          </Switch>
        </Layout>
      </>
    </ThemeProvider>
  );
}
