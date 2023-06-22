import axios from "axios";
axios.defaults.baseURL= 'http://localhost:3001/api/';

export function get(url) {
    return axios.get(url);
}

export function create(url, data){
    return axios.post(url,data)
}

export function edit(url,data){
    return axios.put(url,data)
}

export function eliminar(url){
    return axios.delete(url)
}
