import React from 'react';
import ReactDOM from 'react-dom';
import AppRouters from './routers/AppRouters';
import configureStore from './stores/configureStore';
import { addExpense } from './actions/expenses';
import { filterExpense } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.sass';

const store = configureStore();

store.dispatch(addExpense({description: "Water Bill", amount: 15000, createdAt: 2000}));
store.dispatch(addExpense({description: "Gas Bill", amount: 25000, createdAt: 1500}));
store.dispatch(filterExpense('Gas'));
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

ReactDOM.render(<AppRouters/>, document.getElementById('app'));
