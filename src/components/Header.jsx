import { useState } from "react"


export default function Header({score,highScore}){
    // const [score1,setScore] = useState(score);
    // const [highScore1, setHighScore] = useState(highScore);
    return (
        <>
            <AppName />
            <Scoreboard score={score} highScore={highScore}/>
        </>
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
            <p>Score: {score}</p>
            <p>Highest Score: {highScore}</p>
        </div>
    )
}