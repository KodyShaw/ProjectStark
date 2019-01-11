import axios from "axios";

//Object that can hold all the various API tokens and auth KEYS in one place
//We will later replace these with envirmoent vars apon deployment in heroku
const AUTH_TOKEN = {
    marketCheck: "qXtblopUGGZO5QGbl6kA2EZLG7Qd0jwC"
}

//Can add other axios.create Intances here to save code in long run
//headers might change slightly based om the API used
export default {
    marketCheckSearch: axios.create({
        baseURL: `http://api.marketcheck.com/v1/search?api_key=${AUTH_TOKEN.marketCheck}&`,
        headers: {
            'Accept': 'aplication/json',
            'Content-Type': 'aplication/json',
            'Host': 'marketcheck-prod.apigee.net'
        },
    })
}
