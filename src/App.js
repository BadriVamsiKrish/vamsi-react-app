import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Expenses } from './components/expenses/Expenses';
import { NewExpense } from './components/new expenses/NewExpense';
const expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
    location:'Hyderabad',
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12), location:'warangal', },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
    location:'Bangalore',
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
    location:'Chennai'
  },
];

function App() {
  const [expdata,setExpdata]=useState(expenses);
  const AddExpenseHandler = (newData) =>{
    setExpdata((prevExpenses)=>{
      return[newData,...prevExpenses]
    });
    expenses.push(newData);
    const appData={
      ...expenses
    };
    console.log(appData);
  } 
  


  return (
    <div className="App">
      <NewExpense onAddExpense={AddExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
