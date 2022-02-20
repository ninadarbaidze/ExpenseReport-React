import React, { useState } from "react";
import FormExpense from "./FormExpense";
import "./NewExpense.css";

const NewExpense = (props) => {
  //Define state for opening or closing form.
  const [open, setOpen] = useState(false);

  //Take entered user data, add id.
  const saveExpenseHandler = (enteredExpressData) => {
    const expenseData = {
      ...enteredExpressData,
      id: Math.random().toString(),
    };
    //Send this data back to parent (App)
    props.onAddExpense(expenseData);
    setOpen(false); 
  };

  //Open form when Add New Expenses button is clicked
  const openExpansesFormHandler = () => {
    setOpen(true);
  };
  //Close form when cancel or add expense button is clicked
  const closeExpansesFormHandler = () => {
    setOpen(false); //?
  };

  return (
    <div className="new-expense">
      {!open && (
        <button onClick={openExpansesFormHandler}>Add New Expense</button>
      )}
      {open && (<FormExpense
          onSaveExpenseData={saveExpenseHandler}
          close={closeExpansesFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
