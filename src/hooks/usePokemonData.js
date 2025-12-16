import { useEffect, useState } from "react";
import { fetchAllPokemon } from "../services/pokeapi";
import { DEFAULT_POKEMON_LIMIT } from "../utils/constants";

export function usePokemonData(limit = DEFAULT_POKEMON_LIMIT) {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    async function load() {
      setLoading(true);
      const startTime = Date.now();
      try {
        const data = await fetchAllPokemon(limit);
        const elapsed = Date.now() - startTime;
        const minLoadingTime = 2000;
        if (elapsed < minLoadingTime) {
          await new Promise((resolve) => setTimeout(resolve, minLoadingTime - elapsed));
        }
        if (isMounted) {
          setPokemon(data);
        }
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }

    load();
    return () => { isMounted = false; };
  }, [limit]);

  return { pokemon, loading, error };
}
