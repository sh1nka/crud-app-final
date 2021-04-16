import axios from 'axios';
 
export default axios.create({
    baseURL: 'http://localhost:7000/dashboard/'
});

//(api.get, ``) which api = axios