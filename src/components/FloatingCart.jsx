import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "../styles/floatingCart.css";

function FloatingCart() {
  const { cart } = useContext(AppContext);
  const navigate = useNavigate();

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  if (totalItems === 0) return null;

  return (
    <div className="floating-cart" onClick={() => navigate("/cart")}>
      <ShoppingCart size={20} />
      <span>{totalItems} itens</span>
    </div>
  );
}

export default FloatingCart;
