import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from "yup";
import axios from "axios";
import api from "./api";

function Login() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    // alert(await api.enviar(e.target.email.value, e.target.senha.value));
    // axios
    //   .get("http://localhost/form-api/cadastrar", values)
    //   // .post("http://localhost/teste__/", values)
    //   .then((resp) => console.log(resp));
  };

  // const validations = yup.object().shape({
  //   email: yup.string().email().required(),
  //   senha: yup.string().min(8).required(),
  // });

  return (
    <div>
      <div className="container">
        <div className="row text-center">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <h1>Login</h1>

            <form onSubmit={handleSubmit}>
              {/* INPUT EMAIL */}
              <div>
                <input
                  className="form-control mb-2"
                  name="email"
                  type="email"
                  placeholder="Email"
                />
                {/* <ErrorMessage component="span" name="email" /> */}
              </div>
              {/* FIM INPUT EMAIL */}

              {/* INPUT SENHA */}
              <div>
                <input
                  className="form-control mb-2"
                  name="senha"
                  type="password"
                  placeholder="Senha"
                />
                {/* <ErrorMessage component="span" name="senha" /> */}
              </div>
              {/* FIM INPUT SENHA */}

              <a href="/logado/home" className="btn btn-primary">
                Login
              </a>
              <br></br>
              <br></br>
              <a href="/cadastro">Não tem uma conta?</a>
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

export default Login;
