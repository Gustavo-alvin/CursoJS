var cliente = "Gustavo";
var cliente = "Alves";

console.log(cliente);

// Ao utilizar podemos redeclarar as variaveis ao contrario do LET

// TIPOS DE DADOS PRIMITIVOS

//String, Number, Undefind, Null, Boolean, Symbol

const nome  = "Gustavo"; //string
const nome1 = "Gustavo"; //string
const nome2 = "Gustavo"; //string
const num1  = 10; //number
const num2  = 10.52; //number

let nomeAluno; // Undefind -> não aponta pra local nennhum na memoria
const sobrenome = null; // Nulo -> não aponta pra local nennhum na memoria

const aprovado = false; //boolean = true or false

console.log(typeof num2, num2);


let g = 2;
const b = g;
console.log(g,b);
g = 3;
console.log(g,b);
