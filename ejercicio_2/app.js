
const obtenerChiste = require("./library");



// Usar la funcion obtenerChiste() la cual devuelve la promesa de traer el objeto chiste extraido
obtenerChiste().then(function (chis)
{
    console.log(chis[0].setup + chis[0].punchline );
}
).catch(function (error)
{
    console.log("error"+error.message);
});