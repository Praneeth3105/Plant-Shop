import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

export default function CartPage() {
  const { items, totalCount, totalPrice } = useSelector(state => state.cart);

  return (
    <div>
      <Header />
      <h2>Shopping Cart</h2>
      <p>Total Items: {totalCount}</p>
      <p>Total Price: ${totalPrice}</p>
      {Object.values(items).map(item => <CartItem key={item.id} item={item} />)}
      <button onClick={() => alert('Coming Soon')}>Checkout</button>
      <Link to="/products"><button>Continue Shopping</button></Link>
    </div>
  );
}
