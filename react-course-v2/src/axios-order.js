import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-bce6e-default-rtdb.firebaseio.com/'
});

export default instance;