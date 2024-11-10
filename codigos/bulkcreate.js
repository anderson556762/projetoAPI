const db = require("../models/index.js")
const usuario = db.Usuario

function criarususer(){
    const user = [
        {
        nome:"maria joaquina",
        email:"mariajoaquina@gmail.com",
        senha:"minha_senha"
        },
        {
        nome:"Henrry",
        email:"henrry@gmail.com",
        senha:"minha_senha",

        },
    ]
    usuario.bulkCreate(user)
    .then(cadastrado => {console.log(cadastrado,"cadastro realizado")})
    .catch(erro => {console.log(erro, "erro ao cadastrar")})
}
criarususer()