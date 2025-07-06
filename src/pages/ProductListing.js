import { plants } from '../data';
import PlantCard from '../components/PlantCard.js';
import Header from '../components/Header';

export default function ProductListing() {
  const categories = ['Succulents', 'Low Light', 'Flowering'];

  return (
    <div>
      <Header />
   {categories.map((cat) => (
  <div key={cat}>
    <h2>{cat}</h2>
    <div className="product-grid">
      {plants.filter(p => p.category === cat).map(p => (
        <PlantCard key={p.id} plant={p} />
      ))}
    </div>
  </div>
))}

    </div>
  );
}
