const leer = require("prompt-sync")();
const HECHIZO = "wingardium leviosa";
function main() {
    let opcion = "def";

    
    opcion = hechizo(opcion);
}
main();
/**
 * ingresa el nombre del hechizo
 * @param {string} opcion nombre del hechizo
 * @returns 
 */
function hechizo(opcion) {
    for (let i = 3; i > 0; i--) {
        opcion = leer("ingrese hechizo: ");
        if (opcion === HECHIZO) {
            console.log("felicitaciones");
            i = 0;
        } else {
            console.log("te equivocaste");
        }
    }
    return opcion;
}
