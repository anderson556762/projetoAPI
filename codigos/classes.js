class Pais {
    constructor(nome, pib){
        this.nome=nome
        this.pib=pib
    }


info() { 
    return`O nome do país é ${this.nome} e o pib ${this.pib}`};
}
const nacao = new Pais("Brasil", 1000000000)
console.log(nacao.info())