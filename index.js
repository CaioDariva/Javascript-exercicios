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


/* // 16 correção 
const lista = []
do {
    let num = parseInt(prompt('Número: '));
    const exist = lista.find(elem => elem == num);
    
    //modo com includes
    //lista.includes(num) ==false ? lista.push(num) : console.log('Esse número já existe.')

    // modo com IndexOf, se não tem o elemento ele retorna -1
    //lista.indexOf(num) == -1 ? lista.push(num) : console.log('Esse número já existe.')

    (exist == undefined) ? lista.push(num) : console.log('Esse número já existe.')

//  Operação ternária feita acima e abaixo o modo normal, ternária é só se existe apenas uma linha no if e else
//      if(exist == undefined) {
//         lista.push(num)
//     }else{
//         console.log('Esse número já existe.')
//     };

    do {
        var resp = prompt('Deseja continuar? [S/N] ').toUpperCase()[0];
    } while (resp != 'S' && resp != 'N');
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
/* area = (a,b) => (a * b); //código com boas práticas (arrow function)
tamanho1 = parseInt(prompt("Digite o valor em metros de um lado do terreno: "));
tamanho2 = parseInt(prompt("Digite o valor em metros do outro lado do terreno: "));
console.log(`A área do terreno é ${(area(tamanho1, tamanho2)).toFixed(2)} metros quadrados.`); */


//20
/* voto = (a, b) => {
    if ((b - a == 16) || (b - a == 17) || (b - a > 70)){
        return "VOTO OPCIONAL";
    } else if (b - a < 16){
        return "VOTO PROIBIDO";
    } else{
        return "VOTO OBRIGATÓRIO";
    };
};
const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();
anoeleitor = parseInt(prompt("Digite o ano em que você nasceu: "));
console.log(`${voto(anoeleitor, anoAtual)}`); */


//21
/* do {
    x = Math.floor(Math.random() * 11);
    y = +prompt("Tente adivinhar um número entre 0 e 10 que o computador escolheu: ")
    if (y == x){
        console.log("Você acertou");
    } else{
        console.log(`Você errou, o número era ${x}.`)
    };
    resp = prompt("Quer jogar novamente? S ou N").toUpperCase()
} while (resp == "S") */


//22
/* let valor = +prompt("Digite um valor entre 10 e 600 reais para sacar: ")
while (valor < 10 || valor > 600){
    console.log("Saque não permitido");
    valor = +prompt("Digite um valor entre R$10 e R$600: ");
};

cem = Math.trunc(valor / 100);
valor = valor - (cem * 100);

cinq = Math.trunc(valor / 50);
valor = valor - (cinq * 50);

dez = Math.trunc(valor / 10);
valor = valor - (dez * 10);

cinco = Math.trunc(valor / 5);
valor = valor - (cinco * 5);

um = valor;

console.log(`Quantidade notas de R$100,00 = ${cem}.
Quantidade notas de R$50,00 = ${cinq}.
Quantidade notas de R$10,00 = ${dez}.
Quantidade notas de R$5,00 = ${cinco}.
Quantidade notas de R$1,00 = ${um}.`) */


//23
const rodadas = +prompt("Quantas rodadas você quer jogar de Jokenpô?");

pontosPessoa = 0
pontosPc = 0
empates = 0

partidas = 0
do {
    const jogadaPessoa = prompt("Pedra, papel ou tesoura: ").toUpperCase();

    const jogadas = ["PEDRA", "PAPEL", "TESOURA"];
    const random = Math.floor(Math.random() * jogadas.length);
    const jogadaPc = jogadas[random];

    if (jogadaPessoa == "TESOURA" && jogadaPc == "TESOURA"){
        empates = ++empates
    } else if (jogadaPessoa == "TESOURA" && jogadaPc == "PEDRA"){
        pontosPc = ++pontosPc
    } else if (jogadaPessoa == "TESOURA" && jogadaPc == "PAPEL"){
        pontosPessoa = ++pontosPessoa
    } else if (jogadaPessoa == "PEDRA" && jogadaPc == "PEDRA"){
        empates = ++empates
    } else if (jogadaPessoa == "PEDRA" && jogadaPc == "PAPEL"){
        pontosPc = ++pontosPc
    } else if (jogadaPessoa == "PEDRA" && jogadaPc == "TESOURA"){
        pontosPessoa = ++pontosPessoa
    } else if (jogadaPessoa == "PAPEL" && jogadaPc == "PAPEL"){
        empates = ++empates
    } else if (jogadaPessoa == "PAPEL" && jogadaPc == "TESOURA"){
        pontosPc = ++pontosPc
    } else if (jogadaPessoa == "PAPEL" && jogadaPc == "PEDRA"){
        pontosPessoa = ++pontosPessoa
    };
    partidas = ++partidas;
    console.log(`PC jogou ${jogadaPc}`);
} while (partidas != rodadas)

console.log(`Você ganhou ${pontosPessoa} vezes.`)
console.log(`O computador ganhou ${pontosPc} vezes.`)
console.log(`Aconteceu ${empates} empates.`)


//24 correção

/* const rodadas = +prompt('Quantas rodadas você quer jogar? ');
const qtJogadores = +prompt('Digite a quantidade de jogadores: ');
const vencedores = [];

for(let c = 0; c <rodadas; c++){
    let jogos = [];
    for(let j = 0; j < qtJogadores; j++){
        let jogo = {
            nome: `Jogador ${j+1}`,
            numero : Math.ceil(Math.random() * 6)
        };
        jogos.push(jogo);
        
        jogos.sort( (a,b) => b.numero - a.numero)
    }
    console.log();
    console.log(`${c + 1}ª Rodada!`);
    for(let i in jogos){
        console.log(`${+i + 1}º Lugar: ${jogos[i].nome} tirou ${jogos[i].numero}`);
        let entries = Object.entries(jogos[i])
        if (i == 0){
            let vencedor = entries[0][1]
            vencedores.push(vencedor)
        }
    }
}

function count(arr){
    return arr.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {})
};

const arrayVencedores = Object.entries(count(vencedores));
console.log(`${arrayVencedores}`)
for (let v in arrayVencedores){
    if (v == 0){
        console.log();
        console.log(`O grande vencedor foi o ${arrayVencedores[0][0]} ganhando ${arrayVencedores[0][1]} vezes`)
    }
} */