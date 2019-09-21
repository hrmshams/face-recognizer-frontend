import {getUser} from './../controller/index'

export default function ({app, store, redirect}) {
     const token = app.$cookies.get('token')
     if (!token){
          redirect('/login')
     }    
}