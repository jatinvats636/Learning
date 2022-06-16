import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    inputTitle: "",
    inputAmount: "",
    inputDate: "",
  });

  const titleChangeHandler = (e) => {
    // setUserInput({
    //   ...userInput,
    //   inputTitle: e.target.value,
    // });
    setUserInput((prevState) => {
      return { ...prevState, inputTitle: e.target.value };
    });
  };
  const amountChangeHandler = (e) => {
    // setUserInput({
    //   ...userInput,
    //   inputAmount: e.target.value,
    // });
    setUserInput((prevState) => {
      return { ...prevState, inputAmount: e.target.value };
    });
  };
  const dateChangeHandler = (e) => {
    // setUserInput({
    //   ...userInput,
    //   inputDate: e.target.value,
    // });
    setUserInput((prevState) => {
      return { ...prevState, inputDate: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // const expenseData = {
    //   title: inputTitle,
    //   amount: inputAmount,
    //   date: new Date(inputDate),
    // };
    // console.log(userInput);
    props.onSaveExpenseData(userInput);
    setUserInput(() => {
      return {
        inputTitle: "",
        inputAmount: "",
        inputDate: "",
      };
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense_controls">
        <div className="new-expense_control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.inputTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense_control">
          <label>Amount</label>
          <input
            type="number"
            value={userInput.inputAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense_control">
          <label>Date</label>
          <input
            type="date"
            value={userInput.inputDate}
            min="2020-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense_actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
