import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props)=>{
  const [enterTitle,setEnterTitle]=useState('');
  const formHandler=(event)=>{
    setEnterTitle(event.target.value);
    console.log(event.target.value);
  
  }

  const [enterAmount,setEnterAmount]=useState('');
  const formHandlerr=(event)=>{
    setEnterAmount(event.target.value);
    console.log(event.target.value);
  
  }
  const [enterDate,setEnterDate]=useState('');
  const formHandlerrr=(event)=>{
    setEnterDate(event.target.value);
    console.log(event.target.value);
  
  }

  const submitHandler=(event)=>{
    event.preventDefault();
    const dataobj={
      title:enterTitle,
      amount:enterAmount,
      date:new Date(enterDate)

    };
    props.onSaveExpensedata(dataobj);
    setEnterTitle('');
    setEnterAmount('');
    setEnterDate('');

  }
  return(
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input value={enterTitle} type='text' onChange={formHandler}/>

        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input value={enterAmount} type='number' min='0.01' step='0.01' onChange={formHandlerr}/>


        </div>
        <div className="new-expense__control">
          <label>
            Date
          </label>
          <input value={enterDate}  type='date' min='2019-01-01' max='2022-12-31' onChange={formHandlerrr}/>

        </div>
        <div className="new-expense__actions">
          <button type='submit'>Add Expense</button>

        </div>

      </div>
    </form>
  );

}
export default ExpenseForm;