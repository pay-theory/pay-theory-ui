import { useEffect, useState, useCallback } from 'react'

const useTimedLogout = (minutes, logout) => {
    const [timeout] = useState(minutes * 60)
    const [isTracking, setIsTracking] = useState(false)
    const [expiredTime, setExpiredTime] = useState(Date.now() + timeout * 1000)
    const [timerInterval, setTimerInterval] = useState(false)

    const updateExpiredTime = useCallback(() => {
        setExpiredTime(Date.now() + timeout * 1000)
    }, [timeout])

    const tracker = useCallback(() => {
        document.addEventListener('mousemove', updateExpiredTime, {
            capture: false,
            passive: true
        })
        document.addEventListener('scroll', updateExpiredTime, {
            capture: false,
            passive: true
        })
        document.addEventListener('keydown', updateExpiredTime, {
            capture: false,
            passive: true
        })
    }, [updateExpiredTime])

    const cleanUp = useCallback(() => {
        document.removeEventListener('mousemove', updateExpiredTime)
        document.removeEventListener('scroll', updateExpiredTime)
        document.removeEventListener('keydown', updateExpiredTime)
        window.localStorage.removeItem('pt-merchant')
        window.clearInterval(timerInterval)
    }, [updateExpiredTime, timerInterval])

    const startInterval = useCallback(() => {
        updateExpiredTime()
        setTimerInterval(
            setInterval(() => {
                if (expiredTime < Date.now()) {
                    logout()
                }
            }, 10000)
        )
    }, [updateExpiredTime, expiredTime, logout])

    useEffect(() => {
        if (expiredTime > 0 && expiredTime < Date.now()) {
            logout()
        }
    }, [expiredTime, logout])

    useEffect(() => {
        if (tracker && startInterval && cleanUp && isTracking === false) {
            setIsTracking(true)
            tracker()
            startInterval()
        }
        return cleanUp
    }, [tracker, startInterval, cleanUp, isTracking])
}

export default useTimedLogout
