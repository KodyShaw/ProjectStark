import axios from "axios";

//Can add other axios.create Intances here to save code in long run
//headers might change slightly based om the API used
export default {
    signUp : function(userInfo){
        return axios.post("/api/v1/users/signup", userInfo)
      },
    
      signIn: function (userInfo){
        return axios.post("/api/v1/users/signin", userInfo)
      },
    
      checkAuth: function (){
        return axios.get("/api/v1/users/protected");
    
      },
    
      logout: function (){
        return axios.get("/api/v1/users/logout")
      },

      getData: function (token){
          return axios.post("/api/v1/users/user_data", {userToken: token})
      }
}