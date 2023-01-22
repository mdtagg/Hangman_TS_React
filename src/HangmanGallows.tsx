import React from 'react'

const HangmanGallows = () => {
    return (
        <div className='gallows-container'>
            <div style={{
                height:'20px',
                width:'150px',
                backgroundColor:'black',
                top:'20px',
                left:'170px',
                position:'relative'
            }}
            >
            </div>
            <div style={{
                height:'30px',
                width:'20px',
                backgroundColor:'black',
                position:'relative',
                top:'40px',
                left:'150px'
            }}>

            </div>
            <div style={{
                height:'300px',
                width:'20px',
                backgroundColor:'black',
                top:'40px',
                position:'relative'
            }}>
            </div>
            <div style={{
                height:'20px',
                width:'200px',
                backgroundColor:'black',
                position:'relative',
                top:'340px',
                right:'110px'
            }}>

            </div>
        </div>
    )
}

export default HangmanGallows