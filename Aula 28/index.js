function zeroEsquerda (num) {
    return num >= 10 ? num: `0${num}`;
}

function formataData(data) {
    const dia =  zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth() + 1);
    const ano = zeroEsquerda(data.getFullYear());
    const hora = zeroEsquerda( data.getHours());
    const min = zeroEsquerda(data.getMinutes());
    const seg = zeroEsquerda(data.getSeconds());
   
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);

// const tresHora = 60*60*3*1000
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHora + umDia); // 01/01/1970 Timestamp unix ou epoca unix
//const data = new Date(2019, 3); // a, m, d, M, s, ms

// const data = new Date(1570473826636);
// console.log('Dia', data.getDate());
// console.log('Mes', data.getMonth() + 1); // mes começa do zero
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('Seg', data.getSeconds());
// console.log('ms', data.getMilliseconds());
// console.log('Dia semana', data.getDay()); // 0 - domingo, 6 - sabado
// console.log(data.toString());
// console.log(Date.now());
