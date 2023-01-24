import styles from './Keyboard.module.css'


type KeyboardProps = {
    addGuessedLetter: (letter:string) => void
    incorrectLetters: string[]
    correctLetters:string[]
    reveal:boolean
}

const Keyboard = ({addGuessedLetter,incorrectLetters,correctLetters,reveal}:KeyboardProps) => {
    const letters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')
    
    return (
        <div className='keyboard-container'>
            {letters.map((letter,index) => {
                const correct = correctLetters.includes(letter)
                const incorrect = incorrectLetters.includes(letter)
                return ( 
                    <button 
                        key={index} 
                        value={letter} 
                        disabled={incorrect || correct || reveal}
                        className={
                            `${styles.btn}
                            ${incorrect ? styles.incorrect : ''}
                            ${correct ? styles.correct : ''}`
                        }
                        onClick={() => addGuessedLetter(letter)}
                    >
                        {letter}
                    </button>
                )
            })}
        </div>
    )
}

export default Keyboard