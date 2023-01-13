import triangle from '../assets/images/bg-triangle.svg'
import rock from '../assets/images/icon-rock.svg'
import paper from '../assets/images/icon-paper.svg'
import scissor from '../assets/images/icon-scissors.svg'
import { useState } from 'react'

export default function playerTwo({ setPlayer2 }) {  
    const [selectedImagePlayer2, setSelectedImagePlayer2] = useState(null)
    const arr = ['rock', 'paper', 'scissor']
    const rollDice = () => {
        console.log('Player 2 clicked')
        const dice = Math.floor(Math.random() * arr.length)
            setPlayer2(dice)
            setSelectedImagePlayer2(arr[dice])
        }
    return (
        <>
        <div className="game">
            <img src={triangle} className="bg-img" alt="" />
            <p className='player-header'>Player 2</p>
            <div className={selectedImagePlayer2 === 'rock' ? "rock active2" : "rock"}>
                <img src={rock} alt="rock" />
            </div>
            <div className={selectedImagePlayer2  === 'paper' ? "paper active2" : "paper"}>
                <img src={paper} alt="paper" />
            </div>
            <div className={selectedImagePlayer2 === 'scissor' ? "scissor active2" : "scissor"}>
                <img src={scissor} alt="scissor" />
            </div>
            <p className='player-header'>Player 2</p>
         <div className="game-btn player2" onClick={rollDice}>
                Roll
        </div> 
        </div>
        </>
    )
}