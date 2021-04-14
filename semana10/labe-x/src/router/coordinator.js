export const goToLoginPage = (history) => {
    history.push('/login')
}

export const goToLastPage = (history) => {
    history.goBack()
}

export const goToHomePage = (history) => {
    history.push('/')
}