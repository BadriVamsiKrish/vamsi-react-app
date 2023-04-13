import React,{useState} from 'react';
import './Expenses.css';
import { ExpenseItems } from './ExpenseItem';
import { Card } from '../ui/Card';
import {ExpensesFilter} from './ExpensesFilter';
export const Expenses = (props) => {
   const [filteredYear,setFilteredYear]  = useState('2020');
  const filterChangeHandler = selectedYear =>{
       setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(expense =>{
    return expense.date.getFullYear().toString() === filteredYear;
  })
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
       {props.items.map((item)=><ExpenseItems
       key={item.id} 
        title={item.title}
        amount={item.amount}
        date={item.date}
     />)}
    </Card>
  )
  
}