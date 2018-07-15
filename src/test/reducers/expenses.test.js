import expensesReducers from '../../reducers/expenses';
import expenses from '../fixture/expenses';

test('should setup default state', () => {
  const state = expensesReducers(undefined, { type: '@@INIT'});
  expect(state).toEqual([]);
});

test('should add expense', () => {
  const expense = {
    id: '4',
    description: 'chocolate',
    note: 'N/A',
    amount: 1950,
    createdAt: 0
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducers(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});
test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducers(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense by id if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducers(expenses, action);
  expect(state).toEqual(expenses);
});

test('should edit expense if id found', () => {
  const amount = {
    amount: 0
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      amount
    }
  };
  const state = expensesReducers(expenses, action);
  expect(state[1].amount).toBe(amount);
});

test('should not edit expense if id not found', () => {
  const amount = 0;
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      amount
    }
  };
  const state = expensesReducers(expenses, action);
  expect(state).toEqual(expenses);
});
