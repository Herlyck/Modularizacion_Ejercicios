const leer = require("prompt-sync")();

const MENSAJE_BIENVENIDA_GRYFFINDOR = "Bienvenido, valiente Gryffindor. Tu coraje es tu mayor fuerza. Enfrenta cada desafío con valentía, como lo haría Godric Gryffindor."
const MENSAJE_BIENVENIDA_HUFFLEPUFF = "Bienvenido, valiente Huflepuff. Tu coraje es tu mayor fuerza. Enfrenta cada desafío con valentía, como lo haría Godric Gryffindor."
const MENSAJE_BIENVENIDA_RAVENCLAW = "Bienvenido, valiente Ravenclaw. Tu coraje es tu mayor fuerza. Enfrenta cada desafío con valentía, como lo haría Godric Gryffindor."
const MENSAJE_BIENVENIDA_SLYTHERIN = "Bienvenido, valiente Slytherin. Tu coraje es tu mayor fuerza. Enfrenta cada desafío con valentía, como lo haría Godric Gryffindor."

const GRYFFINDOR = 90;
const HUFFLEPUFF = 70;
const RAVENCLAW = 50;
const SLYTHERIN = 49;

function main() {
    let notaEstudiante = 0;
    console.log("resultado del examen: ");
    notaEstudiante = Number(leer("ingrese nota: "));
    notas(notaEstudiante);

}
main();
/**
 * Ingresar nota con valor numerico
 * @param {Number} notaEstudiante 
 */
function notas(notaEstudiante) {
    if (notaEstudiante >= GRYFFINDOR) {
        console.log(MENSAJE_BIENVENIDA_GRYFFINDOR);
    } else if (notaEstudiante < GRYFFINDOR && notaEstudiante >= HUFFLEPUFF) {
        console.log(MENSAJE_BIENVENIDA_HUFFLEPUFF);
    } else if (notaEstudiante < HUFFLEPUFF && notaEstudiante >= RAVENCLAW) {
        console.log(MENSAJE_BIENVENIDA_RAVENCLAW);
    } else if (notaEstudiante < RAVENCLAW) {
        console.log(MENSAJE_BIENVENIDA_SLYTHERIN);
    }
}