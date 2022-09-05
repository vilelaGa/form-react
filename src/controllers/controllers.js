import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Login from "../views/login";
import Cadastro from "../views/cadastro";
import Home from "../views/home";
import Logado from "../views/logado";

function Controllers() {
  return (
    <Router>
      <Routes>
        <Route exct path="/" element={<Home />} />
        <Route exct path="/login" element={<Login />} />
        <Route exct path="/cadastro" element={<Cadastro />} />
        <Route exct path="/logado/home" element={<Logado />} />
      </Routes>
    </Router>
  );
}

export default Controllers;
