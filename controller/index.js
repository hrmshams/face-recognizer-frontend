import axios from 'axios'
const qs = require('querystring')
import store from "./../store/index"

axios.defaults.port = 8000;
let baseUrl = "http://localhost:8000/"

let endPoints = {
     login : baseUrl + "api/credential/login",
     register : baseUrl + "api/register",
     getUser : baseUrl + "api/credential/getUser",
     addPersonForCrawl : baseUrl + "api/credential/people/addPersonForCrowl",
     crawlImages : baseUrl + "api/credential/people/crawlImages",
}

function getToken(){
     return store().getters.getToken
}

export function login(username, password, onSuccess, onFailure){
     const headers = {
          'Authorization': "Basic " + "YXBwbGljYXRpb246c2VjcmV0",
          'Content-Type': 'application/x-www-form-urlencoded'
     }

     const data = {
          grant_type : "password",
          username : username,
          password : password
     }
     console.log(endPoints.login)
     axios({
          method : 'POST',
          url : endPoints.login,
          headers : headers,
          data : qs.stringify(data)

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
          crossDomain:true,
          data : data
          }).then(function(response){
               onSuccess(response.data)

          }).catch(function(error){
               console.log(error)
               onFailure(error)
     })
}

export function getUser(token, onSuccess, onFailure){
     const headers = {
          'Authorization': "Bearer " + token,
          'Content-Type': 'application/x-www-form-urlencoded'
     }

     axios({
          method : 'GET',
          url : endPoints.getUser,
          headers : headers,
          crossDomain:true,
          }).then(function(response){
               onSuccess(response.data)

          }).catch(function(error){
               console.log(error)
               onFailure(error)
     })
}

export function addPersonForCrawl(name, onSuccess, onFailure){
     const headers = {
          'Authorization': "Bearer " + getToken(),
     }
     console.log(headers)
     const data = {
          name : name,
     }

     axios({
          method : 'POST',
          url : endPoints.addPersonForCrawl,
          headers : headers,
          data : data,
          crossDomain:true,
          }).then(function(response){
               onSuccess(response.data)

          }).catch(function(error){
               console.log(error)
               onFailure(error)
     })
}

export function startCrawlingImages(onSuccess, onFailure){
     // store().dispatch('setUser')
     // return
     const headers = {
          // 'Authorization': "Bearer " + token,
          'Content-Type': 'application/x-www-form-urlencoded'
     }

     axios({
          method : 'POST',
          url : endPoints.crawlImages,
          headers : headers,
          crossDomain:true,
          }).then(function(response){
               onSuccess(response.data)

          }).catch(function(error){
               console.log(error)
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
