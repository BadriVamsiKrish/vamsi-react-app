import React from "react";
import ExpenseForm from './ExpenseForm'
const NewExpense = (props) => {
  const onSaveExpensedataHandler=(dataobj)=>{
    const expenseData={
      ...dataobj
    };
    props.onAddExpense(dataobj);
  };

  return (
  <div className="new-expense">
    <ExpenseForm onSaveExpensedata={onSaveExpensedataHandler}></ExpenseForm>  
  </div>  
  );
}
export default NewExpense;