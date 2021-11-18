import axios from 'axios';

const loginApi = {
  add: (data) =>
    axios.post(`${process.env.REACT_APP_API_BASE}/auth/signup`, data),
};

export default loginApi;
