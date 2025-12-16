import PokemonDetailCard from "../PokemonDetailCard/PokemonDetailCard";
import { usePokemonSpecies } from "../../hooks/usePokemonSpecies";
import { extractDescription } from "../../utils/extractDescription";
import "./PokemonModal.css";

export default function PokemonModal({ isOpen, pokemon, onClose, onNext, onPrev, pokemonList }) {
    const pokemonId = pokemon?.id ?? null;

    const {
        species,
        loading: speciesLoading,
        error: speciesError,
    } = usePokemonSpecies(pokemonId);

    const description = extractDescription(species);

    if (!isOpen || !pokemon) return null;

    const handleOverlayClick = () => onClose?.();
    const handleContentClick = (e) => e.stopPropagation();

    // Determinar si hay pokemon anterior/siguiente
    const currentIndex = pokemonList?.findIndex(p => p.id === pokemon.id) ?? -1;
    const hasPrev = currentIndex > 0;
    const hasNext = currentIndex < (pokemonList?.length ?? 0) - 1;

    return (
        <div className="pokemon-modal" onClick={handleOverlayClick}>
            <div className="pokemon-modal__card" onClick={handleContentClick} role="dialog" aria-modal="true">
                <button type="button" className="pokemon-modal__close" onClick={onClose}>X</button>

                {/* Botón Anterior */}
                {hasPrev && (
                    <button
                        type="button"
                        className="pokemon-modal__nav-button pokemon-modal__nav-button--prev"
                        onClick={onPrev}
                        aria-label="Pokémon anterior"
                    >
                        ‹
                    </button>
                )}

                {/* Botón Siguiente */}
                {hasNext && (
                    <button
                        type="button"
                        className="pokemon-modal__nav-button pokemon-modal__nav-button--next"
                        onClick={onNext}
                        aria-label="Pokémon siguiente"
                    >
                        ›
                    </button>
                )}

                <PokemonDetailCard
                    data={pokemon}
                    description={description}
                    speciesLoading={speciesLoading}
                    speciesError={speciesError}
                />
            </div>
        </div>
    );
}
