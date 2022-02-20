import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'
import './ExpenseItem.css';


const ExpenseItem = (props) => {

  // //useState returns an array, first one is a value of the variable, second one is a function which will update data.
  // const [title, setTitle] = useState(props.title)
  // const clickHandler = () => {
  //   setTitle('Updated!') //calling updating function will update existing element by passing arguments.
  // }

  return (
    <li>
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </Card>
    </li>
  );
}

export default ExpenseItem;