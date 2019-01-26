import axios from "axios";

//Can add other axios.create Intances here to save code in long run
//headers might change slightly based om the API used
export default {
    locationAPI: axios.create({
        baseURL: `/api/v1/cars/locations?`,
        headers: {
            'Accept': 'aplication/json',
            'Content-Type': 'aplication/json',
        }
    })
}