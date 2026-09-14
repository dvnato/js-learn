console.log("##### DOM em JavaScript #####");
// ##### DOM em JavaScript #####

/*
DOM -> Document Object Model

O DOM é uma representação da página HTML em forma de uma
estrutura de objetos que o JavaScript consegue acessar e modificar.

Através do DOM podemos:
- Encontrar elementos HTML
- Alterar conteúdo
- Alterar atributos
- Alterar estilos
- Criar elementos
- Remover elementos
- Responder a eventos do usuário

*/

console.log("\n##### DOCUMENT #####");
// document -> Representa o documento HTML atual.
// É através dele que normalmente começamos a interagir com o DOM.

console.log(document);

// Podemos acessar o título da página através de document.title
console.log("Título da página:", document.title);

// ##### SELECIONANDO ELEMENTOS #####
// Existem diversas maneiras de encontrar elementos no DOM.

// getElementById -> Procura um elemento pelo seu id.

const titulo = document.getElementById("titulo");

console.log(titulo);

// getElementsByClassName -> Procura elementos através de uma classe.
// Retorna uma HTMLCollection.

const elementos = document.getElementsByClassName("item");

console.log(elementos);

// getElementsByTagName -> Procura elementos através da tag HTML.

const paragrafos = document.getElementsByTagName("p");

console.log(paragrafos);

// querySelector -> Utiliza seletores CSS.
// Retorna apenas o primeiro elemento encontrado.

const primeiroItem = document.querySelector(".item");

console.log(primeiroItem);

// querySelectorAll -> Também utiliza seletores CSS.
// Retorna todos os elementos encontrados.

const todosItens = document.querySelectorAll(".item");

console.log(todosItens);

// Podemos utilizar diferentes seletores CSS

const elementoPorId = document.querySelector("#titulo");
const elementoPorClasse = document.querySelector(".item");
const elementosPorTag = document.querySelectorAll("p");

// ##### ALTERANDO CONTEÚDO #####
// textContent -> Permite acessar ou alterar o texto de um elemento.

titulo.textContent = "Novo título";

// innerHTML -> Permite acessar ou alterar o HTML interno de um elemento.

titulo.innerHTML = "Título <strong>alterado</strong>";

/*
Cuidado com innerHTML quando inserimos conteúdo vindo
diretamente de usuários ou fontes não confiáveis.

textContent trata o conteúdo como texto.
innerHTML interpreta o conteúdo como HTML.

*/

// ##### ATRIBUTOS #####
// Podemos acessar e alterar atributos dos elementos HTML.

const link = document.querySelector("a");

console.log(link.getAttribute("href"));

link.setAttribute("href", "https://google.com");

// hasAttribute -> Verifica se o elemento possui determinado atributo.

console.log(link.hasAttribute("target"));

// removeAttribute -> Remove um atributo.

link.removeAttribute("target");

// ##### CLASSES #####
// classList permite manipular as classes de um elemento.

const caixa = document.querySelector(".caixa");

// add -> Adiciona uma classe
caixa.classList.add("ativo");

// remove -> Remove uma classe
caixa.classList.remove("ativo");

// toggle -> Adiciona se não existir e remove se já existir
caixa.classList.toggle("ativo");

// contains -> Verifica se o elemento possui determinada classe
console.log(caixa.classList.contains("ativo"));

// ##### ESTILOS #####
// Podemos alterar estilos diretamente através da propriedade style.

caixa.style.backgroundColor = "blue";
caixa.style.color = "white";
caixa.style.padding = "20px";

/*
As propriedades CSS são escritas em camelCase.

background-color -> backgroundColor
font-size        -> fontSize
margin-top       -> marginTop

*/

// ##### EVENTOS #####
// Eventos permitem que o JavaScript responda a ações.

const botao = document.querySelector("#botao");

// addEventListener -> Adiciona uma função para ser executada
// quando determinado evento acontecer.

botao.addEventListener("click", function(){
console.log("O botão foi clicado!");
});

// Podemos utilizar arrow functions

botao.addEventListener("click", () => {
console.log("Outro evento de click!");
});

// ##### EVENTO E OBJETO EVENT #####
// A função executada pelo evento pode receber um objeto
// contendo informações sobre o evento.

botao.addEventListener("click", (evento) => {
console.log(evento);
});

// Podemos descobrir qual elemento disparou o evento.

botao.addEventListener("click", (evento) => {
console.log("Elemento clicado:", evento.target);
});

// ##### EVENTOS DE FORMULÁRIO #####
// Alguns eventos são muito utilizados com formulários.

const formulario = document.querySelector("form");

formulario.addEventListener("submit", (evento) => {

// Impede o comportamento padrão do formulário.
evento.preventDefault();

console.log("Formulário enviado!");

});

// ##### INPUT #####
// Podemos acompanhar alterações feitas em um campo.

const input = document.querySelector("input");

input.addEventListener("input", (evento) => {
console.log("Valor atual:", evento.target.value);
});

// ##### CRIANDO ELEMENTOS #####
// createElement -> Cria um novo elemento HTML,
// mas ainda não o adiciona à página.

const novoParagrafo = document.createElement("p");

novoParagrafo.textContent = "Este parágrafo foi criado pelo JavaScript.";

console.log(novoParagrafo);

// append -> Adiciona um elemento como último filho.

document.body.append(novoParagrafo);

// Podemos criar outros elementos

const novaDiv = document.createElement("div");

novaDiv.textContent = "Nova div";

document.body.append(novaDiv);

// ##### REMOVENDO ELEMENTOS #####
// remove -> Remove o próprio elemento do DOM.

novaDiv.remove();

// ##### INSERINDO ELEMENTOS EM OUTROS ELEMENTOS #####

const lista = document.querySelector("ul");

const novoItem = document.createElement("li");

novoItem.textContent = "Novo item";

lista.append(novoItem);

// ##### PERCORRENDO ELEMENTOS #####
// Podemos utilizar métodos conhecidos dos arrays em alguns
// objetos retornados pelo DOM.

const itens = document.querySelectorAll("li");

itens.forEach(item => {
console.log(item.textContent);
});

// ##### RELAÇÃO ENTRE ELEMENTOS #####
// Podemos navegar pela estrutura do DOM através dos elementos.

const elemento = document.querySelector(".item");

console.log("Elemento pai:", elemento.parentElement);

console.log("Filhos:", elemento.children);

console.log("Primeiro filho:", elemento.firstElementChild);

console.log("Último filho:", elemento.lastElementChild);

// ##### EVENTO DE TECLADO #####
// Podemos detectar teclas pressionadas pelo usuário.

document.addEventListener("keydown", (evento) => {
console.log("Tecla pressionada:", evento.key);
});

// ##### EVENTO DE MOUSE #####

caixa.addEventListener("mouseenter", () => {
console.log("Mouse entrou na caixa!");
});

caixa.addEventListener("mouseleave", () => {
console.log("Mouse saiu da caixa!");
});