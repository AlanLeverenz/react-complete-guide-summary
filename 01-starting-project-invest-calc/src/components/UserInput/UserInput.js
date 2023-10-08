import { useState } from 'react';

// initializing the state values outside the component function
const initialUserInput = {
  'current-savings': 10000,
  'yearly-contribution': 1200,
  'expected-return': 7,
  'duration': 10
}

const UserInput = (props) => {
  const [userInput, setUserInput] = useState(initialUserInput);

  const submitHandler = (event) => {
    event.preventDefault();
    // ...
    console.log('SUBMIT');
  };

  const resetHandler = () => {
    setUserInput(initialUserInput);
  };

  // setState function automatically receives the previous input
  // putting [input] in brackets makes it the key for the valu
  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: value,
      }
    });
  }

  // arrow function inserted in onChange event is only activated when the value changes
  // React automatically returns the event and its target when the value is changed
  // 2-way binding in the form to display current state

  return (
    <form onSubmit={submitHandler} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input onChange={(event) => inputChangeHandler('current-savings', event.target.value)}
            value={userInput['current-savings']}
            type="number"
            id="current-savings" />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input onChange={(event) => inputChangeHandler('yearly-contribution', event.target.value)}
            value={userInput['yearly-contribution']}
            type="number"
            id="yearly-contribution" />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input onChange={(event) => inputChangeHandler('expected-return', event.target.value)}
            value={userInput['expected-return']}
            type="number"
            id="expected-return" />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input onChange={(event) => inputChangeHandler('duration', event.target.value)}
            value={userInput['duration']}
            type="number"
            id="duration" />
        </p>
      </div>
      <p className="actions">
        <button onClick={resetHandler}
          type="reset"
          className="buttonAlt">
          Reset
        </button>
        <button
          type="submit"
          className="button">
          Calculate
        </button>
      </p>
    </form>
  )
}

export default UserInput;