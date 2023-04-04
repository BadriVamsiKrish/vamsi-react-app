import './ExpenceItem.css';
function ExpenceItem(props) {

  return(
    <div className='expense-item'>
      <div>{props.date.toISOString()}</div>
      <h2 className='expense-item__description'>{props.title}</h2>
      <div className='expense-item__price'>{props.location}</div>
      <div className='expense-item__price'>Rs.{props.amount}</div>
    </div>  
  );
  
}
export default ExpenceItem;