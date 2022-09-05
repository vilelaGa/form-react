import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Logado() {
  return (
    <div>
      <div className="container">
        <div className="row text-center">
          <div className="col-md-3"></div>
          <div className="col-md-6 mt-5">
            <h4>Olá Gabriel Vilela, você está logado</h4>
            <a href="/">sair</a>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
}

export default Logado;
