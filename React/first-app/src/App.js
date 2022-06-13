// import TodoText from "./components/TodoText";
// import ExpenseItem from "./components/ShowExpenses/ExpenseItem";
import NewExpense from "./components/AddExpenses/NewExpense";
import Expenses from "./components/ShowExpenses/Expenses";
import "./App.css";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "New Laptop",
      amount: 120.12,
      date: new Date(2022, 6, 6),
    },
    {
      id: "e2",
      title: "New Television",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Earphones",
      amount: 10.11,
      date: new Date(2022, 6, 6),
    },
    {
      id: "e4",
      title: "T-Shirt",
      amount: 12.12,
      date: new Date(2022, 6, 6),
    },
    {
      id: "e5",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e6",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <NewExpense />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
