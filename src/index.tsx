import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import ReactGA from 'react-ga'
import Routes from './components/Routes'
import * as serviceWorker from './serviceWorker'

const isEnvProduction = process.env.NODE_ENV === 'production'
if (isEnvProduction) {
  ReactGA.initialize(process.env.GA_ID)
}

ReactDOM.render(
  <Router>
    <Routes />
  </Router>,
  document.getElementById('root'),
)

serviceWorker.unregister()
