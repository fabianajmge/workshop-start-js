// Transformar um array em string
var array = "Ned Jon Robb Bran Rickon".split(" ");

console.log(array.toString());
console.log(array.join(', '));

// Colocar um novo elemento em um array
array.push("Sansa");
console.log(array);

// Adicionar um novo elemento no ínicio
array.unshift("Arya");
console.log(array);

// Remover um elemento do array
array.pop(); // remove o último elemento -- pode ser atribuido a uma variavel
console.log(array);

array.shift(); // remove o primeiro elemento -- pode ser atribuido a uma variavel
console.log(array);

// Alterar um elemento
array[1] = "Jon Snow"; // altera a posição 1 do array
console.log(array);

// Pegar uma parte do array
var slice = array.slice(3); // pega a terceira posição até o final
console.log(slice); // imprime [ 'Bran', 'Rickon' ]

var slice = array.slice(3, 4); // pega somente a terceira posição (parametro de posição inicial e posição final.. porém excluíndo a última)
console.log(slice); // imprime [ 'Bran' ]

// Retirar e inserir novos elementos
array.splice(1, 1, "Arya", "Sansa"); // parametro de posição, a qtd de itens a serem retirados a partir da posição,
// e os demais são os itens a serem inseridos.
console.log(array); // Remove a posicao 1, e inclui Arya e Sansa a partir dessa posição

// Slice não altera o array principal, o splice altera

// Removendo elementos com o splice
array.splice(3, 1); // removendo 1 elemento a partir da posição 3
console.log(array);

// Unindo dois arrays
array = array.concat(splice, slice); // o array original não é alterado, o concat gera um novo array
console.log(array)