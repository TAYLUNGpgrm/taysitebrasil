function hs() {
    let cor = document.getElementById("cor").value;

    switch(cor) {
        case "vermelho":
            document.body.style.backgroundColor = "red";
        break;

        case "azul":
            document.body.style.backgroundColor = "blue";
        break;

        case "amarelo":
            document.body.style.backgroundColor = "yellow";
        break;

        case "laranja":
            document.body.style.backgroundColor = "orange";
        break;
        
        case "branco":
            document.body.style.backgroundColor = "white";
        break;
        
        case "marrom":
            document.body.style.backgroundColor = "brown";
        break;

        case "ouro":
            document.body.style.backgroundColor = "gold";
        break;

        default:
            document.getElementById("test").innerHTML = "Você não digitou um valor válido, tente novamente!";
    }
}

let data = new Date();

let ano = data.getFullYear();
console.log(ano);

console.log("Hoje é: " + data.getFullYear());

let mes = data.getMonth();

/*const mesesDoAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
let mesEscrito = mesesDoAno[data.getMonth()];
console.log("No mês de: " +mesEscrito);

let diaMês = data.getDate();
console.log(diaMês);

let diaSemanal = data.getDay();
const dia = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];
let diaEscrito = diaSemanal[data.getDay()];
console.log(diaEscrito); 

let segundos = data.getSeconds();
console.log(segundos)

*/
let dataBR = data.toLocaleString('pt-BR', { dateStyle: 'short' });
console.log(dataBR);

d = newDate();
diaMes = d.getDate();
mes = d.getMonth() + 1;
ano = d.getFullYear();

let dataPadraoBR = diaMes + "/" + mes + "/" + ano;
console.log(dataPadraoBR);