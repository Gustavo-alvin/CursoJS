/**
 * && -> false && true -> false
 * || -> true || false -> vai retornar o valor verdadeiro
 * FALSY:
 * false
 * 0
 * '' "" ``
 * null / indefined
 * NaN
 */

const a = null || "valor padrão";
console.log(a); // "valor padrão"
// Explicação: null é falsy, então o "curto-circuito" ocorre no "valor padrão".

const b = 0 || false || "texto";
console.log(b); // "texto"
// Explicação: 0 e false são falsy, então ele retorna "texto".


// const a = "valor" && 0;
// console.log(a); // 0
// // Explicação: "valor" é truthy, mas 0 é falsy, então o curto-circuito ocorre no 0.

// const b = true && "JavaScript";
// console.log(b); // "JavaScript"
// Explicação: Ambos são truthy, então retorna o último valor.











