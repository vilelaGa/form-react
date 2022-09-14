// export default {
//   enviar: async (email, senha) => {
//     let login = {
//       email,
//       senha,
//     };
//     let requisicao = {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(login),
//     };
//     const response = await fetch("http://localhost/form-api/cadastrar/");
//     const data = await response.json();
//     return data.msg;
//   },
// };
