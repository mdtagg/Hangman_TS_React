
import React from "react"

type HangmanWordProps = {
    wordToGuess:string
}

const HangmanWord = ({wordToGuess}:HangmanWordProps) => {
    return (
        <div className='word-container'>
            {wordToGuess.split('').map(letter => (
                <span className='underline'>
                    <span className='letter'>
                        {letter}
                    </span>
                </span>
                
                
            ))}
        </div>
    )
}

export default HangmanWord