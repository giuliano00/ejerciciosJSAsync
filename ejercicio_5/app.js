
const obtenerPersonaFake = require("./library");

// Codigo funcion callback

function persona (per)
{
    console.log(per.results);
    per.results.forEach(persona => {
        console.log("sexo: " + persona.gender);
        console.log("name: "+ persona.name.first+" "+persona.name.last);
    });
}

// Fin codigo

// Usar la funcion obtenerPersonaFake(funcionCallback) en donde funcionCallback es una función que recibe el objeto persona extraido
obtenerPersonaFake(persona);
