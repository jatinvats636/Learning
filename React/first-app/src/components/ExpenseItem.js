import "./ExpenseItem.css";

let ExpenseItem = (props) => {
  // const expenseDate = new Date(2022, 5, 9);
  // const expenseTitle = "New Laptop";
  // const expenseAmount = 1500;
  const expenseMonth = props.date.toLocaleString("en-US", { month: "long" });
  const expenseDay = props.date.toLocaleString("en-US", { day: "2-digit" });
  const expenseYear = props.date.getFullYear();

  return (
    <div className="expense-item">
      <div>
        <div>{expenseMonth}</div>
        <div>{expenseYear}</div>
        <div>{expenseDay}</div>
      </div>
      <div className="expense-item_description">
        <h2>{props.title}</h2>
        <div className="expense-item_price">${props.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
