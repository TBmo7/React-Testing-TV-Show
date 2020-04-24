
import axios from "axios"

export const fetchShow = (data) =>{
    return axios.get(data)
        .then(res =>  res)
}