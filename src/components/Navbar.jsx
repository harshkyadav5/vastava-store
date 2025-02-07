import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">VASTAVA</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#account">Account</a></li>
        <li><a href="#more">More</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
