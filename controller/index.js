import axios from 'axios'

let baseUrl = "localhost:8000/"

let endPoints = {
     login : baseUrl + "api/credential/login",
     register : baseUrl + "api/register",
}

export function login(username, password, onSuccess, onFailure){
     const headers = {
          'Authorization': "Basic " + "YXBwbGljYXRpb246c2VjcmV0"
     }

     const data = {
          grant_type : "password",
          username : username,
          password : password
     }

     axios({
          method : 'POST',
          url : endPoints.login,
          headers : headers,
          data : data
          }).then(function(response){
               onSuccess(response.data)

          }).catch(function(error){
               onFailure(error)
     })  
}

export function register(username, password, onSuccess, onFailure){
     const data = {
          username : username,
          password : password
     }

     axios({
          method : 'POST',
          url : endPoints.register,
          // headers : headers,
          data : data
          }).then(function(response){
               onSuccess(response.data)

          }).catch(function(error){
               onFailure(error)
     })
}

// getToken( (token)=>{
//      const headers = {
//          'Authorization': "Bearer " + token
//      }

//      axios({
//          method : 'GET',
//          url : endPoints.getWallet,
//          headers : headers
//        }).then(function(response){
//            onSuccess(response.data)
//        }).catch(function(error){
//            onFailure(error)
//      })  
// })
