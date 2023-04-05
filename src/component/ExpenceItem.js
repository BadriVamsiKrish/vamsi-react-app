import './ExpenceItem.css';
import ExpenceDate from './ExpenceDate';
const ExpenceItem = (props) => {
  const clickHandler = () => {
    console.log('clicked');
  }

  return(
    <div className='expense-item'>
      <ExpenceDate date={props.date}></ExpenceDate>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
      </div>
      <div className='expense-item__location'>{props.location}</div>
      <div className='expense-item__price'>Rs.{props.amount}</div>
      <button onClick={clickHandler} className='expense-item__delete' >Delete</button>
   </div>  
  );
  
}
export default ExpenceItem;