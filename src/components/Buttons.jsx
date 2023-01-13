export default function Buttons({reset,checkGame}) {
    return(
        <div className="all-btn">
            <div className="game-btn" onClick={reset}>
                    Reset
            </div>
            <div className="game-btn" onClick={checkGame}>
                    check
            </div>
        </div>
    )
}