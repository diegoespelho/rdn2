import { Home, Menu, ShoppingCart, Star } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import "../styles/bottomnav.css";

function BottomNav() {
  const location = useLocation();

  const isActive = path => location.pathname === path;

  return (
    <nav className="bottom-nav">
      <Link className={isActive("/") ? "active" : ""} to="/">
        <Home />
      </Link>
      <Link className={isActive("/menu") ? "active" : ""} to="/menu">
        <Menu />
      </Link>
      <Link className={isActive("/cart") ? "active" : ""} to="/cart">
        <ShoppingCart />
      </Link>
      <Link className={isActive("/loyalty") ? "active" : ""} to="/loyalty">
        <Star />
      </Link>
    </nav>
  );
}

export default BottomNav;
