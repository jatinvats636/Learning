import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (prop) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => setIsEditing(true);
  const stopEditingHandler = () => setIsEditing(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expeneseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    // console.log(expeneseData);
    prop.onAddExpense(expeneseData);
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add Expense</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
