import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import "../styles/checkout.css";

function Checkout() {
  const { cart, addPoints, clearCart } = useContext(AppContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [acceptedLGPD, setAcceptedLGPD] = useState(false);

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const handlePayment = () => {
    if (!name || !phone) {
      alert("Preencha seus dados");
      return;
    }

    if (!acceptedLGPD) {
      alert("Você precisa aceitar os termos");
      return;
    }

    const total = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    );

    addPoints(Math.floor(total));
    clearCart(); // 💥 limpa após compra
    navigate("/payment");
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>

      <div className="form">
        <input
          type="text"
          placeholder="Seu nome"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Telefone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />

        <label className="lgpd">
          <input
            type="checkbox"
            checked={acceptedLGPD}
            onChange={e => setAcceptedLGPD(e.target.checked)}
          />
          Aceito o uso dos meus dados para processamento do pedido.
        </label>
      </div>

      <h2>Total: R$ {total.toFixed(2)}</h2>

      <button onClick={handlePayment}>Finalizar Pedido</button>
    </div>
  );
}

export default Checkout;
