import {getUser} from './../controller/index'

export const state = () => ({
     user : null
})
   
export const mutations = {
     setUser(state, user) {
          state.user = user
     }    
}

export const actions = {
     nuxtServerInit ({commit,state}, context2) {
          let app = context2.store.app
          console.log('-------------------------------------------------')
          if (!state.user){
               const token = app.$cookies.get('token')
               if (token)
                    getUser(token, (res)=>{
                         console.log('user set : ' + JSON.stringify(res))
                         commit('setUser', res)
                    }, (err)=>{
                         // TODO delete cookies
                         console.log('error in getting user inn nuxtServerInit' + JSON.stringify(err))
                         app.$cookies.remove('token')
                         app.$cookies.remove('scope')
                    })
          }
     }
}