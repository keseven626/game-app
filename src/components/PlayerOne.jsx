import triangle from '../assets/images/bg-triangle.svg'
import rock from '../assets/images/icon-rock.svg'
import paper from '../assets/images/icon-paper.svg'
import scissor from '../assets/images/icon-scissors.svg'
import { useState } from 'react'

export default function PlayerOne({ setPlayer1, start, players }) {  
    const [selectedImage, setSelectedImage] = useState(null)
    const arr = ['rock', 'paper', 'scissor']
    const rollDice = () => {
        if (players.length === 2){
            console.log('Player 1 clicked')
            const dice = Math.floor(Math.random() * arr.length)
                setPlayer1(dice)
                setSelectedImage(arr[dice])
        }else{
            start()
        }
    }
    return (
        <div className="game">
            <img src={triangle} className="bg-img" alt="" />
            <p className='player-header'>Player 1</p>
            <div className={selectedImage === 'rock' ? "rock active" : "rock"}
                onClick={()=>{setPlayer1(0);setSelectedImage('rock')}}>
                <img src={rock} alt="rock" />
            </div>
            <div className={selectedImage  === 'paper' ? "paper active" : "paper"}onClick={()=>{setPlayer1(1);setSelectedImage('paper')}}>
                <img src={paper} alt="paper" />
            </div>
            <div className={selectedImage === 'scissor' ? "scissor active" : "scissor"} onClick={()=>{setPlayer1(2);setSelectedImage('scissor')}}>
                <img src={scissor} alt="scissor" />
            </div>
            <div className="game-btn player1" onClick={rollDice}>
                Roll
            </div>
        </div>
    )
}