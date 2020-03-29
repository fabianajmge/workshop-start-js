function dizerOi(nome) {
	console.log("Oi, " + nome);
	console.log(this);
}

dizerOi("Fabi");

dizerOi.call({}, "Fabi");

dizerOi.apply({}, ["Fabi"]);