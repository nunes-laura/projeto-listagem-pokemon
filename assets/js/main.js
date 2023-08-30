
const offset = 0
const limit = 10
const url = 'https://pokeapi.co/api/v2/pokemon?offset=${offest{&limit=${limit}'


fetch(url).then(function (response){
    console.log(response);
})