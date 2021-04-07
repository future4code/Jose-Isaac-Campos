import axios from "axios"

const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jose-isaac'

export const getProfile = async () => {
    try {
        const response = await axios.get(`${baseUrl}/person`)
        
        return response.data.profile
    } catch (error) {
        console.log('getProfile: ', error.data.message)
    }
}

export const choosePerson = async (id, choice) => {
    try {
        const body = {
            id: id,
            choice: choice
        }
        await axios.post(`${baseUrl}/choose-person`, body)
    } catch (error) {
        console.log('choosePerson: ', error.data.message)
    }
}

export const getMatches = async () => {
    try {
        const response = await axios.get(`${baseUrl}/matches`)

        return response.data.matches
    } catch (error) {
        console.log('getMatches: ', error.data.message)
    }
}

export const Clear = async () => {
    try {
        const response = await axios.put(`${baseUrl}/clear`)
        console.log('clear: ', response.data.message)
    } catch (error) {
        console.log('clear: ' , error.data.message)
    }
}