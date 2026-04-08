/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";
import { Plus, Heart } from "lucide-react";
import Toast from "./Toast";
import "../styles/menu.css";

function ProductCard({ product }) {
  const { addToCart } = useContext(AppContext);
  const [fav, setFav] = useState(false);
  const [showToast, setShowToast] = useState(false);

  return (
    <>
      <motion.div className="product-card" whileHover={{ scale: 1.03 }}>
        <img src={product.image} alt={product.name} />

        <div className="product-info">
          <h3>{product.name}</h3>
          <p>R$ {product.price.toFixed(2)}</p>

          <div className="actions">
            <button
              onClick={() => {
                addToCart(product);
                setShowToast(true);
                setTimeout(() => setShowToast(false), 2000);
              }}>
              <Plus size={16} />
            </button>

            <Heart
              size={20}
              color={fav ? "red" : "gray"}
              onClick={() => setFav(!fav)}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </motion.div>

      {/* 👇 AQUI FICA O TOAST */}
      {showToast && <Toast message="Adicionado ao carrinho!" />}
    </>
  );
}

export default ProductCard;
