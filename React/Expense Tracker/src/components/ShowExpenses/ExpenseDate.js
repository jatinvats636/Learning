import { useState } from "react";
import "./ExpenseDate.css";

let ExpenseDate = (props) => {
  const expenseMonth = props.date.toLocaleString("en-US", { month: "long" });
  const expenseDay = props.date.toLocaleString("en-US", { day: "2-digit" });
  const expenseYear = props.date.toLocaleString("en-US", { year: "numeric" });

  return (
    <div className="expense-date">
      <div className="expense-date_month">{expenseMonth}</div>
      <div className="expense-date_year">{expenseYear}</div>
      <div className="expense-date_day">{expenseDay}</div>
    </div>
  );
};

export default ExpenseDate;
