import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import { Header } from './components';

function App() {
  return (
    <Fragment>
      <Router>
        <Header />
      </Router>
    </Fragment>
  );
}

export default App;
