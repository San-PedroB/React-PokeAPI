import { useEffect, useState } from "react";

export function usePokemonSpecies(id) {
  const [species, setSpecies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setSpecies(null);
      setError(null);
      setLoading(false);
      return;
    }

    let cancelled = false;

    async function fetchSpecies() {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon-species/${id}/`
        );

        if (!res.ok) {
          throw new Error(`Error de red: ${res.status}`);
        }

        const json = await res.json();
        if (!cancelled) {
          setSpecies(json);
        }
      } catch (err) {
        if (!cancelled) setError(err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchSpecies();

    return () => {
      cancelled = true;
    };
  }, [id]);

  return { species, loading, error };
}
