<template>
  <div id="app">
    <NavBar/>
    <router-view/>
  </div>
  <footer class="footer">
  <div class="content has-text-centered">
    <p>
      <strong>SC Headless Blog Site</strong> by <a href="mailto:thomas.mims@sitecore.com">Mims</a>. The source code is found
      <a href="https://github.com/mimstw26/vue-sc-headless-blog" target="_blank">here</a>.
    </p>
  </div>
</footer>
</template>

<script>
import NavBar from './components/NavBar.vue';
export default {
  name: 'App',
  components: {
    NavBar,
  }
}
</script>

<style>
  @import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
  * {
    box-sizing: border-box;
    font-family: Arial;
  }

  #page-wrap {
    margin: auto;
    max-width: 800px;
    min-height: 100vh;
  }

  button {
    background-color: black;
    border: none;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    outline: 0;
    padding: 16px;
  }
</style>
