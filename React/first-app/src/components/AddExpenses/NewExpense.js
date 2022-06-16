import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (prop) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expeneseData = {
      ...enteredExpenseData,
      id: Math.random.toString(),
    };
    // console.log(expeneseData);
    prop.onAddExpense(expeneseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
