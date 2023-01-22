
import React from "react"

const Keyboard = () => {
    const letters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')
    return (
        <div className='keyboard-container'>
            {letters.map((letter,index) => {
                return ( 
                    <button key={index} className='letter-btn'>{letter}</button>
                )
            })}
        </div>
    )
}

export default Keyboard