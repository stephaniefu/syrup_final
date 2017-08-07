import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import Home from './components/Home';

ReactDOM.render(<Home/>, document.getElementById('root'));
=======
import App from './components/App.js';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))
>>>>>>> feat/reactrouter
