import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Loyalty() {
  const { points } = useContext(AppContext);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Programa de Fidelidade</h1>

      <p>Você possui:</p>
      <h2>⭐ {points} pontos</h2>

      <p>A cada R$1 gasto = 1 ponto</p>
    </div>
  );
}

export default Loyalty;
