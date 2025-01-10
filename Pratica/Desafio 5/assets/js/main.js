const hora = prompt("Digite que horas são");

if ( hora >= 6 && hora <= 12) {
    alert("Bom dia!")
} else if (hora >= 13 && hora <= 18 ) {
    alert("Boa tarde!")
} else {
    alert("Boa noite!");
}