const leer = require("prompt-sync")();
const NIVEL_1=3245;
const NIVEL_1_A=2312;
const NIVEL_2=5231;
const NIVEL_2_A= 124;
function main() {
    let opcion = 0;
    opcion=Number(leer("ingrese codigo: "));

    ataqueMagico(opcion);
}
main();

function ataqueMagico(opcion) {
    switch (opcion) {
        case NIVEL_1:
            console.log("Wingardium Leviosa");
            break;
        case NIVEL_1_A:
            console.log("Expelliarmus");
            break;
        case NIVEL_2:
            console.log("Expecto Patronum");
            break;
        case NIVEL_2_A:
            console.log("Avadara kedavra");
            break;
        default:
            console.log("El codigo es incorrecto");
            break;
    }
}
