import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const dummyExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 1, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];



const App = () => {
  
  //get previous data and new data.
  const [expenses, setExpenses] = useState(dummyExpenses)

  const addExpenseHandler = (expense) => { //this expense contains all the saved data user entered
    setExpenses((prevExpenses) => { //prevExpenses automatically receves previous snapshot
      return [expense, ...prevExpenses]
    } )
  }

  return <div>
    <NewExpense onAddExpense={addExpenseHandler}/> {/* function pointer which is passed as an argument */}.
    <Expenses expenses={expenses}/>
  </div>
}

export default App;
