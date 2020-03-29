var x = 34.00;
var x = 456e5; // 45600000
var x = 123e-6; // 0.000123 o cálculo seria a qtd de número após o ponto, e por ser após o ponto é um número negativo 123.10^6

// O JavaScript só tem capacidade de armazenar com precisão números até 15 dígitos, após isso acontece overflow ou underflow se for em
// casas decimais.

var z = 999999999999999;
console.log(z);

var z = 9999999999999999;
console.log(z); // imprime 10000000000000000

var z = 0.9999999999999999;
console.log(z); // 16 é o máximo aqui

var z = 0.99999999999999999;
console.log(z);  // imprime 1

// Solução1 - Gravar em hexadecimal

var a = 0x100; // convertido na calculadora programador, depois do x é  o resultado da calculadora
console.log(a); // imprime 256

var a = 0xFFF; // convertido na calculadora programador, depois do x é  o resultado da calculadora
console.log(a); // imprime 4095

// Solução2 - Sitema Octal, esta maneira não é 100% propagada em compiladores js

var b = 07777 // sempre começar com 0, quando se começa com 0 ele entende que é um octal (calculo pode ser feito na cal programador)
console.log(b); // imprime 4095

// Se eu quiser saber a base dele
console.log(b.toString(16)); //  em hexadecimal -- imprime fff
console.log(b.toString(8)); // em octal -- imprime 7777
console.log(b.toString(2)); // em binário -- imprime 111111111111
console.log(b.toString()); // continua imprimindo 4095, pois o toString converte automaticamente

// Adicionar anotação exponencial
console.log(x.toExponential()); // imprime 1.23e-4 (em um formato mais otimizado)
console.log(x.toExponential(4)); //parametro para dizer quantas casas decimais quero -- imprime 1.2300e-4
console.log(x.toExponential(1)); // imprime 1.2e-4, pois o valor é arrendondado
console.log(x.toExponential(0)); // imprime 1e-4, o valor tbm é arredondado -- n é muito efetivo

// Setar a qtd de casas decimais
console.log(x.toFixed(2)); // imprime 0.00 -- o valor é arredondado
console.log((3.357).toFixed(2));  // imprime 3.36

// Setar a qtd de algarismos (a diferença para o toFixed é que no toFixed é contado apenas a qtd de casas decimais, já nesse vai contar tudo)
console.log((3.357).toPrecision(1)); // imprime 3
console.log((3.357).toPrecision(2)); // imprime 3.4 -- o valor é arredondado