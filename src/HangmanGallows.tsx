import React from 'react'

const HEAD = <div style={{
            width:'50px',
            height:'50px',
            backgroundColor:'black',
            borderRadius:'100%',
            position:'relative',
            left:'335px',
            top:'65px'
        }}></div>

const BODY = <div style={{
            width:'25px',
            height:'100px',
            backgroundColor:'black',
            position:'relative',
            left:'347px',
            top:'60px'
}}></div>

const LEFT_LEG = <div style={{
    width:'25px',
    height:'70px',
    backgroundColor:'black',
    position:'relative',
    left:'320px',
    top:'50px',
    rotate:'45deg'
}}></div>

const RIGHT_LEG = <div style={{
    width:'25px',
    height:'70px',
    backgroundColor:'black',
    position:'relative',
    left:'370px',
    bottom:'25px',
    rotate:'135deg'
}}></div>

const BODY_PARTS = [HEAD,BODY,LEFT_LEG,RIGHT_LEG]

const HangmanGallows = () => {
    return (
        <div className='gallows-container'>
            <div>
            {BODY_PARTS.slice(0)}
            </div>
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