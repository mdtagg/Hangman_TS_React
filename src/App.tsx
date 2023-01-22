import React from "react";
import HangmanGallows from './HangmanGallows'
import HangmanWord from './HangmanWord'
import Keyboard from './Keyboard'
import './App.css'

const App = () => {
    return (
        <div className='hangman-container'>
            <HangmanGallows/>
            <HangmanWord/>
            <Keyboard/>
        </div>
    )
}

export default App