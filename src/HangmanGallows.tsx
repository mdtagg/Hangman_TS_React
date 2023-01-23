
const HEAD = <div style={{
            width:'60px',
            height:'60px',
            borderRadius:'100%',
            border:'10px solid black',
            position:'absolute',
            top:'75px',
            left:'160px'
        }}></div>

const BODY = <div style={{
            width:'20px',
            height:'100px',
            backgroundColor:'black',
            position:'absolute',
            top:'130px',
            left:'180px'
}}></div>

const LEFT_ARM = <div style={{
    width:'20px',
    height:'70px',
    backgroundColor:'black',
    rotate:'315deg',
    position:'absolute',
    left:'160px',
    top:'125px'
}}>

</div>

const RIGHT_ARM = <div style={{
    width:'20px',
    height:'70px',
    backgroundColor:'black',
    position:'absolute',
    left:'200px',
    rotate:'45deg',
    top:'125px'
}}>

</div>

const LEFT_LEG = <div style={{
    width:'20px',
    height:'70px',
    backgroundColor:'black',
    position:'absolute',
    left:'160px',
    top:'210px',
    rotate:'225deg'
}}></div>

const RIGHT_LEG = <div style={{
    width:'20px',
    height:'70px',
    backgroundColor:'black',
    position:'absolute',
    rotate:'135deg',
    left:'200px',
    top:'210px'   
}}></div>

const BODY_PARTS = [HEAD,BODY,LEFT_ARM,RIGHT_ARM,LEFT_LEG,RIGHT_LEG]

type HangmanGallowsProps = {
    numberOfGuesses:number
}

const HangmanGallows = ({numberOfGuesses}:HangmanGallowsProps) => {
    return (
        <div className='gallows-container'>
            <div style={{ position:'relative' }}>
            {BODY_PARTS.slice(0,numberOfGuesses)}
            </div>
            <div style={{
                height:'20px',
                width:'200px',
                backgroundColor:'black',
                top:'20px',
                position:'absolute'
            }}
            >
            </div>
            <div style={{
                height:'40px',
                width:'20px',
                backgroundColor:'black',
                position:'absolute',
                top:'40px',
                left:'180px'
            }}>
            </div>
            <div style={{
                height:'300px',
                width:'20px',
                backgroundColor:'black',
                top:'40px',
                position:'absolute'
            }}>
            </div>
            <div style={{
                height:'20px',
                width:'200px',
                backgroundColor:'black',
                position:'absolute',
                top:'340px',
                right:'-110px'
            }}>

            </div>
        </div>
    )
}

export default HangmanGallows