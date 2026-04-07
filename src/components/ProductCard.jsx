import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "../styles/menu.css";

function ProductCard({ product }) {
  const { addToCart } = useContext(AppContext);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />

      <div className="product-info">
        <h3>{product.name}</h3>
        <p>R$ {product.price.toFixed(2)}</p>
      </div>

      <button onClick={() => addToCart(product)}>Adicionar</button>
    </div>
  );
}

export default ProductCard;
