import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("userToken");
  console.log("token: ", token);

  return axios.create({
    headers: {
      Authorization: `Token ${token}`
    }
  });
};