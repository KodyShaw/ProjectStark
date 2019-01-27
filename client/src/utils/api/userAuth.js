import axios from "axios";

//Can add other axios.create Intances here to save code in long run
//headers might change slightly based om the API used
export default {
    signUp : function(userInfo){
        return axios.post("/v1/signup", userInfo)
      },
    
      signIn: function (userInfo){
        return axios.post("/v1/signin", userInfo)
      },
    
      checkAuth: function (){
        return axios.get("/v1/protected");
    
      },
    
      logout: function (){
        return axios.get("/v1/logout")
      },

      getData: function (token){
          return axios.post("/v1/user_data", {userToken: token})
      }
}