/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const [user, setUser] = useState(null);
  const [points, setPoints] = useState(() => {
    const stored = localStorage.getItem("points");
    return stored ? JSON.parse(stored) : 0;
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("points", JSON.stringify(points));
  }, [points]);

  const addToCart = product => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);

      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = productId => {
    setCart(prev =>
      prev
        .map(item =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter(item => item.quantity > 0),
    );
  };

  const addPoints = value => {
    setPoints(prev => prev + value);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        user,
        setUser,
        points,
        addPoints,
      }}>
      {children}
    </AppContext.Provider>
  );
}
