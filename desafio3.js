const prompt = require('prompt-sync')()
class heroi {
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
atacar(){
    let ataque
    switch(this.tipo){
        case "Mago":
            ataque = "magia"
            break
        case "Guerreiro":
            ataque = "espada"
            break
        case "Monge":
            ataque = "artes marciais"
            break
        case "Ninja":
            ataque = "shuriken"
            break
        }
console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}
function heroiGenerico(){ // Nao vai printar pq eu nao chamei essa funcao
    let heroiGenericoClasse =[
        {nome: "Carlao", idade: "35", tipo: "Guerreiro"}
    ]
}

function escolherHeroi(){
    let nome = prompt("Digite o nome do seu heroi: ")
    let idade
    while(true) {
        idade = prompt("Digite a idade do seu heroi: ")
        idade = Number(idade)
        if (!isNaN(idade) && idade !== "" && idade > 0 && Number(idade)) {
        break
        }
        console.log("Digite uma idade valida.")
    }
    console.log("Os numeros abaixo representa a classe associada ao Heroi:")
    console.log("Guerreiro = 1")
    console.log("Mago = 2")
    console.log("Monge = 3")
    console.log("Ninja = 4")

    let tipoNumero
    let tipo

    while(true){
        tipoNumero = prompt("Digite o numero correspondente ao seu heroi: ")
        tipoNumero = Number(tipoNumero)
        if (!isNaN(tipoNumero) && tipoNumero !== "" && tipoNumero >= 1 && tipoNumero <= 4){
        break
        }
        console.log("Digite um número entre 1 e 4")
    }
        if (tipoNumero === 1) tipo = "Guerreiro"
        else if (tipoNumero === 2) tipo = "Mago"
        else if (tipoNumero === 3) tipo = "Monge"
        else if (tipoNumero === 4) tipo = "Ninja"

    let heroiNaoGenerico = new heroi(nome, idade, tipo)
        heroiNaoGenerico.atacar()
}
escolherHeroi()