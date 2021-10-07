import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Users from './user/pages/Users';
import NewApplication from './jobs/pages/NewApplication';
import LandingPage from './shared/pages/LandingPage';
import Dashboard from './shared/pages/Dashboard';
import MainNavigation from './shared/components/navigation/MainNavigation';

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <LandingPage/>
          </Route>
          <Route path="/dashboard" exact>
            <Dashboard />
          </Route>
          <Route path="/users" exact>
            <Users/>
          </Route>
          <Route path="/applications/new" exact >
            <NewApplication />
          </Route>
          <Redirect to="/"/>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
