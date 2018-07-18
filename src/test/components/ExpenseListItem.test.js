import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixture/expenses';

test('should render ExpenseListItem with expense', () => {
  const wrapper = shallow(<ExpenseListItem { ...expenses[0] } />);
  expect(wrapper).toMatchSnapshot();
});
