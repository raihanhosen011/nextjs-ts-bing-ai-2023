import axios from "axios";
import { useQuery, useMutation } from "react-query";


// ------------- AXIOS BASE --------------
const axiosBase = axios.create({
  baseURL: `https://rasa.jiva.live/`,
  headers: {
    "Content-type": "application/json"
  },
});


// -------------- POST DATA ----------------
export const usePost = ( path: string ) => {
    async function fetched(post:any) { return await axiosBase.post(path, post) }
    return useMutation([path], fetched)
}