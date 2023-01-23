
import React from "react"

type HangmanWordProps = {
    wordToGuess:string
    guessedLetters:string[]
}

const HangmanWord = ({wordToGuess,guessedLetters}:HangmanWordProps) => {
    
    return (
        <div className='word-container'>
            {wordToGuess.split('').map(letter => (
                <span className='underline'>
                    <span 
                    className='letter'
                    style={{ 
                        visibility: guessedLetters.includes(letter) ? 'visible' : 'hidden'
                     }}
                    >
                        {letter}
                    </span>
                </span>
                
                
            ))}
        </div>
    )
}

export default HangmanWord