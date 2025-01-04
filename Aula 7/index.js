// Não podemos criar constantes com palavras reservadas
// Constantes precisam ter nomes significativos
// Não pode começar o nome de uma constante com um número
// Não pode conter espacços ou traços
// Utilizamos camelCase
// case-sensitive
// Não podemos modificar o valor de uma constante
// Não UTILIZE Var, UTILIZE .

// String = Texto | Number = Número
const primeiroNumero =5;
const segundoNumero =10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;

console.log(typeof (primeiroNumero + segundoNumero));