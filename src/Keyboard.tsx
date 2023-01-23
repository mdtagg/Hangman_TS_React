import styles from './Keyboard.module.css'


type KeyboardProps = {
    addGuessedLetter: (letter:string) => void
    incorrectLetters: string[]
    correctLetters:string[]
}

const Keyboard = ({addGuessedLetter,incorrectLetters,correctLetters}:KeyboardProps) => {
    const letters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')
    // console.log({wordToGuess,incorrectLetters})
    return (
        <div className='keyboard-container'>
            {letters.map((letter,index) => {
                const correct = correctLetters.includes(letter)
                const incorrect = incorrectLetters.includes(letter)
                return ( 
                    <button 
                        key={index} 
                        value={letter} 
                        disabled={incorrect || correct}
                        className={
                        `${styles.btn}
                        ${incorrect ? styles.incorrect : ''}
                        ${correct ? styles.correct : ''}
                        `
                        }
                        onClick={() => addGuessedLetter(letter)
                    }
                    >
                        {letter}
                    </button>
                )
            })}
        </div>
    )
}

export default Keyboard