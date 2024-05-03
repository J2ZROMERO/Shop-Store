import axios from 'axios';

export default axios.create({
    baseURL: 'http://alloworigin.com/get?url=https://9c96-103-106-239-104.ap.ngrok.io',
    headers: {"ngrok-skip-browser-warning": "true"}
});