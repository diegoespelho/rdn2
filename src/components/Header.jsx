import { ShoppingCart, Star } from "lucide-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import "../styles/header.css";

function Header() {
  const { cart, points } = useContext(AppContext);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="header">
      {/* 👇 AGORA É CLICÁVEL */}
      <Link to="/" className="logo">
        <h2>Raízes</h2>
      </Link>

      <div className="header-right">
        <Link to="/loyalty" className="points">
          <Star size={16} /> {points}
        </Link>

        <Link to="/cart" className="cart-icon">
          <ShoppingCart />
          {totalItems > 0 && <span className="badge">{totalItems}</span>}
        </Link>
      </div>
    </header>
  );
}

export default Header;
