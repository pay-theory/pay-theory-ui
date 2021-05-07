export const timedLogout = (minutes, logout) => {
    let actions = ['mousemove', 'scroll', 'keydown', 'click', 'mousedown']
    let timeout = minutes * 60000

    let finalLogout = () => {
        logout()
        window.localStorage.removeItem('pt-merchant')
    }

    var t = setTimeout(finalLogout, timeout)

    let updateTimeout = () => {
        clearTimeout(t)
        t = setTimeout(finalLogout, timeout)
    }

    actions.forEach(action => {
        document.addEventListener(action, updateTimeout, {
            capture: false,
            passive: true
        })
    })
}
