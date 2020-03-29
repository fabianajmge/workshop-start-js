function dizerOi(nome) {
	console.log("Olá " + nome);
}

// dizerOi("Jon");

var dizerOla = function(nome) {
	console.log("Olá " + nome);
}

// dizerOla("Jon");

var dizerTchau = new Function("nome", "console.log('Tchau ' + nome);");

dizerTchau("Jon");