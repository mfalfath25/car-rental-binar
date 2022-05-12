import axios from 'axios';

export default axios.create({
  baseURL: 'https://rent-cars-api.herokuapp.com/admin/',
});
