import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "../styles/cart.css";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton"

function Cart() {
  const { cart, removeFromCart } = useContext(AppContext);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <BackButton />
      <h1>Carrinho</h1>

      {cart.length === 0 ? (
        <p>Seu carrinho está vazio</p>
      ) : (
        <>
          <div className="cart-list">
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <span>{item.name}</span>

                <span>
                  {item.quantity}x - R$ {item.price.toFixed(2)}
                </span>

                <button onClick={() => removeFromCart(item.id)}>Remover</button>
              </div>
            ))}
          </div>

          <h2>Total: R$ {total.toFixed(2)}</h2>

          <Link to="/checkout">
            <button className="checkout-btn">Ir para Checkout</button>
          </Link>
        </>
      )}
    </div>
  );
}

export default Cart;
