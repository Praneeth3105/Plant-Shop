import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

export default function PlantCard({ plant }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const isAdded = !!cartItems[plant.id];

  return (
   <div className="plant-card">
  <img src={plant.img} alt={plant.name} />
  <h3>{plant.name}</h3>
  <p>${plant.price}</p>
  <button onClick={() => dispatch(addToCart(plant))} disabled={isAdded}>
    {isAdded ? 'Added' : 'Add to Cart'}
  </button>
</div>

  );
}
