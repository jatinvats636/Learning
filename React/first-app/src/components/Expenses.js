// import { useState } from "react";
import ExpenseItem from "./ExpenseItem.js";
import "./Expenses.css";

let Expenses = (props) => {
  let expenseList = [];
  // const [amount, resetAmount] = useState(props.expenses[0].amount);
  // let updateAmount = () => resetAmount("0");

  props.expenses.forEach((element) => {
    expenseList.push(
      <ExpenseItem
        title={element.title}
        amount={element.amount}
        // amount={amount}
        date={element.date}
      />
    );
  });

  return (
    <div className="expenses">
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
