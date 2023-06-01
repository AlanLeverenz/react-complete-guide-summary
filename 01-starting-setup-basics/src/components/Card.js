import './Card.css';

// children is a reserved name show content between opening/closing tags
//

function Card(props) {
  const classes = 'card ' + props.className;

  return (
    <div className={classes}>{props.children}</div>
  )
}

export default Card;