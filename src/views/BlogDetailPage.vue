<template>
  <div v-if="result.tmtestcontenttype"> 
    <section class="hero is-info is-medium is-bold">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">{{result.tmtestcontenttype.title}}</h1>
        </div>
      </div>
    </section>
  </div>
  <NotFoundPage v-else />
</template>

<script>
import { SINGLE_POST_QUERY } from '../constants/graphql'
import { useQuery } from '@vue/apollo-composable'
import NotFoundPage from '../views/NotFoundPage.vue';
//import gql from 'graphql-tag'
import { watch } from 'vue'

export default {
  name: "BlogDetailPage",
  components: {
    NotFoundPage
  },
  setup () {
    const { result } = useQuery(SINGLE_POST_QUERY,
    {
      tmtestcontenttypeId: "zKVd_0yf7Uirey1clLI1vQ"
    })
    watch(result, value => {
      console.log(value)
    })
    return{
      result
    }
  }
}
</script>

<style scoped>

</style>