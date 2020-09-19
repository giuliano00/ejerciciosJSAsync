
const obtenerPokemon = require("./library");

// Usar la funcion obtenerChiste(nombrePokemon) la cual recibe como string un nombre de pokemon y devuelve la promesa de traer el objeto pokemon extraido
obtenerPokemon("charizard").then(function poke (pokemon)
{
    //console.log(pokemon);
    console.log("poke name "+pokemon.name);

    pokemon.abilities.forEach(abil => {
        console.log(abil.ability.name)
        
        //console.log(pokemon.stats);

    });

}).catch(function(error){
    console.log("error"+error.message);
});