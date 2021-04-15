import { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL } from "../constants/urls"

export const useRequestData = (endpoint, initialState) => {
  const [data, setData] = useState(initialState)

  useEffect(() => {
    axios
      .get(`${BASE_URL}${endpoint}`)
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.log(error.data.message)
      })
  }, [endpoint])

  return data
};

export const useRequestDataWithAuth = (endpoint, initialState, auth) => {
  const [data, setData] = useState(initialState)

  useEffect(() => {
    axios
      .get(`${BASE_URL}${endpoint}`, auth)
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.log(error.data.message)
      })
  }, [endpoint, auth])

  return data
}
