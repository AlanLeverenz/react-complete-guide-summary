import './ExpenseItem.css';

function ExpenseItem(props) {

  const month = props.date.toLocaleString('en-US', { month: 'long' })

  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>Year</div>
        <div>Date</div>
      </div>
      <div>{props.Date}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem;