import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './components';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
