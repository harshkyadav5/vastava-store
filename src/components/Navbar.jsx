import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="brand">VASTAVA</div>
      <ul className="nav-links">
        <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
        <li><Link to="/products" className={location.pathname === '/products' ? 'active' : ''}>Products</Link></li>
        <li><Link to="/signin" className={location.pathname === '/signin' ? 'active' : ''}>Sign In</Link></li>
        <li><Link to="/login" className={location.pathname === '/login' ? 'active' : ''}>Login</Link></li>
        <li><Link to="/account" className={location.pathname === '/account' ? 'active' : ''}>Account</Link></li>
        <li><Link to="/more" className={location.pathname === '/more' ? 'active' : ''}>More</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
