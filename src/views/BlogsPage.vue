<template>

  <!-- <div id="page-wrap">
    <div class="grid-wrap">
      <div v-if="error">Something went wrong...</div>
      <div v-if="loading">Loading...</div>
      <div 
        v-else v-for="contenttype in result.allTmtestcontenttype.results"
        class="blog-item"
        :key="contenttype.id">
          <img v-bind:src="contenttype.picture" />
          <h3 class="blog-title">{{ contenttype.title }}</h3>
          <pre v-html="contenttype.body"></pre>
      </div>
    </div>
  </div> -->
  
<div class="container">
  <div v-if="error">Something went wrong...</div>
  <div v-if="loading">Loading...</div>
  <div class="tile is-ancestor">
    <div v-for="contenttype in result.allTmtestcontenttype.results"
        :key="contenttype.id" class="tile">
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">{{contenttype.title}}</p>
            <p class="subtitle">{{contenttype.abstract}}</p>
            <figure class="image is-4by3">
              <img v-bind:src="contenttype.picture">
            </figure>
          </article>
        </div>
      </div>
  </div>
</div>
  
</template>

<script>
//import BlogGrid from '../components/BlogGrid.vue';
import { ALL_POSTS_QUERY } from '../constants/graphql'
import { useQuery } from '@vue/apollo-composable'

  export default{
    name: 'BlogsPage',
    setup () {
      const { result, loading, error } = useQuery(ALL_POSTS_QUERY);
      return {
        result,
        loading, 
        error
      }
    }
    // apollo: {
    //   blogs: {
    //     query: ALL_POSTS_QUERY
    //   }
    // }
  };
</script>

<style scoped>
  .grid-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 16px;
  }

  .blog-item {
    align-items: center;
    border-radius: 8px;
    box-shadow: 0px 2px 5px #888;
    display: flex;
    flex-direction: column;
    margin-bottom: 2%;
    padding: 20px;
    position: relative;
    width: 32%;
  }

  .blog-title {
    margin-bottom: 0;
  }

  img {
    height: 200px;
    width: 200px;
  }

  a {
    width: 100%;
  }

  button {
    width: 100%;
  }
</style>

