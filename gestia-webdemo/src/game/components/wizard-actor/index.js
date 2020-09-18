import React from 'react'
import Sprite from '../sprite'
import useKeyPress from '../../../hooks/use-key-press'
import AnimationTimer from '../../../hooks/animation-timer'
import {useState} from 'react'

export default function WizardActor() {
    const [animationStep, setAnimationStep] = useState(0)
    const [animationState, setAnimationState] = useState('Idle.png')

    const spriteFolder = 'sprites/wizard/'
    const h = 190,
        w = 231
    const totalStepsIdleAnimation = 6
    const idleTimeout = 250

    const actorIdleAnimation = () => {
        setAnimationStep(prev => (prev + 1) % totalStepsIdleAnimation)
        console.log(animationStep * w)
    }

    AnimationTimer(actorIdleAnimation, idleTimeout)

    useKeyPress(e => {
        const dir = e.key.replace('Arrow', '').toLowerCase()
        console.log(dir)
    })

    return (
        <Sprite
            image={spriteFolder.concat(animationState)}
            data={{x: animationStep * w, y: 0, h, w}}
        />
    )
}
