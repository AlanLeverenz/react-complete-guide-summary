import React from 'react';

import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = props => {

  // can store JSX content in variables
  let expensesContent = <p>No expenses found.</p>;

  if (props.items.length > 0) {
    expensesContent = props.items.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }

  return <ul className="expenses-list">{expensesContent}</ul>

}

export default ExpensesList