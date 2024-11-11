import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const { totalAmount } = useCart();

  return (
    <nav className="navDiv">
      <div className="navLeft">
        <span>Pizzería Mamma Mía!</span>
        
        <Link to="/">
          <button>🍕 Home</button>
        </Link>
        <Link to="/profile">
          <button>🔓 Profile</button>
        </Link>
        <Link to="/login">
          <button>🔐 Login</button>
        </Link>
        <Link to="/404">
          <button>🔒 Logout</button>
        </Link>
        <Link to="/register">
          <button>🔐 Register</button>
        </Link>
      </div>
      
      <div className="navRight">
        <Link to="/cart">
          <button className="total">🛒 Total: ${totalAmount.toFixed(2)}</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;