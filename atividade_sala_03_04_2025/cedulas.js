let valor = 348;
console.log("Sacando R$",valor);

let notas100 = Math.floor(valor / 100);
valor = valor % 100;
console.log(notas100, " X R$ 100,00");

let notas50 = Math.floor(valor / 50);
valor = valor % 50;
console.log(notas50, " X R$ 50,00");

let notas20 = Math.floor(valor / 20);
valor = valor % 20;
console.log(notas20, " X R$ 20,00");

let notas10 = Math.floor(valor / 10);
valor = valor % 10;
console.log(notas10, " X R$ 10,00");

let notas5 = Math.floor(valor / 5);
valor = valor % 5;
console.log(notas5, " X R$ 5,00");

let notas2 = Math.floor(valor / 2);
valor = valor % 2;
console.log(notas2, " X R$ 2,00");

console.log(valor, " X R$ 1,00");
