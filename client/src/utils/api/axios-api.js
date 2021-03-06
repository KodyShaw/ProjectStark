//API to be used with the axios call functions.
const API = {
    axiosGet: (instance, query, options, callbackFunction) => {
        instance.get(query, options).then(res => {
            console.log(options)
            callbackFunction(res.data);
        }).catch(err => {
            console.log("Front-end API Call Error");
            if (!err.response) {
                console.log({ err });
            } else {
                console.log(`Status code: ${err.response.status}`);
                console.log(`API Message: ${err.request.statusText}`);
            }
        });
    }
}

// Exports the API for other files to use
export default API;

//In this case of my code a basic API get call will be added like so: 
// 
// API.axiosGet(instance.exampleRequest, `example/request/route`, response => {
//     console.log(response.data);
// });