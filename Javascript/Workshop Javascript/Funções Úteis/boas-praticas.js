// 1. Evitar colocar variaves no escopo global (Ela fica disponível para todos os scripts)
var variavelGlobal = "";

// O ideal é colocar sempre dentro de um escopo
(function() {
	var escopoLocal = "";
})();

// 2. Na hora de declarar variaveis, sempre deixá - la no topo -- fica mais claro
(function() {
	escopoLocal = "foo";
	console.log(escopoLocal); 
	var escopoLocal; // Isso funciona sem problema pq o js pega essa declaração e move pra cima, pra antes da atribuição
})();

// 3. Várias variaveis, fica muito repetitivo declarar um por um
(function() {
	var escopoLocal;
	var escopoGlobal;
	var foo;

	escopoLocal = "foo";

	console.log(escopoLocal); 
})();

// O ideal seria declarar assim -- separando as declarações por vírgula
(function() {
	var escopoLocal, escopoGlobal, foo;
	escopoLocal = "foo";

	console.log(escopoLocal); 
})();

// 4. Usar sempre string com aspas duplas, ao invés de usar aspas simples.. Motivo: Pq a maioria das linguagens de programação consideram 
// aspas duplas; para manter um padrão entre as linguagens; alguns compiladores não entendem aspas simples como string (json)

var obj = {
	foo: "bar" // padronizado e sempre compatível
}

// 5. Declaração de Arrays e Objetos
// Se o objeto / array tiver poucas propriedades, o ideal é que esteja todas em uma linha

// poucas propriedades
var obj = { foo: "bar" }
var array = [1];

// muitas propriedades -- lembrar de remover os espaços que ficam após as vírgulas
var obj = { 
	foo: "bar",
	bar: "foo",
	foobar: "oi"
};

var array = [
	1,
	2,
	3
];

// 6. Separar os espaços do código por assunto


