import "../styles/main.css";

import { useEffect, useState } from "react";

import logo from "../assets/pkm.png";
import { Card } from "../components/Card";

export function Index() {
  const [showCard, setShowCard] = useState(false);
  const [pokemon, setPokemon] = useState("");
  const [pokemonData, setPokemonData] = useState({});

  function handleChange(event) {
    setPokemon(event.target.value.toLowerCase());
  }

  useEffect(() => {
    const fetchData = async () => {
      if (!pokemon) {
        setShowCard(false);
        return;
      }

      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        );
        const data = await response.json();

        setPokemonData(data);
        setShowCard(true);
      } catch (error) {
        console.error(error);
        setShowCard(false);
      }
    };

    fetchData();
  }, [pokemon]);

  const statTranslations = {
    speed: "Velocidade",
    "special-defense": "Defesa Especial",
    "special-attack": "Ataque Especial",
    defense: "Defesa",
    attack: "Ataque",
    hp: "HP",
  };

  return (
    <main>
      <div className="container mx-auto my-32 flex flex-col items-center justify-center">
        <img
          src={logo}
          alt="logo"
          className="w-1/2 mb-32 transition-all duration-300 ease-in-out hover:scale-125 transform cursor-pointer"
        />
        <p className="mb-6">Digite o nome do Pokémon desejado:</p>
        <input
          type="text"
          className="w-1/2 p-3 mb-12 bg-white text-black text-lg border-2 border-black rounded-md outline-none placeholder:text-slate-400 placeholder:text-base"
          placeholder="Ex: Pikachu"
          onChange={handleChange}
        />

        {showCard && (
          <Card
            default={
              pokemonData.sprites["versions"]["generation-v"]["black-white"]
                .animated.front_default
            }
            shiny={
              pokemonData.sprites["versions"]["generation-v"]["black-white"]
                .animated.front_shiny
            }
            alt={pokemonData.name}
            name={pokemonData.name}
            types={pokemonData.types.map(({ type }) => type.name).join(", ")}
            games={pokemonData.game_indices
              .map(({ version }) => version.name)
              .join(", ")}
            //ExtraInfo component
            height={pokemonData.height}
            weight={pokemonData.weight}
            abilities={pokemonData.abilities
              .map(({ ability }) => ability.name)
              .join(", ")}
            stats={pokemonData.stats.map((status) => {
              const statName = status.stat.name;
              const translatedStatName = statTranslations[statName] || statName;

              return (
                <p key={status.stat.name}>
                  <span className="font-bold">
                    {translatedStatName.charAt(0).toUpperCase() +
                      translatedStatName.slice(1)}
                  </span>
                  : {status.base_stat}
                </p>
              );
            })}
          />
        )}
      </div>
    </main>
  );
}
