import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Cadastro() {
  return (
    <div>
      <div className="container">
        <div className="row text-center">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <h1>Cadastro</h1>
            <form>
              <input
                className="form-control mb-2"
                type="email"
                placeholder="Email"
              />
              <input
                className="form-control mb-2"
                type="password"
                placeholder="Senha"
              />
              <button className="btn btn-primary">Cadastrar</button>
              <br></br>
              <br></br>
              <a href="/login">Já tem uma conta?</a>
              <br></br>
              <a href="/">home</a>
            </form>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
