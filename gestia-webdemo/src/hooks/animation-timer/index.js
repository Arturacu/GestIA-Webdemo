import {useEffect} from 'react'

export default function AnimationTimer(animationFunction, timeout) {
    useEffect(() => {
        const interval = setInterval(() => {
            animationFunction()
        }, timeout)
        return () => clearInterval(interval)
    }, [])
}
