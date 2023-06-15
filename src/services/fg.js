import axios from "axios"

export default axios.create({
    baseURL: process.env.REACT_APP_URL_FG,
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
})