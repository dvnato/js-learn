console.log("##### Funções em Javascript #####");
// ##### Funções em Javascript #####
/*  Funções são trechos de código que atribuimos nomes atravês de bindings(váriaveis), ao chamar esse bindings a função é executada, passamos valores para função atráves dos paramêtros */
// 1# Modo de definir uma função -> Utilizando a palavra function

// Return sem uma expressão após gera um undefined
function indefinido() {
    return;
}

// Paramêtros com valor padrão
function somar(num1, num2){
    console.log("O resultado da soma é:", num1 + num2)
}

// Mais valores do que paramêtros na função -> podemos utilizar o objeto global arguments 
function parametros(param1, param2){
    console.log(`A função receber dois paramêtros: param1 -> ${param1}, param2 -> ${param2}`)
}

parametros(1, 2, 3); // Print o valor 3 sem colocar um novo paramêtro

// Rest Parameter -> É uma maneira moderna de capturar uma quantidade infinita de argumentos
function multiplicar(...numeros){
    let resultado = 1;
    for(numero of numeros){
        resultado *= numero;
    }
    return resultado;
}

console.log("Resultado da multiplicação de 5 * 6 * 7 é:",);

// Spread Operator -> No Rest nós juntamos vários valores em uma estrutura. E se quisermos espalhar uma estrutura em vários valores

const numeros = [10, 20, 30];
console.log("Array com spread");
console.log("Array sem spread");

console.log("Multiplicando valores com spread:");
console.log("Multiplicando valores sem spread:");

// Escopo de função -> Escopo determina onde um binding pode ser acessado.
// Global
let global;
function printaGlobal(){
    console.log("Estou tentando printar uma variável global:");
}
// Escopo de função
function escopoLocal(){
    let local = "local"
}
console.log("Estou tentando printar uma variável local:");
// OBS. A função var só respeita o escopo de função e não o de bloco

// 2# Forma de declarar funções -> nessa forma declaramos um binding para paontar para uma função
// Essa forma é afetada pelo hoisting e não possui arguments, o qual falaremos mais para frente
const funcao2 = function() {
    console.log("2# Forma de declarar uma função")
}


// 3# Arrow Function - Adicionada em 2015
// OBS. Também é afetada pelo hoisting e não possui arguments
const quadrado1 = (num) => {return num * num};
const quadrado2 = num => num * num; // Faz o mesmo, quando temos apenas um paramêtro e um retorno, podemos fazer isto
const funcao3 = () => console.log("Olá");

// Hoisting -> é o jeito que o js eleva a declaração de variáveis e funções
hoisting();
const hoisting = function() {
    console.log("Este é o hoisting")
}

// Funções são objetos de primeira classe
function executaFuncao(funcao){
    console.log("Irei executar a função que você me passou ->")
    funcao();
}
// Função dentro de Função -> Podemos utilizar uma função que possuir outras funções internas
const calculadora = function(a, b) {
    function somar(x, y){
        console.log("A soma destes valores é:", x + y);
    };
    function multiplicar(t,u){
        console.log("O produto destes valores é:", t * u);
    };
    function dividir(r,q){
        console.log("O quociente destes valores é:", r / q);
    };
    function subtrair(i,o){
        console.log("A diferença destes valores é:", i - o);
    };
    somar(a,b);
    multiplicar(a,b);
    dividir(a,b);
    subtrair(a,b);
};


// ##### CLOSURE #####
// Closure -> Uma função interna consegue acessar variáveis
// do escopo onde ela foi criada, mesmo depois que a função externa terminou.

function contador(){

let numero = 0;

return function(){
    numero++;
    console.log(`Contador: ${numero}`);
};

}

const meuContador = contador();

meuContador();
meuContador(); 
meuContador(); 

/*
A função retornada continua tendo acesso à variável numero,
mesmo depois que contador() terminou sua execução.
*/

// ##### FUNÇÃO IMEDIATAMENTE INVOCADA #####
// IIFE -> Immediately Invoked Function Expression
// -> É uma função que é criada e executada imediatamente.

(function(){ console.log("Esta função foi executada imediatamente!"); })();

// ##### RECURSÃO #####
// Recursão -> Uma função chama a si mesma.
// É necessário ter uma condição de parada.

function contagemRegressiva(numero){

if(numero <= 0){
    console.log("Fim!");
    return;
}

console.log(numero);
contagemRegressiva(numero - 1);

}

contagemRegressiva(5);