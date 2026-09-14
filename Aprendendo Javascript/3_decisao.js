console.log("##### Estruturas de Decisão em JavaScript #####");
// ##### Estruturas de Decisão em JavaScript #####
/*  o JavaScript possui três estruturas condicionais principais para controlar o fluxo do código com base em condições de tomada de decisão. */
console.log("##### IF, ELSE, ELSE-IF #####");
// If -> O comando If recebe uma condição, se ela for Truthy o bloco principal após ele é executado, se for falsy não é
// Else -> Caso a condição do if for Falsy o fluxo vai para o else
let theTruthy;
if(theTruthy){
    console.log(`O valor ${theTruthy} é Truthy`);
}else{
    console.log(`O valor ${theTruthy} é Falsy`);
}
/* Else If -> Em algumas situações precisamos avaliar mais de uma condição, o comando else if nos permite, adicionar mais condições antes de finalmente chegar no else */
let idade;
// Crie categorias para idade: Criança, Adolecente, Jovem-adulto, Adulto, Idoso

console.log("\n##### SWITCH #####");
// Switch é uma solução mais limpa do que o else-if para quando temos muitas condições
let fruit;
switch(fruta){
    case "Maçã":
        console.log("É uma fruta que representa a Apple");
        break
    case "Banana":
        console.log("Existe um modelo de IA do google que usa o nome desta fruta");
        break
    default:
        console.log("Não tenho muito para falar desta fruta");
}

console.log("\n##### Short-circuit evaluation #####");
// Os operadores && e || possuem um comportamento interressante que pode ser explorado
// && -> só é executado se a primeira parte for verdadeira (truthy)
let logado;
logado && console.log("Bem-vindo de volta");

// || -> só é executado se a primeira parte for falsa (falsy)
let cadastro;
let perfil = cadastro || "Anônimo";
/* Caso queira colocar o valor padrão apenas nos casos do valor ser undefined ou null, pode usar o operador ?? */




