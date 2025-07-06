import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const count = useSelector((state) => state.cart.totalCount);

  return (
    <header>
      <nav>
        <Link to="/products">Products</Link> | 
        <Link to="/cart">Cart 🛒({count})</Link>
      </nav>
    </header>
  );
}
