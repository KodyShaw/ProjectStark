import axios from "axios";

//Object that can hold all the various API tokens and auth KEYS in one place
//We will later replace these with envirmoent vars apon deployment in heroku
const AUTH_TOKEN = {
    exampleToken: "this is an example of a token"
}

//Can add other axios.create Intances here to save code in long run
//headers might change slightly based om the API used
const instance = {
    exampleRequest: axios.create({
        baseURL: "exampleapi.com/api/",
        headers: {
            'Accept': 'aplication/json',
            'Content-Type': 'aplication/json',
            'Authorization': 'Bearer ' + AUTH_TOKEN.exampleToken
        },
    })
}

//Exports instance to be used by other files
export default instance;