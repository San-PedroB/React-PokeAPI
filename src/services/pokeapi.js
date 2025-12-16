import { DEFAULT_POKEMON_LIMIT } from "../utils/constants";

const API_URL = "https://pokeapi.co/api/v2/pokemon/";

/*
 Construye un array de promesas de fetch a la PokéAPI.
 No resuelve nada todavía, solo arma las requests.
 */
function buildRequests(limit = DEFAULT_POKEMON_LIMIT) {
  const reqs = [];
  for (let i = 1; i <= limit; i++) {
    reqs.push(fetch(API_URL + i).then((r) => r.json()));
  }
  return reqs;
}

/* 
 Ejecuta todas las requests en paralelo y devuelve
 un array de objetos Pokémon (ya parseados a JSON).
 */
export async function fetchAllPokemon(limit = 151) {
  const requests = buildRequests(limit);
  const results = await Promise.all(requests);
  return results; // Array de pokemones
}
