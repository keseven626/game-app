import './App.css'
import { useState } from 'react'
import Score from './components/Score'
import TwoPlayers from './components/TwoPlayers'
import PlayerOne from './components/PlayerOne'

export default function App() {
  const [PlayerOneScore, setPlayerOneScore] = useState(0)
  const [NoOfPlayer, setNoOfPlayer] = useState([])
  const [PlayerTwoScore, setPlayerTwoScore] = useState(0)
  const [player1, setPlayer1] = useState(null)
  const [player2, setPlayer2] = useState(null)
  const arr = ['rock', 'paper', 'scissor']

const startGame =()=>{
    if (player1 === null){
      alert("Please select a image")
    }
    const com = Math.floor(Math.random() * arr.length)
    const comImage = arr[com]
    if ((arr[player1] === 'rock' && comImage === 'paper') ||
        (arr[player1] === 'scissor' && comImage === 'rock') ||
        (arr[player1] === 'paper' && comImage === 'scissor')
    ){
      alert('AI wins')
      setPlayerTwoScore((prev)=>prev + 1)
    }
    if ((comImage === 'rock' && arr[player1] === 'paper') ||
        (comImage === 'scissor' && arr[player1] === 'rock') ||
        (comImage === 'paper' && arr[player1] === 'scissor')
    ){
      alert('You wins')
      setPlayerOneScore((prev)=>prev + 1)
    }
    if(arr[player1] === comImage){
      alert('It a Tie')
    }
    console.log(arr[player1], comImage, com)
}
const checkGame =()=>{
    if (arr[player1] === 'rock' && arr[player2] === 'paper'){
      setPlayer1(null)
      setPlayer2(null)
      setPlayerTwoScore((prev)=>prev + 1)
      alert('Player 2 wins')
    }
    if (arr[player1] === 'paper' && arr[player2]=== 'scissor'){
      setPlayer1(null)
      setPlayer2(null)
      setPlayerTwoScore((prev)=>prev + 1)
      alert('Player 2 wins')
    }
    if (arr[player1] === 'scissor' && arr[player2] === 'rock'){
      setPlayer1(null)
      setPlayer2(null)
      setPlayerTwoScore((prev)=>prev + 1)
      alert('Player 2 wins')
    }
    if (arr[player2] === 'rock' && arr[player1] === 'paper'){
    setPlayer1(null)
    setPlayer2(null)
    setPlayerOneScore((prev)=>prev + 1)
    alert('Player 1 wins')
    }
    if (arr[player2] === 'scissor' && arr[player1] === 'rock') {
      setPlayerOneScore((prev)=>prev + 1)
      alert('Player 1 wins')
    setPlayer1(null)
    setPlayer2(null)
    }
    if (arr[player2] === 'paper' && arr[player1] === 'scissor'){
      setPlayerOneScore((prev)=>prev + 1)
      alert('Player 1 wins')
    setPlayer1(null)
    setPlayer2(null)
    }
    if (player1 === null){
      alert('Waiting for player 1' )
    }
    if (player2 === null){
      alert('Waiting for player 2' )
    }
    if (arr[player2] === arr[player1]){
      alert('It a Tie')
      setPlayer1(null)
      setPlayer2(null)
    }
    console.log(arr[player1], arr[player2])
}
const reset =()=>{
  setPlayerOneScore(0); 
  setPlayerTwoScore(0); 
  setPlayer1(null); 
  setPlayer2(null)
}
  return(
    <div className="app">
      <div className="container">
        <div className="game-content">
          <Score comScore={PlayerTwoScore} score={PlayerOneScore} />
          <div className='select'>
            <div className="player-btn" onClick={()=>{setNoOfPlayer(['you','Guest']);reset()}}>
              2 Player
            </div>
            <div className="player-btn" onClick={()=>{setNoOfPlayer(['you']);reset()}}>
              1 Player
            </div>
          </div>
          {NoOfPlayer.length === 2 ?
            <TwoPlayers setPlayer1={setPlayer1} 
                setPlayer2={setPlayer2} 
                checkGame={checkGame}
                reset={reset}
                players={NoOfPlayer}
            />
          :
            <PlayerOne setPlayer1={setPlayer1} start={startGame} players={NoOfPlayer}/>
          }
        </div>
      </div>
    </div>
  )
}