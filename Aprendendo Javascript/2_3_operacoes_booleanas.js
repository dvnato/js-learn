console.log("##### Operações e Manipulação de Dados em JavaScript #####");
// ##### Operações e Manipulação de Dados em JavaScript #####
/* Até agora aprendemos que JavaScript possui diferentes tipos de dados. Cada tipo representa uma determinada categoria de valor e, consequentemente, podemos realizar diferentes operações sobre esses valores. */

// ##### Operações com Boolean #####
console.log("##### Operações com Boolean #####\n");
/* Os valores booleanos podem ser obtidos atráves de expressões que comparam algo, para realizarmos essas comparações, utilizamos alguns simbolos:
Maior que >
Menor que <
Maior ou igual >=
Menor ou igual <=
Estritamente Igual ===
Estritamente Diferente !==
*/
let valor1 = 5;
let valor2 = 3;
console.log(`${valor1} é maior que ${valor2}:`);
console.log(`${valor1} é menor que ${valor2}:`);
console.log(`${valor1} é igual de ${valor2}:`);
console.log(`${valor1} é diferente de ${valor2}:`);
// Operador Ternário -> resultado = condicao ? seVerdadeiro : seFalso-
let idade;
let maiorIdade;
console.log(`Você é ${maiorIdade}`);
// ##### Operadores Lógicos #####
console.log("\n##### Operadores lógicos #####");
/* Utilzamos operadores que geram valores booleanos, mas existe também uma outra classe de operações que são realizadas somente com valores true e false:

AND &&: Ele gera true somente quando os dois valores são true
true && true = true
true && false = false
false && true = false
false && false = false

OR ||: Gera true quando pelo menos um dos valores for true
true || true = true
true || false = true
false || true = true
false || false = false

NOT !: Operador únario que inverte o valor 
!true = false
!false = true
*/
// No contexto abaixo true significa que foi feito e false que não foi feito
let arrumar_cama = true;
let varrer_casa = false;
let castigo; // O castigo é verdadeiro se arrumar a casa for falso
console.log("Você só pode sair para festa se varrer a casa e arrumar a cama, Resultado:");
console.log("Você só pode sair para festa se varrer a casa ou arrumar a cama, Resultado:");
console.log("Você está de castigo se NÃO arrumar a cama, Resultado:");

// ##### Truthy e Falsy #####
console.log("\n##### Truthy e Falsy #####");
/* Em JavaScript, nem todo valor é boolean, mas alguns valores são considerados falsy quando avaliados em um contexto booleano. */
// Valores Falsy: 0, -0, 0n, "", null, undefined, NaN
// Valores Truthy: Todos os outros valores
let booleano = -0 ? "Verdadeiro" : "Falso";
console.log("O valor de 0 é:");
// Se você quiser verificar o valor de algo, basta utiliza o objeto Boolean(valor) e ele irá retornar o valor
console.log("O valor de NaN é:");

// Igualdade Estrita -> utilizar == leva em consideração o valor Truthy e Falsy, porém utilizar === não.
console.log("1 é igual a true?:");
console.log("1 é estritamente igual a true?:");