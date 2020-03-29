var s = "The winter is coming. It's really coming!";
console.log(s);

// saber a qtd de caracteres
console.log(s.length);

// saber em que posição a palavra está (só mostra a primeira vez que a palavra aparecer)
console.log(s.indexOf("coming"));

// saber a última vez em que a palavra aparece
console.log(s.lastIndexOf("coming"));

// pegar um pedaço da string (o segundo parametro é ate a posição final)
console.log(s.slice(4, 10));

// pegar um pedaço da string - contando de trás para frente
console.log(s.slice(4, -8));

// outro jeito de pegar um pedaço da string (o segundo parametro é a quantidade de caracteres que quero que seja retornada)
console.log(s.substr(4, 6));

// substituir uma palavra
console.log(s.replace("winter", "summer"));

// transformar em maiusculo
console.log(s.toUpperCase());

// transformar em minusculo
console.log(s.toLowerCase());

// concatenar
console.log(s.concat("!", "!"));

// converter uma string em um array (o parametro é o separador)
var s = "Ned,Jon,Robb,Sansa,Bran,Arya,Rickon";
console.log(s.split(","));
console.log(s.concat("!", "!"));