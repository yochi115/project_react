import axios from "axios";
import { number } from "yup";
import DeleteCardModal from "../components/DeleteCardModal";
import Card from "../interfaces/Card";

const api: string = process.env.REACT_APP_API + "/cards" || "";
  


export function createCard(newCard:Card){
    return axios.post(api,newCard)
}

export function getAllCards(){
    return axios.get(api)
}
export function getmyCards(){
     let userId: number = JSON.parse(
    sessionStorage.getItem("userId") as string
  ).userId;
    return axios.get(`${api}?userId=${userId}`);
}
export function deleteCard(id:number){
    return axios.delete(`${api}/${id}`);
}
export function updatecard( id: number ,updatecard: Card) {
  return axios.put(`${api}/${id}`, updatecard);
}

export function getCardById(id: number) {
  return axios.get(`${api}/${id}`);
}