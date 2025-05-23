import axios from "axios";

const API_URL = "https://api.github.com/users";

const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${API_URL}/${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default { fetchUserData };
