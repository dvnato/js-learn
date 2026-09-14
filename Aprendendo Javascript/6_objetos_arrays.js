console.log("##### Métodos de Iteração de Arrays em JavaScript #####");
// ##### Métodos de Iteração de Arrays em JavaScript #####
/*
O JavaScript possui diversos métodos para percorrer e
transformar arrays.

Alguns dos principais são:
- forEach
- map
- reduce
- filter


*/

console.log("\n##### FOREACH #####");
// forEach -> Executa uma função para cada elemento do array

let frutas = ["Maçã", "Banana", "Laranja"];

frutas.forEach(function(fruta){
console.log(`Fruta: ${fruta}`);
});

// Também podemos utilizar arrow functions

frutas.forEach(fruta => {
console.log(`Eu gosto de ${fruta}`);
});

console.log("\n##### MAP #####");
// map -> Percorre o array e cria um NOVO array
// com os valores retornados pela função

let numeros = [1, 2, 3, 4, 5];

let dobrados = numeros.map(numero => numero * 2);

console.log(dobrados);
// [2, 4, 6, 8, 10]

/*
Diferente do forEach, o map retorna um novo array.

Podemos pensar no map como:
"Para cada elemento, transforme ele em outra coisa."


*/

console.log("\n##### REDUCE #####");
// reduce -> Percorre o array e reduz todos os seus elementos
// a um único valor.

let valores = [10, 20, 30];

let soma = valores.reduce((acumulador, valor) => {
return acumulador + valor;
}, 0);

console.log(soma);
// 60

/*
reduce pode ser utilizado para diversas situações,
mas seu uso mais simples é acumular valores.
*/

console.log("\n##### FILTER #####");
// filter -> Percorre o array e cria um NOVO array
// contendo apenas os elementos que atendem a uma condição.
//
// A função precisa retornar:
// true -> mantém o elemento
// false -> remove o elemento

let idades = [12, 17, 18, 25, 30, 15];

let maioresDeIdade = idades.filter(idade => idade >= 18);

console.log(maioresDeIdade);
// [18, 25, 30]

// Podemos utilizar filter com objetos

let pessoas = [
{ nome: "Ana", idade: 17 },
{ nome: "Carlos", idade: 22 },
{ nome: "Maria", idade: 30 },
{ nome: "João", idade: 15 }
];

let adultos = pessoas.filter(pessoa => pessoa.idade >= 18);

console.log(adultos);

/*
O filter é muito útil quando queremos "filtrar" informações
de um array sem modificar o array original.

Array original:
[12, 17, 18, 25, 30, 15]

Após o filter:
[18, 25, 30]


*/

console.log("\n##### DIFERENÇA ENTRE MAP E FILTER #####");
/*
MAP
-> Percorre todos os elementos.
-> Transforma os elementos.
-> Retorna um novo array com a mesma quantidade de elementos.

FILTER
-> Percorre todos os elementos.
-> Verifica uma condição.
-> Retorna um novo array que pode ter menos elementos.

Exemplo:

[1, 2, 3, 4, 5]

map(numero => numero * 2)
-> [2, 4, 6, 8, 10]

filter(numero => numero > 3)
-> [4, 5]


*/

//##### RESUMO #####"
/*
forEach
-> Executa uma função para cada elemento.
-> Não cria um novo array.

map
-> Transforma os elementos.
-> Cria um novo array.

reduce
-> Reduz os elementos a um único valor.

filter
-> Seleciona elementos com base em uma condição.
-> Cria um novo array.


*/