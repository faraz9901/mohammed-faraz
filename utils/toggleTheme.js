const toggleTheme = () => {
    const body = document.body
    if (body.classList.contains('dark')) {
        body.classList.remove('dark')
        localStorage.setItem('theme', 'light')
    } else {
        body.classList.add('dark')
        localStorage.setItem('theme', 'dark')
    }
}

const setTheme = () => {
    const body = document.body
    const theme = localStorage.getItem('theme')

    if (theme === 'dark') {
        body.classList.add('dark')
    }
}

export { toggleTheme, setTheme }