import { createApp, provide, h } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient, InMemoryCache, HttpLink, ApolloLink, concat } from '@apollo/client/core'
import App from './App.vue'
import router from './router'

const cache = new InMemoryCache()
console.log(process.env.VUE_APP_GC_GRAPHQL_URI)
const httpLink = new HttpLink({ uri: process.env.VUE_APP_GC_GRAPHQL_URI });

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
const token = process.env.VUE_APP_GC_AUTH_TOKEN;
  operation.setContext({
    headers: {
        "Content-Type": "application/json",
        "X-GQL-Token": token,
      },
  });
  return forward(operation);
});

const apolloClient = new ApolloClient({
  cache,
  link: concat(authMiddleware, httpLink)
})

const app = createApp({
  setup () {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App),
})

app.use(router);
app.mount('#app');
