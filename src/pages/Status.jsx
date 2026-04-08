import { useEffect, useState } from "react";
import BackButton from "../components/BackButton";

function Status() {
  const [status, setStatus] = useState("preparing");

  useEffect(() => {
    const timers = [
      setTimeout(() => setStatus("delivering"), 3000),
      setTimeout(() => setStatus("done"), 6000),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  const getMessage = () => {
    switch (status) {
      case "preparing":
        return "🍳 Seu pedido está em preparo";
      case "delivering":
        return "🚚 Saiu para entrega";
      case "done":
        return "✅ Pedido finalizado";
      default:
        return "";
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <BackButton />
      <h1>🎉 Pedido Confirmado!</h1>
      <p>Obrigado pela sua compra 🙌</p>

      <h2 style={{ marginTop: "20px" }}>{getMessage()}</h2>

      {/* 👇 AQUI FICA O EXTRA */}
      {status === "done" && (
        <p style={{ marginTop: "20px", fontWeight: "bold" }}>
          Seu pedido foi concluído com sucesso!
        </p>
      )}
    </div>
  );
}

export default Status;
