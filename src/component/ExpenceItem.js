import './ExpenceItem.css';
import ExpenceDate from './ExpenceDate';
function ExpenceItem(props) {

  return(
    <div className='expense-item'>
      <ExpenceDate date={props.date}></ExpenceDate>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
      </div>
      <div className='expense-item__location'>{props.location}</div>
      <div className='expense-item__price'>Rs.{props.amount}</div>
    </div>  
  );
  
}
export default ExpenceItem;