const db = require("../models/index")
const usuario = db.Usuario

function CriarUsuario(){
    usuario.create({
        nome: 'Anderson',
        emai: 'andersonjunior@gmail.com',
        senha: '12345adppjr',
    }).then(usuarioCriado => console.log("o usuario foi cadastrado",usuarioCriado))
    .catch(erro => console.log("erro ao cadastrar", erro));
    
}
function deletarUsuario(id){
    usuario.destroy({
        where:{
            id
        }
    })
}

deletarUsuario(2)