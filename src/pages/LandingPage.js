import { Link } from 'react-router-dom';
import bg from '../assets/bg.jpg';

export default function LandingPage() {
  return (
    <div style={{ backgroundImage: `url(${bg})`, height: '100vh', backgroundSize: 'cover', color: '#fff', padding: '2rem' }}>
      <h1>GreenSpace</h1>
      <p>GreenSpace is your online destination for the best indoor houseplants.</p>
      <Link to="/products">
        <button>Get Started</button>
      </Link>
    </div>
  );
}
