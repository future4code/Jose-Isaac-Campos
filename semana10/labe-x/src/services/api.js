import axios from "axios"
import { BASE_URL } from "../constants/urls"

export const apiSendData = async (endpoint, body) => {
    try {
      const response = await axios.post(`${BASE_URL}${endpoint}`, body)
      return response.data
    } catch (error) {
      return {
        sucess: false,
        error: error.message
      }
    }
  }