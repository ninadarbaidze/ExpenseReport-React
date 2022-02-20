import React, {useState} from 'react';
import './FormExpense.css';

const FormExpense = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
   
    //store title
    const titleChangeHandler = (event) => { 
        setEnteredTitle(event.target.value) 
    };
    //store amount
    const amountChangeHandler = (event) => { 
        setEnteredAmount(event.target.value) 
    };
    //store date
    const dateChangeHandler = (event) => { 
        setEnteredDate(event.target.value) 
    };

    const submitEvent = (event) => {
        event.preventDefault() //prevent default browser actin to reload page during submit.
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
          };
          //Sending entered data to parent (newExpense.js)
          props.onSaveExpenseData(expenseData); 

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');

    };

    return (
      <div>
        <form onSubmit={submitEvent}>
          <div className={'new-expense__controls'}>
            <div className='new-expense__control'>
              <label>Title</label>
              <input
                type='text'
                value={enteredTitle}
                onChange={titleChangeHandler}
              />
            </div>
            <div className='new-expense__control'>
              <label>Amount</label>
              <input
                type='number'
                min='0.01'
                step='0.01'
                value={enteredAmount}
                onChange={amountChangeHandler}
              />
            </div>
            <div className='new-expense__control'>
              <label>Date</label>
              <input
                type='date'
                min='2019-01-01'
                max='2022-12-31'
                value={enteredDate}
                onChange={dateChangeHandler}
              />
            </div>
          </div>
          <div className={'new-expense__actions'}>
            <button type='button' onClick={props.close}>Cancel</button>
            <button type='submit'>Add Expense</button>
          </div>
        </form>
        </div>
      );
    }


export default FormExpense;