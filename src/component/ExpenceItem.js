import React ,{useState} from 'react';
import './ExpenceItem.css';
import ExpenceDate from './ExpenceDate';
const ExpenceItem = (props) => {
  const [title,setTitle]=useState(props.title);
  const [amount,setAmount]=useState(props.amount);
  const clickHandler = () => {
    setTitle('updated title');
    //setAmount('$100')
    console.log(title);
  }
  const Handler=()=>{
    setAmount('$100');
  }

  return(
    <div className='expense-item'>
      <ExpenceDate date={props.date}></ExpenceDate>
      <div className='expense-item__description'>
        <h2>{title}</h2>
      </div>
      <div className='expense-item__location'>{props.location}</div>
      <div className='expense-item__price'>Rs.{amount}</div>
      <button onClick={Handler} className='expense-item__delete' >update Amount</button>
      <button onClick={clickHandler} className='expense-item__delete' >Delete</button>
   </div>  
  );
  
}
export default ExpenceItem;