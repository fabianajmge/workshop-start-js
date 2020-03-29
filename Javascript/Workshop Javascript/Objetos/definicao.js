var obj = { 
	nome: "Jon", 
	sobrenome: "Snow", 
	idade: 16, 
	apresentar: function() {
		console.log("Olá, eu sou " + this.nome + " " + this.sobrenome + ".");
	}
};

var obj2 = { 
	nome: "Jon", 
	sobrenome: "Snow", 
	idade: 16, 
	apresentar: apresentar
};

function apresentar() {
	console.log("Olá, eu sou " + this.nome + " " + this.sobrenome + ".");
}

console.log(obj.nome);
obj.apresentar();
obj2.apresentar();