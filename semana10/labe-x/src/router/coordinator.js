export const goToLoginPage = (history) => {
    history.push('/login')
}

export const goToLastPage = (history) => {
    history.goBack()
}

export const goToHomePage = (history) => {
    history.push('/')
}

export const goToAdminHomePage = (history) => {
    history.push('/admin/trips/list')
}