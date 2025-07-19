import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">BeautyHub</Link>
      <nav>
        <Link to="/">All Products</Link>
      </nav>
    </header>
  );
};

export default Header;