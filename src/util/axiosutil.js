import axios from 'axios';
const instance = axios.create({
    baseURL : 'https://cryptic-peak-59985.herokuapp.com/'
})

export default instance;