console.log("##### Operações e Manipulação de Dados em JavaScript #####");
// ##### Operações e Manipulação de Dados em JavaScript #####
/* Até agora aprendemos que JavaScript possui diferentes tipos de dados. Cada tipo representa uma determinada categoria de valor e, consequentemente, podemos realizar diferentes operações sobre esses valores. */

// ##### Operações com String #####
console.log("##### Operações com String #####\n");

// Concatenando String - É a operação de juntar um texto ao outro, para isso utilizamos o operador +
let pedaco1 = "beija";
let pedaco2 = " - ";
let pedaco3 = "flor";
console.log("Cocatenando: ");

// Template Literal - Outra maneira de construir strings é utilizando template literals. O ${} permite inserir expressões dentro da string OBS. A String precisa estar entre crases
let tempo;
console.log(`O dia hoje está ${tempo}`)

// Tamanho da String -> Podemos utilizar a propriedade/atributo .lenght para saber o tamanho do texto
let texto = "Um texto qualquer"
let qtd_letras;
console.log(`O tamanho do texto é: ${qtd_letras} letras`);

// Trazendo uma letra -> Cada letra dentro de uma String possui um índice, o primeiro índice é o 0, podemos acessar utilizando [índice]
console.log("A primeira letra de texto é:");


// Slicing -> Podemos pegar um trecho de texto utilizando o método slice(inicio, final)
console.log("O trecho da primeira letra a quinta do texto é:");
// Podemos utilizar números negativos onde -1 significa a última letra
console.log("A última letra do texto é:");

// UpperCase - O método .toUpperCase() deixa tudo em maiúsculo 
console.log("Tudo maiúsculo:"); 
// LowerCase -> O método .toLowerCase() transforma todo o texto em minúsculo
console.log("Tudo em minúsculo:"); // Transforma em lowercase

// Trim -> O método .trim() Remove todos os espaços
console.log("Texto porém sem espaços:");

// Replace -> Temos dois métodos .replaceAll(charAfetado, substituto) substitui todos os chars, e o replace(charAfetado, substituto)
let censura = "aaaaaa" 
console.log("Tudo censurado:");
console.log("Apenas a primeira letra censurada:");

// Split -> .split(caracter) divide um texto em uma lista, baseado no caractere passado
console.log("O texto dividido em lista fica assim:");

// Quebra de texto -> utilizamos o \n para quebra o texto
console.log("Quebre a linha bem aquiQuebrou?"); // o operador \n quebra a linha do texto

// Includes -> .includes(trecho) verifica se um determinado trecho está na string
console.log("O trecho \"Qualquer\" está incluso no texto?:");


