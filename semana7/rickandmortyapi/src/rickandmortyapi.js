import axios from "axios";

const baseUrl = "https://rickandmortyapi.com/api";

export const getAllCharacter = async () => {
  try {
    const response = await axios.get(`${baseUrl}/character`);
    return response.data;
  } catch (error) {
    console.log(error.data);
  }
}

export const getCharacterById = async (id) => {
  if (id !== undefined && id > 0) {
    try {
        const response = await axios.get(`${baseUrl}/character/${id}`);
        return response.data;
      } catch (error) {
        console.log(error.data);
      }
  }
}
;
export const getAllLocation = async () => {
  try {
    const response = await axios.get(`${baseUrl}/location`);
    return response.data;
  } catch (error) {
    console.log(error.data);
  }
}

export const getLocationById = async (id) => {
  if (id !== undefined && id > 0) {
    try {
        const response = await axios.get(`${baseUrl}/location/${id}`);
        return response.data;
      } catch (error) {
        console.log(error.data);
      }
  }
};

export const changePage = async (nextPage) => {
  if (nextPage !== null) {
    const response = await axios.get(nextPage);
    return response.data;
  } else {
    return null;
  }
}
