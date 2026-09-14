console.log("##### Operações e Manipulação de Dados em JavaScript #####");
// ##### Operações e Manipulação de Dados em JavaScript #####
/* Até agora aprendemos que JavaScript possui diferentes tipos de dados. Cada tipo representa uma determinada categoria de valor e, consequentemente, podemos realizar diferentes operações sobre esses valores. */

// ##### Operações com Number #####
console.log("##### Operações com Number #####\n");

// Operadores Aritméticos
let valor1 = 5;
let valor2 = 7;
// Para as 4 operações básicas temos os seguintes sinais: adição +, subtração -, multiplicação *, divisão /
console.log(`Operações com seguintes valores: valor1 = ${valor1}, valor2 = ${valor2}:`);
console.log("Soma:");
console.log("Diferença:");
console.log("Produto:");
console.log("Quociente:");
// Também temos outras duas operações: Potenciação **, Módulo %
console.log(`${valor1} elevado á ${valor2}:`);
console.log(`Módulo de ${valor1} sobre ${valor2}:`);
//Operação de incremento e decremento -> podemos utilizar o sinal ++ ou -- para incrementar um valor, colocar antes ou depois o sinal importa
console.log(`${valor1} mais 1 é:`);
console.log(`${valor1} menos 1 é:`);

// ##### Utilizando O Objeto Math #####
console.log("\n##### Utilizando O Objeto Math #####")
/* No JS para operações mais complexas podemos utilizar o Objeto global Math, ele possui diversas ferramentas que podem ser muito úteis.
Arrendondar- temos 3 métodos de arrendondamento*/
let arrendondar = 4.5;
let absoluto = -5;
console.log("Arrendondar para o mais próximo:"); //Math.round()
console.log("Arrendondar para baixo:"); //Math.floor()
console.log("Arrendondar para cima:"); //Math.ceil()
console.log("Removendo a parte decimal:"); //Math.trunc()
console.log("Removendo a parte negativa do absoluto:")

// Raiz quadrada -> Math.sqrt() permite que realizemos a raiz quadrada do número
console.log("A raiz quadrada de 25 é:");

// Máximo e mínimo -> o métodos .min e .max, trazem o mínimo ou máximo de uma lista de números
let num1;
let num2;
console.log(`Entre ${num1} e ${num2} o maior é:`);

console.log("\n##### Números Aleátorios #####");
// Número aleátorio -> o método .random() retorna um número entra 0.0 á 0.999..
console.log("Gerando um número aleátorio:");
// Para utilizar a função e obter um número digamos entre 0 a 9 podemos multiplicar o resultado do método por 10
console.log("Gerando um número aleátorio entre 0 a 9:");
// Fórmula para gerar número entre um mínimo e um máximo -> (Math.random() * (Maximo - Minimo)) + Minimo)
console.log("Número aleátorio entre 4 e 9");

console.log("\n##### Conversões e Verificações #####");
// O objeto Number tem métodos que nós permitem verificar e converter outros dados para o tipo number
// Converter para bumber -> basta usar o próprio objeto Number(texto)
let converta = "120";
console.log("O número convertido é:");
// Verificar se é inteiro -> .isInteger verificar se um número é inteiro
let verifica = 2;
console.log("Verifique se o número é inteiro:");
// Verifica se o número é NaN -> .isNaN()
console.log("O número é infinito:");
// Verifica se um número estoura a capacidade máxima de um inteiro -> isSafeInteger()

// Utilizando Number com dinheiro
console.log("0.1 + 0.2 =", 0.1 + 0.2);
// Não utilize decimais direto para o dinheiro