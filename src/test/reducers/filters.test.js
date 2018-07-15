import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter value', () => {
  const state = filtersReducer(undefined, { type: '@@INIT'});
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  };
  const action = { type: 'SORT_BY_DATE'};
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

test('should set filter expense to text', () => {
  const action = {
    type: 'FILTER_EXPENSE',
    text: 'text to look for'
  }
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'date'
  };
  const state = filtersReducer(currentState, action);
  expect(state.text).toBe('text to look for');
});

test('should set startDate', () => {
  const action = {
    type: 'SET_START_DATE',
    startDate: moment(0)
  }
  const currentState = {
    text: '',
    startDate: moment(0).add(4, 'days').valueOf(),
    endDate: undefined,
    sortBy: 'date'
  };
  const state = filtersReducer(currentState, action);
  expect(state.startDate).toEqual(moment(0));
});

test('should set endDate', () => {
  const action = {
    type: 'SET_END_DATE',
    endDate: moment(0)
  }
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: moment(0).add(4, 'days').valueOf(),
    sortBy: 'date'
  };
  const state = filtersReducer(currentState, action);
  expect(state.endDate).toEqual(moment(0));
});
