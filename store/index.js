import {getUser} from './../controller/index'
import Vuex from 'vuex'

let store

const createStore = () => {
     return store || (store = new Vuex.Store({
          state: () => ({
               user : null
          }),
          mutations: {
               setUser(state, user) {
                    console.log(user)
                    state.user = user
                    console.log('ac2')
               }    
          },
          actions : {
               nuxtServerInit ({commit,state}, context2) {

                    let app = context2.store.app
                    console.log('-------------------------------------------------')
                    if (!state.user){
                         const token = app.$cookies.get('token')
                         const scope = app.$cookies.get('scope')
                         if (token)
                              commit('setUser', {
                                   token : token,
                                   scope : scope
                              })

                              // getUser(token, (res)=>{
                              //      console.log('done0')
                              //      commit('setUser', res)
                              //      console.log('done')
                              // }, (err)=>{
                              //      // TODO delete cookies
                              //      console.log('error in getting user inn nuxtServerInit' + JSON.stringify(err))
                              //      app.$cookies.remove('token')
                              //      app.$cookies.remove('scope')
                              // })
                    }
               },
               setUser ({commit, state}) {
                    commit('setUser', '123')
               },
          },
          getters: {
               getWholeState : state => {
                    return state
               },
               getToken: state => {
                    return state.user.token
               }
          }
     }))
}

export default createStore