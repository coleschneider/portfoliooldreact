import React from 'react';

import { AnimatePresence } from 'framer-motion';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import { Header } from './Header/Header';
import { Landing } from './Landing/Landing';
import { WorkDetail } from './WorkDetail/WorkDetail';
import { NotFound } from './NotFound/NotFound';
import { Work } from './Work/Work';

export function App() {
  return (
    <Router>
      <Header />
      <Route
        render={({ location }) => (
          <AnimatePresence exitBeforeEnter initial={false}>
            <Switch location={location} key={location.pathname}>
              <Route component={Landing} exact path="/" />
              <Route component={Work} path="/work" exact />
              <Route component={WorkDetail} exact path="/work/:id" />
              <Route exact path="/static/**/**" />
              <Route component={NotFound} />
            </Switch>
          </AnimatePresence>
        )}
      />
    </Router>
  );
}
