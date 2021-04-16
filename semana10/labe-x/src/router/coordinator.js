export const goToLoginPage = (history) => {
    history.push('/login')
}

export const goToLastPage = (history) => {
    history.goBack()
}

export const goToHomePage = (history) => {
    history.push('/')
}

export const goToListTripPage = (history) => {
    history.push('/trips/list')
}

export const goToApllicationFormPage = (history) => {
    history.push('/trips/application')
}

export const goToCreateTripPage = (history) => {
    history.push('/admin/trips/create')
}

export const goToAdminHomePage = (history) => {
    history.push('/admin/trips/list')
}