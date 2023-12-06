/*
    //1 Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

    //Média = (nota 1 + nota 2 + nota 3) / 3;

    //Classificação:
    //- Média menor que 5, reprovação;
    //- Média entre 5 e 7, recuperação;
    //nod- Média acima de 7, passou de semestre;
*/
let media = (5 + 8 + 9) / 3;
if (media < 5) {
    console.log(`Média do aluno ${media.toFixed(1)}\nReprovado!`);
} else if (media >= 5 && media <= 7) {
    console.log(`Média do aluno: ${media.toFixed(1)}\nRecuperação!`);
} else {
    console.log(`Média do aluno: ${media.toFixed(1)}\nAprovado!`);
}


/*
    2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

    Formula do IMC:
    IMC = peso / (altura * altura)

    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

    IMC em adultos Condição:
    - Abaixo de 18.5 Abaixo do peso;
    - Entre 18.5 e 25 Peso normal;
    - Entre 25 e 30 Acima do peso;
    - Entre 30 e 40 Obeso;
    - Acima de 40 Obsesidade Grave;
*/
let peso = 200;
let altura = 1.76;
let IMC = peso / (altura * altura);

if (IMC < 18.5){
    console.log(`IMC: ${IMC.toFixed(2)}.\nAbaixo do peso!`);
} else if (IMC <= 18.5 && IMC <= 25) {
    console.log(`IMC: ${IMC.toFixed(2)}.\nPeso normal!`);
} else if (IMC > 25 && IMC <= 30) {
    console.log(`IMC ${IMC.toFixed(2)}.\nAcima do peso!`)
} else if (IMC > 30 && IMC <= 40) {
    console.log(`IMC ${IMC.toFixed(2)}.\nObeso!`);
} else {
    console.log(`IMC: ${IMC.toFixed(2)}.\nObesidade Grave!`)
}

/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:
    - À vista Débito, recebe 10% de desconto;
    - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

let preco = 50;
let condicao = '3x';

if (condicao === 'debito') {
    preco -= (preco * 0.10);
    console.log(`Valor no debito: R$${preco}`);
} else if (condicao === 'dinheiro' || condicao === 'pix') {
    preco -= (preco * 0.15);
    console.log(`Valor no dinheiro ou PIX: R$${preco.toFixed(2)}`)
} else if (condicao === '2x') {
    console.log(`Valor dividido em 2x sem desconto: ${preco}`)
} else {
    preco += (preco * 0.10);
    console.log(`Valor em mais de 2x, valor com juros de 10%: R$${preco}`);
}

