const database = require("../models/index.js")
const usuario = database.Usuario
const {Op} = require('sequelize')

function criarusuario(){
const usuarios = [
   {
    nome:"Roger",
    email: "Roger@gmail.com",
    senha: "12345",
   },
   {
    nome: "Astolfo",
    email: "Astolfo@gmail.com",
    senha: "12345",
   },
   {
    nome: "Atreus",
    email: "Atreus@gmail.com",
    senha: "123345",
   },
]
usuario.bulkCreate(usuarios).then(enviado => console.log("usuario enviado",enviado))
    .catch(erro =>{ console.log(erro,"erro ao cadastrar")
    });
}


function deletarUser(ids){
    usuario.destroy({
        where: {
            id:{
                [Op.in]:ids
            }
    }
    })
    .then(deletado => console.log("usuario deletado", deletado))
    .catch(erro =>console.log("erro ao deletar", erro))
}
criarusuario();