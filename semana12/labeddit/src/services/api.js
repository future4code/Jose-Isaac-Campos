import axios from "axios";

export const BASE_URL =
  "https://us-central1-labenu-apis.cloudfunctions.net/labeddit";

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
  console.log(postId);
  return await axios.put(`${BASE_URL}/posts/${postId}/vote`, body, {
    headers: { Authorization: token },
  });
};


export const voteInComment = async (body, postId, commentId, token) => {
  console.log(postId);
  return await axios.put(`${BASE_URL}/posts/${postId}/comment/${commentId}/vote`, body, {
    headers: { Authorization: token },
  });
};

export const createPost = async (body, token) => {
  return await axios.post(`${BASE_URL}/posts`, body, {
    headers: { Authorization: token },
  });
};

export const createComment = async (body, postId,token) => {
  return await axios.post(`${BASE_URL}/posts/${postId}/comment`, body, {
    headers: { Authorization: token },
  });
};

export const getPosts = async () => {
  const token = localStorage.getItem("token");
  return await axios
    .get(`${BASE_URL}/posts`, { headers: { Authorization: token } })
};


export const getPostsDetails = async (postId) => {
  const token = localStorage.getItem("token");
  return await axios
    .get(`${BASE_URL}/posts/${postId}`, { headers: { Authorization: token } })
};
