console.log("##### Estruturas de Repetição em JavaScript #####");
// ##### Estruturas de Repetição em JavaScript #####
/*
Loops são estruturas utilizadas para repetir um bloco de código
enquanto uma determinada condição for verdadeira ou enquanto
existirem elementos para serem percorridos.

Os principais loops do JavaScript são:
- while
- do...while
- for
- for...of
- for...in


*/

console.log("\n##### WHILE #####");
// While -> Executa o bloco de código enquanto a condição for Truthy
// A condição é verificada ANTES de cada execução

let contador = 0;

while (contador < 5) {
    console.log(`Contador: ${ contador }`);
    contador++;
}

/*
É importante alterar alguma coisa dentro do loop que eventualmente
torne a condição Falsy, caso contrário teremos um loop infinito.

while(true){
    console.log("Isso nunca vai parar!");
}


*/

console.log("\n##### DO...WHILE #####");
// Do...while -> Parecido com o while, porém o bloco é executado
// pelo menos uma vez antes da condição ser verificada.

let numero = 10;

do {
    console.log(`Número: ${ numero }`);
    numero++;
} while (numero < 5);

/*
Mesmo que numero < 5 seja Falsy desde o começo,
o código dentro do do...while será executado uma vez.
*/

console.log("\n##### FOR #####");
// For -> Muito utilizado quando sabemos quantas vezes queremos repetir
// sua estrutura possui três partes:
//
// for(inicialização; condição; incremento)
//
// 1. Inicialização -> executada uma vez no começo
// 2. Condição -> verificada antes de cada repetição
// 3. Incremento -> executado ao final de cada repetição

for (let i = 0; i < 5; i++) {
    console.log(`Valor de i: ${ i }`);
}

// Podemos usar o for para percorrer arrays através dos índices

let frutas = ["Maçã", "Banana", "Laranja", "Uva"];

for (let i = 0; i < frutas.length; i++) {
    console.log(`Fruta ${ i }: ${ frutas[i]}`);
}

console.log("\n##### BREAK #####");
// Break -> Interrompe completamente a execução do loop

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }

    console.log(i);


}

// O loop para quando i chega em 5

console.log("\n##### CONTINUE #####");
// Continue -> Interrompe apenas a iteração atual
// O loop continua normalmente na próxima repetição

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }

    console.log(i);


}

// O número 5 não será exibido,
// mas o loop continuará executando os próximos valores

console.log("\n##### FOR...OF #####");
// For...of -> Utilizado para percorrer os VALORES de estruturas iteráveis,
// como arrays, strings, Sets, etc.

let animais = ["Cachorro", "Gato", "Cavalo"];

for (let animal of animais) {
    console.log(`Animal: ${ animal }`);
}

// Diferente do for tradicional, não precisamos trabalhar diretamente
// com os índices do array.

console.log("\n##### FOR...IN #####");
// For...in -> Utilizado para percorrer as PROPRIEDADES/CHAVES de um objeto

let pessoa = {
    nome: "João",
    idade: 25,
    profissao: "Programador"
};

for (let propriedade in pessoa) {
    console.log(`${ propriedade }: ${ pessoa[propriedade]}`);
}

/*
No exemplo acima:

propriedade -> recebe "nome", "idade" e "profissao"
pessoa[propriedade] -> acessa o valor correspondente

pessoa["nome"]       -> "João"
pessoa["idade"]      -> 25
pessoa["profissao"]  -> "Programador"


*/

console.log("\n##### LOOPS ANINHADOS #####");
// Podemos colocar um loop dentro de outro loop.
// Isso é chamado de loop aninhado.

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`i = ${ i }, j = ${ j }`);
    }
}

/*
O loop interno é executado completamente para cada
repetição do loop externo.

Isso pode ser útil para trabalhar com estruturas
como matrizes e tabelas.


*/

// ##### RESUMO #####
/*
while
-> Repete enquanto uma condição for Truthy.
-> A condição é verificada antes da execução.

do...while
-> Parecido com while.
-> Executa pelo menos uma vez.

for
-> Ideal quando temos uma quantidade de repetições
   ou uma progressão bem definida.

for...of
-> Percorre os VALORES de uma estrutura iterável.

for...in
-> Percorre as CHAVES/PROPRIEDADES de um objeto.

break
-> Interrompe completamente o loop.

continue
-> Pula a iteração atual e continua o loop.


*/