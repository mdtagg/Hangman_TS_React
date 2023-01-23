
type KeyboardProps = {
    addGuessedLetter: (letter:string) => void
}

const Keyboard = ({addGuessedLetter}:KeyboardProps) => {
    const letters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')

    return (
        <div className='keyboard-container'>
            {letters.map((letter,index) => {
                return ( 
                    <button 
                    key={index} 
                    value={letter} 
                    className='letter-btn' 
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