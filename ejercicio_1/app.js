
const obtenerChiste = require("./library");

// Codigo funcion callback
function chiste (chis)
{
    console.log(chis[0].setup + chis[0].punchline );
}

// Fin codigo

// Usar la funcion obtenerChiste(funcionCallback) en donde funcionCallback es una función que recibe el objeto chiste extraido
obtenerChiste(chiste);
