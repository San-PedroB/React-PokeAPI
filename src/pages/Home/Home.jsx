import { useMemo, useState } from "react";
import { usePokemonData } from "../../hooks/usePokemonData";
import TypeFilter from "../../components/TypeFilter/TypeFilter";
import PokemonList from "../../components/PokemonList/PokemonList";
import Loading from "../../components/LoadingSpinner/LoadingSpinner";
import PokemonModal from "../../components/PokemonModal/PokemonModal";
import { DEFAULT_POKEMON_LIMIT } from "../../utils/constants";
import { filterByType } from "../../utils/filters";


export default function Home() {
    const { pokemon, loading } = usePokemonData(DEFAULT_POKEMON_LIMIT);
    const [selectedType, setSelectedType] = useState(null);
    const [selectedPokemon, setSelectedPokemon] = useState(null);

    const filtered = useMemo(
        () => filterByType(pokemon, selectedType),
        [pokemon, selectedType]
    );

    const handleSelectPokemon = (pokemon) => {
        setSelectedPokemon(pokemon);
    };

    const handleCloseModal = () => {
        setSelectedPokemon(null);
    };

    const handleNextPokemon = () => {
        if (!selectedPokemon) return;
        const currentIndex = filtered.findIndex(p => p.id === selectedPokemon.id);
        if (currentIndex < filtered.length - 1) {
            setSelectedPokemon(filtered[currentIndex + 1]);
        }
    };

    const handlePrevPokemon = () => {
        if (!selectedPokemon) return;
        const currentIndex = filtered.findIndex(p => p.id === selectedPokemon.id);
        if (currentIndex > 0) {
            setSelectedPokemon(filtered[currentIndex - 1]);
        }
    };

    if (loading) return <Loading />;

    return (
        <>
            <header>
                <TypeFilter
                    selectedType={selectedType}
                    onChange={setSelectedType}
                    onClear={() => setSelectedType(null)}
                />
            </header>

            <main>
                <div className="all">
                    <PokemonList
                        data={filtered}
                        onSelectPokemon={handleSelectPokemon}
                    />
                </div>
            </main>

            <PokemonModal
                isOpen={!!selectedPokemon}
                pokemon={selectedPokemon}
                onClose={handleCloseModal}
                onNext={handleNextPokemon}
                onPrev={handlePrevPokemon}
                pokemonList={filtered}
            />
        </>
    );
}
