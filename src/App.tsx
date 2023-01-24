import { useState,useCallback,useEffect } from "react";
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

    const reveal = incorrectLetters.length === 6

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
                {incorrectLetters.length === 6 ? 'You Lose, Press Refresh To Try Again': 'You Win! Press Refresh To Try Again'  }
            </div>
            <HangmanGallows numberOfGuesses={incorrectLetters.length}/>
            <HangmanWord 
                reveal={reveal}
                wordToGuess={wordToGuess}
                guessedLetters={guessedLetters}
            />
            <Keyboard 
                reveal={reveal}
                addGuessedLetter={addGuessedLetter}
                incorrectLetters={incorrectLetters}
                correctLetters={correctLetters}
            />
        </div>
    )
}

export default App