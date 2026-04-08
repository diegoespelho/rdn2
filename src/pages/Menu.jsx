/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import Skeleton from "../components/Skeleton";
import BackButton from "../components/BackButton";
import "../styles/menu.css";

function Menu() {
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("Todos");

  useEffect(() => {
    setTimeout(() => setLoading(false), 800);
  }, []);

  // 🔥 FILTRO
  const filteredProducts =
    category === "Todos"
      ? products
      : products.filter(p => p.category === category);

  const categories = ["Todos", "Pratos", "Bebidas", "Sobremesas"];

  return (
    <div className="menu-container">
      <BackButton />

      <h1>Cardápio</h1>

      {/* 🍔 BOTÕES DE CATEGORIA */}
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

      <motion.div className="product-list">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} />)
          : filteredProducts.map(p => <ProductCard key={p.id} product={p} />)}
      </motion.div>
    </div>
  );
}

export default Menu;
