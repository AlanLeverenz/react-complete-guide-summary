import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  // enteredExpenseData is provided by the form event listener onChange
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      // gets key-value pairs from form data
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    //pushing up the data that was gathered in the form to App function above
    props.onAddExpense(expenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  )
};

export default NewExpense;