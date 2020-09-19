
const obtenerPersonaFake = require("./library");

// Usar la funcion obtenerPersonaFake() la cual devuelve la promesa de traer el objeto persona extraido
obtenerPersonaFake().then(function persona (per)
{
    console.log(per.results);
    per.results.forEach(persona => {
        console.log("sexo: " + persona.gender);
        console.log("name: "+ persona.name.first+" "+persona.name.last);
    });
}).catch(function (error)
{
    console.log("error"+error.message);
});
