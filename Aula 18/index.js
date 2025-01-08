function criarPessoa(nome, sobrenome, idade) {
  return { nome, sobrenome, idade };
}

const pessoa1 = criarPessoa("Gustavo", "Alves", 18);
const pessoa2 = criarPessoa("Junior", "Silva", 23);
const pessoa3 = criarPessoa("Luana", "monteira", 27);

console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome);

/*const pessoa1 = {
  nome: "Gustavo",
  sobrenome: "Alves",
  idade: 18,

  fala() {
    conssole.log(`A minha idade atual é ${this.idade} `);
  },
  incrementaIdade() {
    this.idade++;
  },
};
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();

console.log(pessoa1.nome);*/
