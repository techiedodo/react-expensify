// FILTER_EXPENSE
export const filterExpense = ( text = '' ) => ({
  type: 'FILTER_EXPENSE',
  text
});
// SORT_BY
export const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});
export const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});
// SET_DATES
export const setStartDate = ( startDate ) => ({
  type: 'SET_START_DATE',
  startDate
});
export const setEndDate = ( endDate ) => ({
  type: 'SET_END_DATE',
  endDate
});
