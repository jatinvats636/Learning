import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

let ExpenseItem = (props) => {
  // const expenseDate = new Date(2022, 5, 9);
  // const expenseTitle = "New Laptop";
  // const expenseAmount = 1500;

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item_description">
        <h2>{props.title}</h2>
        <div className="expense-item_price">${props.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
