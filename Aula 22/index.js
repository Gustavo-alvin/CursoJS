/**
 * Operadores Lógicos
 * && -> AND -> Todas as expressões precisam ser verdadeiras para retornar true
 * || -> OR -> OU
 * ! -> NOT -> NÂO
 */

// const expresaoAnd = true && true && true && true;
// const expresapOr = false || false || false || false;

const usuario = 'Luiz'; // form usuario digitou
const senha = '123456' // form usuario digitou

const vaiLogar = usuario === 'Luiz' && senha ==='12345';

console.log(vaiLogar);