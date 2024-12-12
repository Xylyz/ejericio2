
let entrada = prompt("Valor del boleto");

let edad = prompt("Dgite su edad");

let descuento = 0;

if (edad >=5 || edad >=60){
    descuento = 250
}
else if (edad >=5 && edad <= 12) {
    descuento = 150;
}
else if (edad >=13 && edad <=17) {
    descuento = 100
}
else if (edad >=18 && edad <=60) {
    descuento = 0.00;
}

let precioFinal = precioEntrada * (1 - descuento)

console.log("Precio final: " + precioFinal);