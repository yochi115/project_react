import axios from "axios";
import User from "../interfaces/User";

const api: string = process.env.REACT_APP_API || "";

export function checkUser(user: User) {
  return axios.post(`${api}/login`, user);
}

export function newUser(newtoUser: User) {
  return axios.post(`${api}/register`, newtoUser);
}

export function profileUser() {
  return axios.get(`${api}/mypro`,{
    headers: {
      Authorization: JSON.parse(sessionStorage.getItem("userDatas") as string)
        .token,
    },
  });
}
















    
