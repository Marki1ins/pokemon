export function ExtraInfo(props) {
  return (
    <>
      <p>
        <span className="font-bold">Altura: </span>
        {props.height}
      </p>
      <p>
        <span className="font-bold">Peso: </span>
        {props.weight}
      </p>
      <p>
        <span className="font-bold">Abilidade(s): </span>
        {props.abilities}
      </p>

      {props.stats}
    </>
  );
}
