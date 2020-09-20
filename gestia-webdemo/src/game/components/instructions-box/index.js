import React, {useEffect} from 'react'

export default function InstructionsBox() {
    const handGesturesPath = 'hand-gestures/'

    const openPalm = handGesturesPath.concat('open-palm.png')
    const daddyFinger = handGesturesPath.concat('daddy-finger.png')
    const fist = handGesturesPath.concat('fist.png')

    const instructionStyle = instructionImage => {
        return {
            fontFamily: 'Bitter',
            backgroundColor: 'whitesmoke',
            borderLeft: 'solid 4px #6816b0',
            borderRadius: '10px',
            boxShadow: 'inset -1px -1px 30px #c8beb9',
            lineHeight: '18px',
            overflow: 'hidden',
            padding: '12px 60px',
            backgroundImage: `url(` + instructionImage + `)`,
            backgroundPosition: '10px 5px',
            backgroundRepeat: 'no-repeat',
        }
    }

    return [
        <div style={instructionStyle(openPalm)}>
            Show the palm of your hand to cast a spell
        </div>,
        <div style={instructionStyle(daddyFinger)}>
            Raise your index finger to jump
        </div>,
        <div style={instructionStyle(fist)}>Clench your fist to run</div>,
    ]
}
