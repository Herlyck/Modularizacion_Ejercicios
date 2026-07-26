const leer = require("prompt-sync")();
const POCION_1 = "es extremadamente compleja y peligrosa.";
const POCION_2 = "es compleja pero útil en la red de transportación.";
const POCION_3 = "es complicada pero muy útil para transformaciones temporales.";
const POCION_4 = "no tenemos informacion sobre esa pocion en nuestros registros";

function main() {
    let opcion = "def";
    opcion = leer("ingrese pocion: ");
    nombrePocion(opcion);
}
main();

function nombrePocion(opcion) {
    switch (opcion) {
        case "felix felicis":
            console.log(POCION_1);
            break;
        case "polvo de flu":
            console.log(POCION_2);
            break;
        case "pocion multijugos":
            console.log(POCION_3);
            break;
        default:
            console.log(POCION_4);
            break;
    }
}
