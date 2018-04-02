import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-7bd23.firebaseio.com/'
});

export default instance;
