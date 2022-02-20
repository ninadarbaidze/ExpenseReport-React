import React, { useState } from "react";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import ExpenseList from "./ExpenseList"; //list of expense items.
import Card from "../UI/Card";
import ExpensesChart from './ExpensesChart';
import "./Expenses.css";

const Expenses = (props) => {
  const [year, setYear] = useState("2021");
  const filterChangeHandler = (selectedYear) => {
    setYear(selectedYear); //selected year is year selected in expenses filter, so the year becomes 2021...
  };


  //filtering and storing it, if list year === filtered year
  const filterList = props.expenses.filter(expense => expense.date.getFullYear().toString() === year)
  // expense items are in expense list
 

  return (
    <Card className="expenses">
      <ExpensesFilter onYearFilter={filterChangeHandler} year={year} />
      {/* sending filtered array of objects to Expenseschart */}
      <ExpensesChart expenses={filterList}/>
      <ExpenseList filterList={filterList} />
    </Card>
  );
};

export default Expenses;
