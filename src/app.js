import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouters';
import configureStore from './stores/configureStore';
import { addExpense } from './actions/expenses';
import { filterExpense, sortByDate, sortByAmount } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.sass';

const store = configureStore();

store.dispatch(addExpense({description: "Water Bill", amount: 15000, createdAt: 1525201200000}));
store.dispatch(addExpense({description: "Gas Bill", amount: 25000, createdAt: 1522782000000}));
// store.dispatch(filterExpense('Gas'));

store.dispatch(sortByAmount());

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
