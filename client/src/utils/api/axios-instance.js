import axios from "axios";

//Can add other axios.create Intances here to save code in long run
//headers might change slightly based om the API used
export default {
    baseAPI: axios.create({
        baseURL: `${__dirname}/api`,
    })
}