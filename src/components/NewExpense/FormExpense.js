import React, {useState} from 'react';
import './FormExpense.css';

const FormExpense = (props) => {


    // //using one state
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    // const TitleChangeHandler = (event) => { 
    //     //V1
    //     // setUserInput({
    //     //     ...userInput,
    //     //     enteredTitle: event.target.value
    //     // })
    //     //V2: if we're depending on previos state snapshot, we should use this function
    //     setUserInput((prevState) => {
    //         return {...prevState, enteredTitle: event.target.value} rendering all useState object, overriding enteredTitle.
    //     })
    // };

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
   
    //store title
    const titleChangeHandler = (event) => { //event describes eent that occured.
        setEnteredTitle(event.target.value) //value of entered characters, it's value will be saved in useState
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
          props.onSaveExpenseData(expenseData); //this props is defined in new expense. we're passing expenseData info to newExpense.js
    //to reset user input, not to save their iput in form fields
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
                // value has purpose to send data in submitEvent
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