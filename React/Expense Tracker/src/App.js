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
  {
    id: "e3",
    title: "Bag",
    amount: 15.11,
    date: new Date(2022, 1, 6),
  },
  {
    id: "e4",
    title: "Bottle",
    amount: 5.1,
    date: new Date(2022, 4, 5),
  },
  {
    id: "e5",
    title: "Remote",
    amount: 7.11,
    date: new Date(2022, 3, 9),
  },
  {
    id: "e6",
    title: "TWS",
    amount: 70.5,
    date: new Date(2022, 8, 7),
  },
  {
    id: "e7",
    title: "Phone",
    amount: 150.45,
    date: new Date(2022, 9, 7),
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
