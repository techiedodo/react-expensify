import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';
import expenses from '../fixture/expenses';

test('should render ExpenseList with expenses', () => {
  const wrapper = shallow(<ExpenseList expenses={expenses}/>);
  expect(wrapper).toMatchSnapshot();
});
test('should render p tag if no expenses present', () => {
  const wrapper = shallow(<ExpenseList expenses={[]}/>);
  expect(wrapper).toMatchSnapshot();
});
