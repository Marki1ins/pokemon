import { useState } from 'react';

import { ExtraInfo } from './ExtraInfo';

export function Card(props) {
  const [isShiny, setIsShiny] = useState(true);
  const [isClicked, setIsClicked] = useState(false);

  function toggleShiny() {
    setIsShiny(!isShiny);
  }

  function more() {
    setIsClicked(!isClicked);
  }

  return (
    <div className="container w-1/2 bg-white rounded-lg border-2 border-black p-4 flex flex-col gap-2">
      <img
        src={isShiny ? props.default : props.shiny}
        alt={props.alt}
        className="self-center w-44 mb-12"
      />

      <h1>
        <span className="font-bold">Nome: </span>
        {props.name}
      </h1>
      <p>
        <span className="font-bold">Tipo(s): </span>
        {props.types}
      </p>
      <p>
        <span className="font-bold">Jogos: </span>
        {props.games}
      </p>

      {isClicked == false ? (
        ""
      ) : (
        <ExtraInfo
          height={props.height}
          weight={props.weight}
          abilities={props.abilities}
          stats={props.stats}
        />
      )}

      <div className="flex flex-row justify-between items-center mb-4 mt-8">
        <button
          className={
            isShiny
              ? "bg-yellow-300 border-black border text-black text-sm py-2 px-10 rounded-md hover:bg-yellow-400"
              : "bg-blue-400 border-black border text-black text-sm py-2 px-10 rounded-md hover:bg-blue-500"
          }
          onClick={toggleShiny}
        >
          {isShiny ? "Shiny" : "Padrão"}
        </button>

        {isClicked ? (
          <button
            className="self-end mt-6 text-sm text-blue-800 hover:text-blue-400"
            onClick={more}
          >
            minimizar
          </button>
        ) : (
          <button
            className="self-end mt-6 text-sm text-blue-800 hover:text-blue-400"
            onClick={more}
          >
            saiba mais...
          </button>
        )}
      </div>
    </div>
  );
}
