export default function Log({ turnsArray }) {
  return (
    <ol id="log">
      {turnsArray.map((activePlayer) => (
        <li>{activePlayer}</li>
      ))}
    </ol>
  );
}
