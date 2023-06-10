import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
  // const [enteredTitle, setEnteredTitle] = useState('');
  // const [enteredAmount, setEnteredAmount] = useState('');
  // const [enteredDate, setEnteredDate] = useState('');

  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  })

  const titleChangeHandler = (event) => {
    // use a function within the function so React starts with the latest previous state
    setUserInput((prevState) => {
      return (
        {
          ...prevState,
          enteredTitle: event.target.value
        });
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return (
        {
          ...prevState,
          enteredAmount: event.target.value
        });
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return (
        {
          ...prevState,
          enteredDate: event.target.value
        });
    });
  };


  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min="0.01" step="0.01" onChange={amountChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='number' min="2019-01-01" max="2023-12-31" onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm;