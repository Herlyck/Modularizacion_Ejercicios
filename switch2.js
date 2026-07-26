const leer = require("prompt-sync")();
const FENIX = "Fenix - ¡Excelente elección! Las varitas con núcleo de fénix son poderosas y leales.";
const UNICORNIO = "Las varitas con núcleo de unicornio son conocidas por su pureza y fuerza"
const DRAGON = "¡Cuidado! Las varitas con núcleo de dragón son poderosas pero pueden ser temperamentales."
const NUCLEO_INVALIDO = "No reconocemos ese tipo de núcleo. Por favor, ingrese un núcleo válido.";
const FIN_MENSAJE="***Fin de mensaje***"

function main() {
    let nucleoVarita = 0;
    let resultado= 0;
    nucleoVarita = Number(leer("ingrese numero 0 al 2: "));
    resultado=idNucleoVarita(nucleoVarita);
    console.log(resultado);
    console.log(FIN_MENSAJE);
}
main();

function idNucleoVarita(nucleoVarita) {
    switch (nucleoVarita) {
        case 0:
            return FENIX;
            break;
        case 1:
            return UNICORNIO;
            break;
        case 2:
            return DRAGON;
            break;
        default:
            return NUCLEO_INVALIDO;
            break;
    }
    
}
