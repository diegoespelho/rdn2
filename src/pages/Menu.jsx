import { useState, useEffect } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import Skeleton from "../components/Skeleton";
import "../styles/menu.css";

function Menu() {
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("Todos");

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const categories = ["Todos", "Lanches", "Pratos", "Bebidas", "Sobremesas"];

  const filtered =
    category === "Todos"
      ? products
      : products.filter(p => p.category === category);

  return (
    <div className="menu-container">
      <h1>Cardápio</h1>

      <div className="categories">
        {categories.map(cat => (
          <button
            key={cat}
            className={category === cat ? "active" : ""}
            onClick={() => setCategory(cat)}>
            {cat}
          </button>
        ))}
      </div>

      <div className="product-list">
        {loading
          ? Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} />)
          : filtered.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}

export default Menu;
