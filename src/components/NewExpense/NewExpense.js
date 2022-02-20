import React, { useState } from "react";
import FormExpense from "./FormExpense";
import "./NewExpense.css";

const NewExpense = (props) => {
  //for opening or closing form.
  const [open, setOpen] = useState(false);

  //This function is to take user's entered data.
  const saveExpenseHandler = (enteredExpressData) => {
    const expenseData = {
      ...enteredExpressData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setOpen(false); //to close form when submiting the data.
  };

  //Open form when Add New Expenses is clicked
  const openExpansesFormHandler = () => {
    setOpen(true);
  };
  //close form when cancel or add expense button is clicked
  const closeExpansesFormHandler = () => {
    setOpen(false); //?
  };

  return (
    <div className="new-expense">
      {/* if setOpen is false, then only button is shown */}
      {!open && (
        <button onClick={openExpansesFormHandler}>Add New Expense</button>
      )}

      {/* if setOpen is open, then only form is shown, we're sending formexpense close function */}
      {open && (<FormExpense
          onSaveExpenseData={saveExpenseHandler}
          close={closeExpansesFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
