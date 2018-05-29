import React from 'react';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ErrorPage from '../components/ErrorPage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import { BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true}/>
        <Route path="/create" component={AddExpensePage}/>
        <Route path="/edit/:id" component={EditExpensePage}/>
        <Route path="/help" component={HelpPage}/>
        <Route component={ErrorPage}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
