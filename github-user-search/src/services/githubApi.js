import axios from "axios";

const API_URL = "https://api.github.com/users";

// Function to get user data from GitHub by username
const getUserData = async (username) => {
  try {
    const response = await axios.get(`${API_URL}/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching GitHub user data:", error);
    throw error;
  }
};

export default { getUserData };
