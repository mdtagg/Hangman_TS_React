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

    const addGuessedLetter = (letter:string) => {
        if(guessedLetters.includes(letter)) return
        setGuessedLetters([...guessedLetters,letter])
        console.log(guessedLetters)
    }

    return (
        <div className='hangman-container'>
            <HangmanGallows/>
            <HangmanWord 
                wordToGuess={wordToGuess}
                guessedLetters={guessedLetters}
            />
            <Keyboard addGuessedLetter={addGuessedLetter}/>
        </div>
    )
}

export default App