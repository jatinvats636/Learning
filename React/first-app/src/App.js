// import TodoText from "./components/TodoText";
// import ExpenseItem from "./components/ShowExpenses/ExpenseItem";
import { useState } from "react";
import NewExpense from "./components/AddExpenses/NewExpense";
import Expenses from "./components/ShowExpenses/Expenses";
import "./App.css";

const dummy_expenses = [
  {
    id: "e1",
    title: "New Laptop",
    amount: 120.12,
    date: new Date(2022, 6, 6),
  },
  {
    id: "e2",
    title: "Earphones",
    amount: 10.11,
    date: new Date(2022, 6, 6),
  },
];

const App = () => {
  const [new_expenses, setExpenses] = useState(dummy_expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };
  // console.log(new_expenses);

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={new_expenses} />
    </div>
  );
};

export default App;
