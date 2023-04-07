import React from 'react';
import logo from './logo.svg';
import './App.css';
import ExpenceItem from './component/ExpenceItem';
import NewExpense from './component/NewExpences/NewExpense';

const App = () => {
  const data = [
    {
      title:'buy car',
      date:new Date('2000-1-6'),
      amount:50000,
      location:'hyd'
    },
    {
      title:'buy mobile',
      date:new Date('2000-4-25'),
      amount:25000,
      location:'csk'
    },
    {
      title:'buy house',
      date:new Date('1997-12-03'),
      amount:150000,
      location:'rcb'
    }
  ];
  const addExpenseHandler=expense=>{
    console.log('in app.js');
    console.log(expense);
  }
  
  return (
    <div className="App">
      <h1>hello React...</h1>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      {data.map((i)=>(<ExpenceItem title={i.title} date={i.date} amount={i.amount} location={i.location}></ExpenceItem>))}
    </div>
  );
}

export default App;
