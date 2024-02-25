import { useState } from "react"


export default function Header({score,highScore}){
    // const [score1,setScore] = useState(score);
    // const [highScore1, setHighScore] = useState(highScore);
    return (
        <div className="header">
            <AppName />
            <Scoreboard score={score} highScore={highScore}/>
        </div>
    )
}

function AppName(){
    return(
        <div>
            <p>Strange Memory Game</p>
            <p>If you select the same image twice, you're out</p>
        </div>
    )
}

function Scoreboard({score,highScore}){
    return(
        <div>
            <p>Score: <span>{score}</span></p>
            <p>Highest Score: <span>{highScore}</span></p>
        </div>
    )
}