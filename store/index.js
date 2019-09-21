export const state = () => ({
     token : null,
     scope : null,
     l : window.localStorage
})
   
export const mutations = {
     setToken (state, token){
          state.token = token
     },
     setScope (state, scopeStr) {
          state.scope = scopeStr
     }
}