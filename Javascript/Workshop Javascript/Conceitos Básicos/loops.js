// for, for in, while, do while

// while

var x = 0;

/*while(x < 10) {
	console.log("x é igual a " + x);
	x = x + 1;
}*/

// do while

/*do {
	console.log("x é igual a " + x);
	x = x + 1;
}
while(x <= 10)*/

// for

for (var y = 0; y < 10; y = y + 1) {
	console.log(y);
}

// for in

var obj = {
	nome: 'Jon',
	sobrenome: 'Snow'
}

for(var prop in obj) {
	console.log(prop);
	console.log(obj[prop]);
}