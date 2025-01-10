const idade = prompt("Qual a sua idade?");

if(idade >= 18) {
    alert(`Voce tem ${idade} anos já pode votar!`);
} else {
    alert(`Voce tem ${idade} anos ainda não pode votar!`)
}