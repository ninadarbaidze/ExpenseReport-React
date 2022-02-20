import React from "react";
import ExpenseItem from "./Expenseitem";
import'./ExpenseList.css';

const ExpenseList = (props) => {

  
if(props.filterList.length === 0) {
    return <h2 className="expenses-list__fallback">Found NO Expenses</h2>
};

 return <ul className="expenses-list">
     {props.filterList.map(expense =>(
      <ExpenseItem 
      //key is a special props, which helps react to identify individual items.  
      key={expense.id}
      title={expense.title} 
      amount={expense.amount} 
      date={expense.date} />
    ))};
 </ul>
};
export default ExpenseList;