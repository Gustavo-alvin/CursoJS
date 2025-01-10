const produto =  prompt("Digite o valor do produto");
const desconto10 = (produto*10) / 100;
const desconto5 = (produto*5) / 100;

if (produto >= 100){
    alert(produto -desconto10 );
} else {
    alert(produto - desconto5);
}