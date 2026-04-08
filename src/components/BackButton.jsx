import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "../styles/backButton.css";

function BackButton() {
  const navigate = useNavigate();

  return (
    <button className="back-btn" onClick={() => navigate(-1)}>
      <ArrowLeft size={18} /> Voltar
    </button>
  );
}

export default BackButton;
