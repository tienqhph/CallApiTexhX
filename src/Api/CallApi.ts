import axios from "axios"

export const CallApiFromServer  = ()=>{

    return axios.get('https://jsonplaceholder.typicode.com/todos').then(data => data.data)
    
}