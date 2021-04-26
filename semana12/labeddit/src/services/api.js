import axios from "axios"

const BASE_URL = 'https://us-central1-labenu-apis.cloudfunctions.net/labEddit'

export const login = async (body) => {
    await axios.post(`${BASE_URL}/login`, body)
      .then(response => {
        localStorage.setItem('token', response.data.token)
      })
      .catch(err => {
          alert(err.message)
      })
}
export const signup = async (body) => {
    await axios.post(`${BASE_URL}/signup`, body)
      .then(response => {
          localStorage.setItem('token', response.data.token)
      })
      .catch(err => {
          alert(err.message)
      })
}