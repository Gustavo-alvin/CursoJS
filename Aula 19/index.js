/*
Primitivos (imutáveis) - String, Number, Boolean,
 Unddefined, Null (BigInt, Symbol) - Valores copiados

 Referencia (mutáveis) - array, object, function - Pasado por referencia
*/
const a = {
    nome: 'Gustavo',
    sobrenome: 'Alves'
}
 const b = {...a};

 a.nome = 'João';
 console.log(b);
 console.log(a)





// let a = [1, 2, 3];
// let b = [...a];
// let c = b;
// console.log(a, b);

// a.push(4);
// console.log(a, b);

// b.pop();
// console.log(a, b);

// a.push('Gustavo')
// console.log(a, c);

