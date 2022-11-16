import React,{ useState} from 'react';
import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';

 const ExpenseItem = (props) => {
  const [title, setTitle]=useState(props.title);
   console.log('ExpenseItem evaluted by React');
  const clickHandler = () =>{
    setTitle('100$');
       console.log(title);
  };
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Delete Expense</button>
    </Card>
  );
}

export default ExpenseItem;

