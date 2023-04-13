import React from "react";
import './NewExpense.css';
import { ExpenseForm } from "./ExpenseForm";
export const NewExpense = (props) => {
  const saveExpenseDataHandler = (data) =>{
    const newData={...data,id:Math.random().toString()};
    console.log(newData);
    props.onAddExpense(newData);
  } 

  return(

    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>

  )
  
}