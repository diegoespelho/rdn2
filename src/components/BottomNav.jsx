import { Home, Menu as MenuIcon, ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/bottomnav.css";

function BottomNav() {
  return (
    <nav className="bottom-nav">
      <Link to="/">
        <Home size={20} />
      </Link>
      <Link to="/menu">
        <MenuIcon size={20} />
      </Link>
      <Link to="/cart">
        <ShoppingCart size={20} />
      </Link>
      <Link to="/loyalty">
        <Star size={20} />
      </Link>
    </nav>
  );
}

export default BottomNav;
