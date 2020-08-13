import React, { Fragment } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { Header } from './components';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  const location = useLocation();

  return (
    <Fragment>
      {location.pathname !== '/login' && location.pathname !== '/register' && (
        <Header />
      )}
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
      </Switch>
    </Fragment>
  );
}

export default App;
