import { useState,useCallback } from "react";
import HangmanGallows from './HangmanGallows'
import HangmanWord from './HangmanWord'
import Keyboard from './Keyboard'
import wordList from './wordList.json'
import './App.css'

const App = () => {

    const getWord = () => {
        return wordList[Math.floor(Math.random() * wordList.length)].toUpperCase()
    }

    const [ wordToGuess, setWordToGuess ] = useState(getWord)
    const [ guessedLetters,setGuessedLetters ] = useState<string[]>([])
    // console.log(wordToGuess)

    const addGuessedLetter = (letter:string) => {
        if(guessedLetters.includes(letter)) return
        setGuessedLetters([...guessedLetters,letter])
    }

    const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))
    const correctLetters = guessedLetters.filter(letter => wordToGuess.includes(letter))

    const winGame = wordToGuess.split('').every(letter => guessedLetters.includes(letter))
    console.log({wordToGuess,guessedLetters})

    return (
        <div className='hangman-container'>
            <div 
                className='end-message'
                style={{visibility: 
                    incorrectLetters.length === 6 || winGame ? 
                    'visible' :
                    'hidden'
                }}
            >
                {incorrectLetters.length === 6 ? 'You Lose, Try Again?': 'You Win!, Another Round?' }
            </div>
            <HangmanGallows numberOfGuesses={incorrectLetters.length}/>
            <HangmanWord 
                wordToGuess={wordToGuess}
                guessedLetters={guessedLetters}
            />
            <Keyboard 
                addGuessedLetter={addGuessedLetter}
                incorrectLetters={incorrectLetters}
                correctLetters={correctLetters}
            />
        </div>
    )
}

export default App