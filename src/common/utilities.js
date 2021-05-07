export const timedLogout = (minutes, logout) => {
    const actions = ['mousemove', 'scroll', 'keydown', 'click', 'mousedown']
    const timeout = minutes * 60000

    const finalLogout = () => {
        logout()
        window.localStorage.removeItem('pt-merchant')
    }

    let t = setTimeout(finalLogout, timeout)

    const updateTimeout = () => {
        clearTimeout(t)
        t = setTimeout(finalLogout, timeout)
    }

    actions.forEach((action) => {
        document.addEventListener(action, updateTimeout, {
            capture: false,
            passive: true
        })
    })
}
