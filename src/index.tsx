import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { useLocation, BrowserRouter as Router } from 'react-router-dom'
import Routes from './components/Routes'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <Router>
    <Routes />
  </Router>,
  document.getElementById('root'),
)

serviceWorker.unregister()
