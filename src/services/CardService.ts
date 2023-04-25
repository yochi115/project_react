import axios from "axios";
import { number } from "yup";
import DeleteCardModal from "../components/DeleteCardModal";
import Card from "../interfaces/Card";

const api: string = process.env.REACT_APP_API + "/cards" || "";

  


export function createCard(newCard: Card) {

  return axios.post(api,newCard,{
     headers: {
      Authorization: JSON.parse(sessionStorage.getItem("userDatas") as string)
        .token
    },
  });
}

export function getAllCards(){
     return axios.get(api, {
    headers: {
      Authorization: JSON.parse(sessionStorage.getItem("userDatas") as string)
        .token,
    },
  });

}

export function getmyCards(userId: string) {
  return axios.get(`${api}/${userId}`, {
    headers: {
      Authorization: JSON.parse(sessionStorage.getItem("userDatas") as string)
        .token,
    },
  });
}


export function deleteCard(id: string) {

  return axios.delete(`${api}/${id}`, {
    headers: {
      Authorization: JSON.parse(sessionStorage.getItem("userDatas") as string)
        .token,
    },
  });
}

export function updatecard(id: string, updatecard: Card) {
  return axios.put(`${api}/${id}`, updatecard,{
    headers: {
      Authorization: JSON.parse(sessionStorage.getItem("userDatas") as string)
        .token,
    },
  });
}




export function getCardById(id: string) {
  return axios.get(`${api}/${id}`);
}

