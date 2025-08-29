export default function Log({turns}) {
    return (
        <ol id={"log"}>
            {turns.map(turn => (
                <li key={`turn-${turn.square.row}${turn.square.col}`}>
                    {turn.player} selected square {turn.square.row}, {turn.square.col}
                </li>
            ))}
        </ol>
    )
}