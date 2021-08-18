const prompt = require("prompt-sync")();
// 1
// console.log("O primeiro programa a gente nunca esquece!");

// 2
/* console.log("Caio");
console.log("Rua A");
console.log("9999-9999");*/

// 3
/*console.log(`You reached for the secret too soon, you cried for the moon
Shine on you crazy diamond
Threatened by shadows at night, and exposed in the light
Shine on you crazy diamond
Well you wore out your welcome with random precision
Rode on the steel breeze`);*/

// 4
/*console.log(`    ALUNO (A)  NOTA
=========  ====
ALINE      9.0
MÁRIO      DEZ
SÉRGIO     4.5
SHIRLEY    7.0`
);*/


// 5
/*const perg = prompt("Qual será o seu pedido (digite o número): 1-Ceveja 2-Uísque 3-Caipirinha");

if (perg == 1){
    console.log("Seu pedido foi Cerveja.");
} else if (perg == 2){
    console.log("Seu pedido foi Uísque.");
} else if (perg == 3){
    console.log("Seu pedido foi Caipirinha.");
} else{
    console.log("O pedido não consta no cardápio");
};*/


// 6
/* const q1 = parseInt(prompt("Qual é a vida do monstro entre 10 e 50?"));
const q2 = parseInt(prompt("Qual é o ATK do herói entre 5 e 10?"));
const rounds = q1/q2

console.log(`O jogador irá matar o monstro em ${Math.round(rounds)} rodadas!`); */


// 7
/* const value = 42.54;
const taxper = 0.1;
const taxtotal = (value * taxper);
const check = (value + taxtotal).toFixed(2);
console.log(`O valor total foi de R$ ${check}`); */


// 8
/* const value = 100.98;
const payment = 150;
const change = (payment - value).toFixed(2);
console.log(`O troco é R$ ${change}.`); */

//9
/* const born = prompt("Qual ano você nasceu?");
const year = prompt("Em que ano estamos?");
const age = (year - born)
console.log(`Você possui ${age} e está na flor da idade!`) */


//10
/* const value = parseInt(prompt("Quantos reais você deseja converter?"));

const dolar = 5.30;
const libra = 7.28;
const euro = 6.20;
const dcanada = 4.20;
const pesoarg = 0.055;
const pesochil = 0.0067;

console.log(`${value} reais equivale a:
${(value/dolar).toFixed(2)} dólar(es).
${(value/libra).toFixed(2)} libra(s) esterlina(s).
${(value/euro).toFixed(2)} euro(s).
${(value/dcanada).toFixed(2)} dólar(es) canadense(s).
${(value/pesoarg).toFixed(2)} peso(s) argentino(s).
${(value/pesochil).toFixed(2)} peso(s) chileno(s).
`); */


//11
/* const num = parseInt(prompt("Digite um número inteiro: "));

if (num % 2 == 0){
    console.log("Esse número é par.");
} else{
    console.log("Esse número é ímpar");
}; */


//12
/* const num = parseInt(prompt("Digite um número diferente de 0: "));
if (num > 0){
    console.log("O número é positivo.");
} else if (num < 0){
    console.log("O número é negativo.");
};
while (num == 0){
    const num = parseInt(prompt("Por favor, digite um número diferente de 0: "));
    if (num > 0){
        console.log("O número é positivo.");
        break
    } else if (num < 0){
        console.log("O número é negativo.");
        break
    };
}; */


//13
/* const num1 = parseInt(prompt("Digite um número: "));
const num2 = parseInt(prompt("Digite outro número: "));
if (num1 > num2){
    console.log("O primeiro número é maior.")
} else if (num2 > num1){
    console.log("O segundo número é maior.")
} else{
    console.log("Os números são iguais.")
} */


//14
/* const nota = parseInt(prompt("Digite sua nota: "));
if (nota < 6 && nota >= 0){
    console.log("Tirou F");
} else if (nota >=6 && nota < 7){
    console.log("Tirou D");
} else if (nota >=7 && nota < 8){
    console.log("Tirou C");
} else if (nota >=8 && nota < 9){
    console.log("Tirou B");
} else if (nota >=9 && nota <= 10){
    console.log("Tirou A");
} else{
    console.log("Nota inválida");
}; */


//15
/* readj1 = 0.2
readj2 = 0.15
readj3 = 0.1
readj4 = 0.05

const wage = parseInt(prompt("Qual é o seu salário?"))
if (wage <= 280){
    dif = (wage * readj1);
    newwage = (wage + dif);
    console.log(`Seu salárioa atual é de R$ ${wage.toFixed(2)}.
    O reauste foi de ${(readj1*100)}%.
    O aumento foi de R$ ${dif.toFixed(2)}.
    Seu salário agora é ${newwage.toFixed(2)}.`);
} else if (wage > 280 && wage <=700){
    dif = (wage * readj2);
    newwage = (wage + dif);
    console.log(`Seu salárioa atual é de R$ ${wage.toFixed(2)}.
    O reauste foi de ${(readj2*100)}%.
    O aumento foi de R$ ${dif.toFixed(2)}.
    Seu salário agora é ${newwage.toFixed(2)}.`);
} else if (wage > 700 && wage <=1500){
    dif = (wage * readj3);
    newwage = (wage + dif);
    console.log(`Seu salárioa atual é de R$ ${wage.toFixed(2)}.
    O reauste foi de ${(readj3*100)}%.
    O aumento foi de R$ ${dif.toFixed(2)}.
    Seu salário agora é ${newwage.toFixed(2)}.`);
} else if (wage > 1500){
    dif = (wage * readj4);
    newwage = (wage + dif);
    console.log(`Seu salárioa atual é de R$ ${wage.toFixed(2)}.
    O reauste foi de ${(readj4*100)}%.
    O aumento foi de R$ ${dif.toFixed(2)}.
    Seu salário agora é ${newwage.toFixed(2)}.`);
}; */


//16
/* numbers = []
while (numbers.length < 5){
    const num = parseInt(prompt("Digite um número: "));
    if (numbers.includes(num) == false){
        numbers.push(num);
    }
}

// console.log(numbers.sort());

numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers); */


// 16 prof mandou mas não fica na ordem crescente, interessante ver o "do while"
/* const lista = []
do {
    let num = +prompt('Número: ');
    const exist = lista.find(elem => elem == num);
    if(exist == undefined) {
        lista.push(num)
    };
    var resp = prompt('Deseja continuar? [S/N] ').toUpperCase()[0];
} while (resp == 'S');
console.log(lista) */


//17
/* for (let i = 0; i < 11; i++) {
    console.log(`8x${i} = ${8*i}`)
}; */


//18
/* for (let j = 1; j < 11; j++) {
    for (let i = 0; i < 11; i++) {
        console.log(`${j}x${i} = ${j*i}`)
}} */


//19
/* function area(a,b){
    return a * b;
};
tamanho1 = parseInt(prompt("Digite o valor em metros de um lado do terreno: "));
tamanho2 = parseInt(prompt("Digite o valor em metros do outro lado do terreno: "));
console.log(`A área do terreno é ${(area(tamanho1, tamanho2)).toFixed(2)} metros quadrados.`); */


//20
/* function voto(a, b){
    if (b - a >= 16 && b - a < 18){
        return "VOTO OPCIONAL";
    } else if (b - a < 16){
        return "VOTO PROIBIDO";
    } else{
        return "VOTO OBRIGATÓRIO";
    };
};
anoeleitor = parseInt(prompt("Digite o ano em que você nasceu: "));
anoatual = parseInt(prompt("Digite o ano atual: "));
console.log(`${voto(anoeleitor, anoatual)}`); */


//21