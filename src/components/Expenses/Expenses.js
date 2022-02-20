import React, { useState } from "react";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import ExpenseList from "./ExpenseList"; //list of expense items.
import Card from "../UI/Card";
import ExpensesChart from './ExpensesChart';
import "./Expenses.css";

const Expenses = (props) => {

  //Define useState for filtering purposes
  const [year, setYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setYear(selectedYear); 
  };

  //Filter expenses list based on the year user chooses and storing it in filterList
  const filterList = props.expenses.filter(expense => expense.date.getFullYear().toString() === year)
  // expense items are in expense list
 

  return (
    <Card className="expenses">
      <ExpensesFilter onYearFilter={filterChangeHandler} year={year} />

      {/* sending filtered array of objects to Expenseschart and ExpenseList */}
      <ExpensesChart expenses={filterList}/>
      <ExpenseList filterList={filterList} />
    </Card>
  );
};

export default Expenses;
