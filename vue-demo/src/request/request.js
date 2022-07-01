import axios from 'axios'
export default class Request {
    static getUsers = (query) => {
        return axios.get('https://api.github.com/search/users', {
            params: {
                q: query
            }
        })
    }
}