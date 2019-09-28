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
     getPeople : baseUrl + 'api/credential/people/getPeople',
     unpreprocessedPeopleGet : baseUrl + 'api/credential/preprocess/getPeoplePreprocess',
     startPreprocess : baseUrl + 'api/credential/preprocess/start',
     getAllUsers : baseUrl + 'api/credential/user/getAll',
     deleteUser : baseUrl + 'api/credential/user/deleteUser',
     promoteDemoteUser : baseUrl + 'api/credential/user/promoteDemote',

     getReadyPeople : baseUrl + 'api/credential/featurevector/getReadyPeople',
     getInfo : baseUrl + 'api/credential/featurevector/getInfo',
     startCreatingVector : baseUrl + 'api/credential/featurevector/create',

     getTrainingInfo : baseUrl + 'api/credential/train/getInfo',
     startTraining : baseUrl + 'api/credential/train/start',
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
     const headers = {
          'Authorization': "Bearer " + getToken(),
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

export function getPeople(onSuccess, onFailure){
     const headers = {
          'Authorization': "Bearer " + getToken(),
     }
     axios({
          method : 'GET',
          url : endPoints.getPeople,
          headers : headers,
          crossDomain:true,
          }).then(function(response){
               onSuccess(response.data)

          }).catch(function(error){
               console.log(error)
               onFailure(error)
     })
}


export function getUnpreprocessedPeople(onSuccess, onFailure){
  const headers = {
       'Authorization': "Bearer " + getToken(),
  }
  axios({
       method : 'GET',
       url : endPoints.unpreprocessedPeopleGet,
       headers : headers,
       crossDomain:true,
       }).then(function(response){
            onSuccess(response.data)

       }).catch(function(error){
            console.log(error)
            onFailure(error)
  })
}

export function startPreprocess(onSuccess, onFailure){
  const headers = {
       'Authorization': "Bearer " + getToken(),
  }
  axios({
       method : 'POST',
       url : endPoints.startPreprocess,
       headers : headers,
       crossDomain:true,
       }).then(function(response){
            onSuccess(response.data)

       }).catch(function(error){
            console.log(error)
            onFailure(error)
  })
}

export function getAllUsers(onSuccess, onFailure){
     const headers = {
          'Authorization': "Bearer " + getToken(),
     }
     axios({
          method : 'GET',
          url : endPoints.getAllUsers,
          headers : headers,
          crossDomain:true,
          }).then(function(response){
               onSuccess(response.data)
   
          }).catch(function(error){
               console.log(error)
               onFailure(error)
     })
}

export function deleteUser(user_id, onSuccess, onFailure){
     const headers = {
          'Authorization': "Bearer " + getToken(),
     }
     const data = {
          id : user_id
     }
     axios({
          method : 'POST',
          url : endPoints.deleteUser,
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

export function promoteDemoteUser(user_id, isPromote, onSuccess, onFailure){
     const headers = {
          'Authorization': "Bearer " + getToken(),
     }
     const data = {
          id : user_id,
          isPromote : isPromote
     }
     axios({
          method : 'POST',
          url : endPoints.promoteDemoteUser,
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

export function getReadyPeople(onSuccess, onFailure){
     const headers = {
          'Authorization': "Bearer " + getToken(),
     }
     axios({
          method : 'GET',
          url : endPoints.getReadyPeople,
          headers : headers,
          crossDomain:true,
          }).then(function(response){
               onSuccess(response.data)
   
          }).catch(function(error){
               console.log(error)
               onFailure(error)
     })
}

export function getVectorCreatingInfo(onSuccess, onFailure){
     const headers = {
          'Authorization': "Bearer " + getToken(),
     }
     axios({
          method : 'GET',
          url : endPoints.getInfo,
          headers : headers,
          crossDomain:true,
          }).then(function(response){
               onSuccess(response.data)
   
          }).catch(function(error){
               console.log(error)
               onFailure(error)
     })
}

export function startCreatingVector(onSuccess, onFailure){
     const headers = {
          'Authorization': "Bearer " + getToken(),
     }
     axios({
          method : 'POST',
          url : endPoints.startCreatingVector,
          headers : headers,
          crossDomain:true,
          }).then(function(response){
               onSuccess(response.data)
   
          }).catch(function(error){
               console.log(error)
               onFailure(error)
     })
}

export function startTraining(onSuccess, onFailure){
     const headers = {
          'Authorization': "Bearer " + getToken(),
     }
     axios({
          method : 'POST',
          url : endPoints.startTraining,
          headers : headers,
          crossDomain:true,
          }).then(function(response){
               onSuccess(response.data)
   
          }).catch(function(error){
               console.log(error)
               onFailure(error)
     })
}

export function getTrainingInfo(onSuccess, onFailure){
     const headers = {
          'Authorization': "Bearer " + getToken(),
     }
     axios({
          method : 'GET',
          url : endPoints.getTrainingInfo,
          headers : headers,
          crossDomain:true,
          }).then(function(response){
               onSuccess(response.data)
   
          }).catch(function(error){
               console.log(error)
               onFailure(error)
     })
}