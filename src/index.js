import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom';

import Routes from './routes';
import history from './config/history';

import './index.css';

const App = () => {
  return (
    <div className="App">
      <Router history={history}>
        <Routes />
      </Router>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
