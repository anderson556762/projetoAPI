const db = require("../models/index.js")
const usuario = db.Usuario

function criaruser(){
    usuario.create ({
        nome : "Anderson Messias",
        email : "aknjnjsnsj@gmail.com",
        senha : "ingles"
    }).then(criado => console.log("usuario criado", criado)).catch(erro =>console.log("deu erro", erro))
}

 function deletar(){
    usuario.destroy({
        where:{
        id:15
 }}).then(delet => console.log("usuario deletado", delet)).catch(erro => console.log("erro ao deletar",erro))
}
 deletar()