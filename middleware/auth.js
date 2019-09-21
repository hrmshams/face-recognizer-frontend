import {getUser} from './../controller/index'

export default function ({store, redirect}) {
     if (!store.state.token) {
          console.log('auth mid acc')

          console.log(store.state.l)
          return 
          let token = localStorage.getItem('token')
          if (!token){
               redirect('/login')
          } else {
               getUser(token, (res)=>{
                    store.commit('setToken', res.accessToken)
                    store.commit('setScope', res.scope)
               }, (err)=>{
                    redirect('/login')
               })
          }
     }

}