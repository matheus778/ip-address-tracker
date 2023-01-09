import axios from 'axios';

const api = axios.create({
  baseURL: `https://geo.ipify.org/api/v2/country?apiKey=${process.env.REACT_APP_API_KEY}&ipAddress=`
})

export {api};
// ipAddress=8.8.8.8