export default function Score({comScore, score, setNoOfPlayer}) {
    return (
        <div className="score-box">
            <div className="game-name">
                <h2>ROCK</h2>
                <h2>PAPER</h2>
                <h2>SCISSORS</h2>
            </div>
            <div className="game-score">
                <div className="scores">
                    <p className="header">Player 2</p>
                    {comScore}
                </div>
                <div className="scores">
                    <p className="header">Player 1</p>
                    {score}
                </div>
            </div>
        </div>
    )
}