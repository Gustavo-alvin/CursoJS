const nome = "Gustavo";
const sobrenome = "Alves da Silva";
const idade = "18"
const peso = "75";
const alturaEmM = "1.84";
let anoNascimento;
let indiceMassaCorporal;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2025 - idade;

//1º Metodo
console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'Kg.');
//2º Metodo
console.log(`tem ${alturaEmM} de altura e seu imc é ${indiceMassaCorporal}`);
//3º Metodo
console.log(nome + ' nasceu em ' + anoNascimento + '.');
