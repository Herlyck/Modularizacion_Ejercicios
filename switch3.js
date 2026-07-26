const leer = require("prompt-sync")();
const NIVEL_1=3245;
const NIVEL_1_A=2312;
const NIVEL_2=5231;
const NIVEL_2_A= 124;
function main() {
    let opcion = 0;
    opcion=Number(leer("ingrese codigo: "));

    switch (opcion) {
        case NIVEL_1:
            console.log("nivel 1");
            
            break;
        case NIVEL_1_A:
            console.log("nivel 1a");
            
            break;
        case NIVEL_2:
            console.log("nivel 2");
            
            break;
        case NIVEL_2_A:
            console.log("nivel 2a");
            
            break;
        default:
            console.log("error de numero");
            
            break;
    }
}
main();