import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [userInput, setUserInput] = useState({
    inputTitle: "",
    inputAmount: "",
    inputDate: "",
  });

  const titleChangeHandler = (e) => {
    setUserInput({
      ...userInput,
      inputTitle: e.target.value,
    });
  };
  const amountChangeHandler = (e) => {
    setUserInput({
      ...userInput,
      inputAmount: e.target.value,
    });
  };
  const dateChangeHandler = (e) => {
    setUserInput({
      ...userInput,
      inputDate: e.target.value,
    });
  };
  return (
    <form>
      <div className="new-expense_controls">
        <div className="new-expense_control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense_control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-expense_control">
          <label>Date</label>
          <input type="date" min="2020-01-01" max="2022-12-31" />
        </div>
      </div>
      <div className="new-expense_actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
