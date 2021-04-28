import axios from "axios";

export const BASE_URL =
  "https://us-central1-labenu-apis.cloudfunctions.net/labEddit";

export const login = async (body) => {
  await axios
    .post(`${BASE_URL}/login`, body)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
    })
    .catch((err) => {
      alert(err.message);
    });
};
export const signup = async (body) => {
  await axios
    .post(`${BASE_URL}/signup`, body)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
    })
    .catch((err) => {
      alert(err.message);
    });
};

export const vote = async (body, postId, token) => {
  return await axios.put(`${BASE_URL}/posts/${postId}/vote`, body, {
    headers: { Authorization: token },
  });
};

export const createComment = async (body, token) => {
  return await axios.post(`${BASE_URL}/posts`, body, {
    headers: { Authorization: token },
  });
};

export const getPosts = async () => {
  const token = localStorage.getItem("token");
  return await axios
    .get(`${BASE_URL}/posts`, { headers: { Authorization: token } })
};
