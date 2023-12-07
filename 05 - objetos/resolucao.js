/* 
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/
class Carro{
    carro;
    marca;
    cor;
    gastoMedio;


    constructor(carro, marca, cor, gastoMedio) {
        this.carro = carro;
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }

    automovel(){
        console.log(`Carro: ${this.carro}\nMarca: ${this.marca}\nCor: ${this.cor}\nGasto Médio: ${this.gastoMedio} km/l\n-------------------------`);
    }
}

function valorViagem(carro, distanciaKm, precoCombustivel) {
    let litrosPorViagem = distanciaKm / carro.gastoMedio;
    let resultado = litrosPorViagem * precoCombustivel;
    console.log(`No automovel: ${carro.carro}.
Distância da viagem: ${distanciaKm} Km.
Preço do combustivel: R$${precoCombustivel.toFixed(2)}.
O valor gasto para fazer a viagem será: R$${resultado.toFixed(2)}.
------------------------------------------------`
        );
}

let precoCombustivel = 6;
let distanciaKm = 600;

const prisma = new Carro('prisma','chevrolet', 'preta', 11.2);
const corolla = new Carro('corolla','toyota', 'branco', 12.6);

//prisma.automovel();
//corolla.automovel();

valorViagem(prisma, distanciaKm, precoCombustivel);
valorViagem(corolla, distanciaKm, precoCombustivel);


