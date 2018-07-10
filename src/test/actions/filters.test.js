import moment from "moment";
import {
  setStartDate,
  setEndDate,
  sortByDate,
  sortByAmount,
  filterExpense } from "../../actions/filters";

test("should generate set start date action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0)
  });
});

test("should generate set end date action object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0)
  });
});

test('should generate sortByDate', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: "SORT_BY_DATE"
  });
});

test('should generate sortByAmount', () => {
  expect(sortByAmount()).toEqual({
    type: "SORT_BY_AMOUNT"
  });
});

test('should generate filterExpense default', () => {
  const action = filterExpense('');
  expect(action).toEqual({
    type: 'FILTER_EXPENSE',
    text: ''
  });
});

test('should generate filterExpense with text', () => {
  const text = 'coming in to text';
  const action = filterExpense(text);
  expect(action).toEqual({
    type: 'FILTER_EXPENSE',
    text
  });
});
