import { Link } from "react-router-dom";
import "../styles/home.css";

function Home() {
  return (
    <div className="home-container">
      <h1>Raízes do Nordeste</h1>
      <p>Bem-vindo! Escolha sua unidade e faça seu pedido.</p>

      <Link to="/menu">
        <button>Ver Cardápio</button>
      </Link>
    </div>
  );
}

export default Home;
