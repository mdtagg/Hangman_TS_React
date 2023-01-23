import React, { useState } from "react";
import HangmanGallows from './HangmanGallows'
import HangmanWord from './HangmanWord'
import Keyboard from './Keyboard'
import wordList from './wordList.json'
import './App.css'

const App = () => {
    function getWord() {
        return wordList[Math.floor(Math.random() * wordList.length)].toUpperCase()
    }

    const [ wordToGuess, setWordToGuess ] = useState(getWord)

    return (
        <div className='hangman-container'>
            <HangmanGallows/>
            <HangmanWord wordToGuess={wordToGuess}/>
            <Keyboard/>
        </div>
    )
}

export default App