import { useDispatch } from 'react-redux';
import { increase, decrease, deleteItem } from '../redux/cartSlice';

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
   <div className="cart-item">
  <img src={item.img} alt={item.name} />
  <div>
    <h3>{item.name}</h3>
    <p>${item.price} x {item.quantity}</p>
    <button onClick={() => dispatch(increase(item.id))}>+</button>
    <button onClick={() => dispatch(decrease(item.id))}>-</button>
    <button onClick={() => dispatch(deleteItem(item.id))}>Delete</button>
  </div>
</div>

  );
}
