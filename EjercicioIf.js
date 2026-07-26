const leer = require("prompt-sync")();
const EDAD_MINIMA = 11;
const EDAD_COMPRA = 18;

function main() {
    let edad = 0;
    let edadFaltante=0;

    ({ edad, edadFaltante } = permisoCompra(edad, edadFaltante));


}

main();

function permisoCompra(edad, edadFaltante) {
    edad = Number(leer("ingrese edad: "));
    if (edad > EDAD_MINIMA) {
        console.log("Busquemos una varita! Alguna te puede estar esperando desde hace tiempo!");
    } else {
        edadFaltante = EDAD_MINIMA - edad;
        console.log(`volve en ${edadFaltante} años`);
        console.log("Solo a partir de los 14 años pueden comprar en esta tienda!");

    }
    return { edad, edadFaltante };
}
