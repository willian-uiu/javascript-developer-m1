class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
        this.imc = peso / Math.pow(altura, 2);
    }

    apresentarIMC(){
        console.log(`Olá, eu sou ${this.nome}
Peso: ${this.peso} 
Tenho: ${this.altura} de altura
Meu imc é: ${this.imc.toFixed(2)}`)
    }
}

const jose = new Pessoa('José', 50, 1.73);

jose.apresentarIMC();