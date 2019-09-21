export default function ({ $axios, store }) {
     $axios.onRequest((config) => {
          config.headers.common['Authorization'] = store.state.user.access_token
     })
}