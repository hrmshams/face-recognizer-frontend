export default function({app, store, redirect}){
     const scope = app.$cookies.get('scope')
     if (scope){
          if (!scope.includes('admin')){
          redirect('/login')
          }
     }else {
          redirect('/login')      
     }
}