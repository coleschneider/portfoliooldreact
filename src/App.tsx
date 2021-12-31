import React from 'react';

import { AnimatePresence } from 'framer-motion';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import { Header } from './Header/Header';
import { Landing } from './Landing/Landing';
import { NotFound } from './NotFound/NotFound';
import { Work } from './Work/Work';
import { WorkDetail } from './WorkDetail/WorkDetail';

export function App() {
  return (
    <Router>
      <Header />
      <Route
        render={({ location }) => (
          <AnimatePresence exitBeforeEnter initial={false}>
            <Switch location={location} key={location.pathname}>
              <Route component={Landing} exact path="/" />
              <Route component={Work} exact path="/work" />
              <Route component={WorkDetail} exact path="/work/:id" />
              <Route component={NotFound} />
            </Switch>
          </AnimatePresence>
        )}
      />
    </Router>
  );
}