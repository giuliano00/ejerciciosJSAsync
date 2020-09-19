
const obtenerPokemon = require("./library");

// Codigo funcion callback

function poke (pokemon)
{
    //console.log(pokemon);
    console.log("poke name "+pokemon.name);

    pokemon.abilities.forEach(abil => {
        console.log(abil.ability.name)
        
        console.log(pokemon.stats);

    });

}

// Fin codigo

// Usar la funcion obtenerPokemon(pokemon,funcionCallback) en donde:
// - nombrePokemon es un string con el nombre del pokemon
// - funcionCallback es una función que recibe el objeto con los datos del pokemon extraido

obtenerPokemon("mewtwo",poke);
obtenerPokemon("charizard",poke);