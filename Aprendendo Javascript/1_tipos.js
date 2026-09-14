/* ##### Comentários ###### 
Os comentários são trechos de texto que não serão executados no programa. Isso irá ajudar a documentar nosso código
*/

// Este é um comentário de uma linha
/*
Este é um comentário de várias linhas
*/

// console.log() -> Será o nosso comando principal ao longo deste curso, com ele podemos ver o resultado do que iremos executar.
console.log("#### TIPOS DE DADOS ####\n");

/* ##### Tipos de dados #####*/
/* Antes de trabalharmos com variáveis, precisamos entender que uma variável não armazena simplesmente "uma coisa qualquer". O valor associado a ela possui um tipo de dado, que determina que tipo de informação aquele valor representa e quais operações podemos realizar com ele.

Em JavaScript, existem oito tipos fundamentais de dados. Eles são divididos em dois grupos:
Tipos primitivos: string, number, bigint, boolean, undefined, symbol e null.
Objetos: object.
Utilizando o operador unário typeof podemos verificar o tipo de cada dado*/

// String -> Qualquer tipo de texto
console.log("Tipo:");

// Number -> Valores entre -9.007.199.254.740.991 a 9.007.199.254.740.991
console.log("Tipo:");
//Temos o valor NaN que derivado de Number, ele é obtido quando uma operação matemática não faz sentido
console.log("Tipo:");
// O valor Infinity também é derivado de number e aparece em operações que estouram o limite de armazenamento do JS e em divisões por zero.
console.log("Tipo:");

// BigInt -> Não tem um limite, o limite seria o máximo da sua RAM, podemos dizer que um número é BigInt colocando um "n" logo após ou usando a função BigInt().
console.log("Tipo:");

// Boolean -> aceita dois valores true e false.
console.log("Tipo:");

// Undefined -> É quando criamos um binding que não aponta para nenhum valor.
console.log("Tipo:");

// Symbol -> Cria uma valor único que não pode ser repetido em nenhum outro lugar, utilizamos o método Symbol("opcional") para isto.
console.log("Tipo:");

// Null - É um valor colocado de forma proposital para indicar ausência de valor.
console.log("Tipo:");

// Object -> representa estruturas capazes de agrupar diferentes valores. Utilizamos {} onde os valores são separados por virgula.
console.log("Tipo:");


console.log("\n#### VARIÁVEIS ####\n");
/*
##### Variáveis em Javascript #####
Variáveis são nomes que associamos a valores para podermos armazená-los e acessá-los durante a execução do programa. Em JavaScript, essa associação entre um nome e um valor é chamada de binding. Podemos utilizar três comandos para definir um binding:

var -> É a forma tradicional de declarar variáveis em JavaScript. Atualmente, não é recomendada para código moderno, principalmente porque possui escopo de função em vez de escopo de bloco. Isso pode gerar comportamentos inesperados quando utilizamos var dentro de blocos de código.

let -> É uma forma moderna de declarar variáveis. Possui escopo de bloco e permite que o binding seja posteriormente associado a outro valor.

const -> É uma forma de declarar um binding que não pode ser reatribuído depois de sua inicialização.
*/

// Utilizando o var

// Utilizando o let

// Utilizando o const

// Também podemos atribuir várias variáveis utilizando vírgula let v1 = 1, v2 = 2

