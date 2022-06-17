import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem.js";
import ExpenseFilter from "../FilterExpenses/ExpenseFilter.js";
import "./Expenses.css";

let Expenses = (props) => {
  let expenseList = [];
  // const [amount, resetAmount] = useState(props.expenses[0].amount);
  // let updateAmount = () => resetAmount("0");
  const [filteredYear, setFilteredYear] = useState("2022");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((element) => {
    // return element.date.getFullYear().toString() === filteredYear;
    return (
      element.date.toLocaleString("en-US", { year: "numeric" }) === filteredYear
    );
  });

  filteredExpenses.length === 0 &&
    expenseList.push(
      <p className="noexpense">No expenses found for given year.</p>
    );
  filteredExpenses.length > 0 &&
    filteredExpenses.forEach((element) => {
      expenseList.push(
        <ExpenseItem
          key={element.id}
          title={element.title}
          amount={element.amount}
          // amount={amount}
          date={element.date}
        />
      );
    });

  return (
    <div className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expenseList}
      {/* <button onClick={updateAmount}>Click Me</button> */}
    </div>
  );

  // return (
  //   <div className="expenses">
  //     <ExpenseItem
  //       title={props.expenses[0].title}
  //       amount={props.expenses[0].amount}
  //       date={props.expenses[0].date}
  //     />
  //     <ExpenseItem
  //       title={props.expenses[1].title}
  //       amount={props.expenses[1].amount}
  //       date={props.expenses[1].date}
  //     />
  //     <ExpenseItem
  //       title={props.expenses[2].title}
  //       amount={props.expenses[2].amount}
  //       date={props.expenses[2].date}
  //     />
  //     <ExpenseItem
  //       title={props.expenses[3].title}
  //       amount={props.expenses[3].amount}
  //       date={props.expenses[3].date}
  //     />
  //   </div>
  // );
};

export default Expenses;
