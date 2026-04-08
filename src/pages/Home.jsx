/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/home.css";

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <motion.div
          className="overlay"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}>
          <h1>Raízes do Nordeste</h1>

          <p>
            Uma experiência gastronômica que conecta tradição, sabor e cultura
            nordestina.
          </p>

          <Link to="/menu">
            <button>Explorar Cardápio</button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
