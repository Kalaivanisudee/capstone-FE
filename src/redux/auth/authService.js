
import axios from "axios";
export const register = async (user) => {
  const URL = `http://localhost:4000/api/users/reg`;
  try {
    const res = await axios.post(URL, user);
    if (res.data) {
      localStorage.setItem("user", JSON.stringify(res.data));
    }
    return res.data;
  } catch (error) {
    throw { message: error?.response?.data?.message };
  }
};

export const login = async (user) => {
  const URL = `http://localhost:4000/api/users/login`;
  try {
    const res = await axios.post(URL, user);
    if (res.data) {
      localStorage.setItem("user", JSON.stringify(res.data));
    }
    return res.data;
  } catch (error) {
    throw { message: error?.response?.data?.message };
  }
};
export const authService = { register, login };