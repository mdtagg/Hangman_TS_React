
type HangmanWordProps = {
    wordToGuess:string
    guessedLetters:string[]
    reveal:boolean
}

const HangmanWord = ({wordToGuess,guessedLetters,reveal}:HangmanWordProps) => {
    return (
        <div className='word-container'>
            {wordToGuess.split('').map(letter => (
                <span className='underline'>
                    <span className='letter'
                    style={{ 
                        visibility: guessedLetters.includes(letter) || reveal ? 
                        'visible' 
                        : 
                        'hidden',
                        color: !guessedLetters.includes(letter) && reveal ? 'red' : 'black'
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