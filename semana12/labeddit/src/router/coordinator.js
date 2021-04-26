export const goToLoginPage = (history) => {
    history.push('/login');
}

export const goToFeedPage = (history) => {
    history.push('/');
}

export const goToPostDetailsPage = (history, id) => {
    history.push('/post/details/id');
}

export const goBack = (history) => {
    history.goBack()
}