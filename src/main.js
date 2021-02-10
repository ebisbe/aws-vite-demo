// import Vue from 'vue'
// import App from './App.vue'
// import router from './router'

// import './assets/styles/tailwind.css'

// Vue.config.productionTip = false

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')

import { createApp } from 'vue'
import './assets/styles/tailwind.css'
import App from './App.vue'
import { routes } from './router'
import { createRouter, createWebHistory } from 'vue-router'

import Amplify, { Auth } from "aws-amplify";
Amplify.configure({});
//import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'

// HTTP connection to the API
// const httpLink = createHttpLink({
//   // You should use an absolute URL here
//   uri: 'http://localhost:3020/graphql',
// })

// // Cache implementation
// const cache = new InMemoryCache()

// // Create the apollo client
// const apolloClient = new ApolloClient({
//   link: httpLink,
//   cache,
// })

let app = createApp(App)

let router = createRouter({
  history: createWebHistory(),
  //linkActiveClass: 'bg-black bg-opacity-25',
  routes: import.meta.hot ? [] : routes
})

if (import.meta.hot) {
  let removeRoutes = []

  for (let route of routes) {
    removeRoutes.push(router.addRoute(route))
  }

  import.meta.hot.accept('./routes.js', ({ routes }) => {
    for (let removeRoute of removeRoutes) removeRoute()
    removeRoutes = []
    for (let route of routes) {
      removeRoutes.push(router.addRoute(route))
    }
    router.replace('')
  })
}

app.use(router)
//app.use(apolloClient)
app.mount('#app')
