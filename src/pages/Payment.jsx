import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();

  useEffect(() => {
    // Simula processamento externo
    setTimeout(() => {
      navigate("/status");
    }, 2000);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Processando pagamento...</h1>
      <p>Aguarde...</p>
    </div>
  );
}

export default Payment;
