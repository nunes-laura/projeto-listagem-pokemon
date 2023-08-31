
const url = `https://pokeapi.co/api/v2/pokemon?offset=10&limit=10`


function convertPokemonToLi(pokemon){
    return ` <li class="pokemon">
                    <span class="number">#001</span>
                    <span class="name">${pokemon.name}</span>

                    <div class="detail">
                       
                        <ol class="types">
                            <li class="type">grass</li>
                            <li class="type">poison</li>

                        </ol>


                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" 
                    alt="${pokemon.name}">

                    </div>
                </li> `   
    
}

const pokemonList = document.getElementById('pokemonList')



fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    
    .then((pokemons) => {
        for (let index = 0; index < pokemons.length; index++) {
            const pokemon = pokemons[index];
            pokemonList.innerHTML += convertPokemonToLi(pokemon)
            
        }      
        
    })
    .catch( (error)=> console.error(error))









