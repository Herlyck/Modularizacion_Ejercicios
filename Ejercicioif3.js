const leer = require("prompt-sync")();

const MANDRAGORA = "mandragora";
const VALERIANA = "valeriana";
const BUBOTUBER = "bubotuber";
const WHOMPING_WILLOW = "whomping willow";

function main() {
    let planta = "def";
    planta = leer("ingrese planta: ").toLocaleLowerCase();
    tipoPlanta(planta);
}

main();

function tipoPlanta(planta) {
    if (planta === MANDRAGORA || planta === VALERIANA) {
        console.log(`planta presentada ${planta} es apta`);

    } else if (planta === BUBOTUBER || planta === WHOMPING_WILLOW) {
        console.log(`planta presentada ${planta} `);
        console.log("No es posible iniciar el examen con esta planta peligrosa!");
    }else{
        console.log("este tipo de planta no sera aceptada");
        
    }
}

