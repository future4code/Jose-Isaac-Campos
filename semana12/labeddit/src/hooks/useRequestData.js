import axios from 'axios'
import { useState, useEffect } from 'react'
import { BASE_URL } from '../services/api'

export const useRequestData = (endpoint, initialState) => {
    const [data, setData] = useState(initialState)
    const token = localStorage.getItem('token')

    useEffect(() => {
        axios.get(`${BASE_URL}${endpoint}`, { headers: {Authorization: token}})
          .then(response => {
            setData(response.data.posts)
          })
          .catch(error => alert(error.message))
    }, [endpoint, token])

    return data
}