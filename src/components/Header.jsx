import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Start</Link> | 
        <Link to="/portfolio">Portfolio</Link> | 
        <Link to="/kontakt">Kontakt</Link> | 
        <Link to="/shop">Shop</Link>
      </nav>
    </header>
  );
}
