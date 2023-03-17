import axios from "axios";
import { useAtom } from "jotai";
//
import { tokenAtom } from "@config/state";
import { useQuery, useMutation } from "react-query";


// ------------- AXIOS BASE --------------
const axiosBase = axios.create({
  baseURL: `https://abaya-backend.onrender.com/api/`,
  headers: {
    "Content-type": "application/json"
  },
});

// -------------- interceptors axios base ----------------
axiosBase.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});


// -------------- GET DATA ----------------
export const useGet = ( path: string, enabled ?: boolean ) => {
    async function fetched() { return await axiosBase.get(path) }
    return useQuery([path], fetched, { enabled : enabled })
}


// -------------- POST DATA ----------------
export const usePost = ( path: string ) => {
    async function fetched(post:any) { return await axiosBase.post(path, post) }
    return useMutation([path], fetched)
}


// -------------- PUT DATA ----------------
export const usePut = ( path: string ) => {
    async function fetched(post:any) { return await axiosBase.put(path, post) }
    return useMutation([path], fetched)
}


// -------------- PATCH DATA ----------------
export const usePatch = ( path: string ) => {
    async function fetched(post:any) { return await axiosBase.patch(path, post) }
    return useMutation([path], fetched)
}


// -------------- PATCH DATA ----------------
export const useDelete = ( path: string ) => {
    async function fetched(post:any) { return await axiosBase.delete(path, post) }
    return useMutation([path], fetched)
}