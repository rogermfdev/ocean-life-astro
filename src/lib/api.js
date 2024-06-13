import axios from "axios"

export const api = axios.create({
    baseURL:"https://my-json-server.typicode.com/rogermfdev/json-server"
})

export const search = async (url, setData) => {
    const response = await api.get(url);
    setData(response.data);
}