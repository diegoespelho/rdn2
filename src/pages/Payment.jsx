import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton"

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
      <BackButton />
      <h1>Processando pagamento...</h1>
      <p>Aguarde...</p>
    </div>
  );
}

export default Payment;
