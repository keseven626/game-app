import Buttons from "./Buttons";
import PlayerOne from "./PlayerOne";
import PlayerTwo from "./PlayerTwo";

export default function TwoPlayers({setPlayer1, setPlayer2, checkGame, reset, players}) {
    return(
    <>
        <div className="game-container">
            <PlayerOne setPlayer1={setPlayer1} players={players}/>
            <PlayerTwo setPlayer2={setPlayer2} />
        </div>
        <Buttons checkGame={checkGame} reset={reset}/>
    </>
    )
}