<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item">
        <img src="https://create.stylelabs.io/img/logo.svg" width="112" height="28">
      </a>
      <div class="navbar-item">
        <h1 class="is-size-4">SC Headless Blog</h1>
      </div>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a href="/home" class="navbar-item">
          Home
        </a>

        <a href="/blogs" class="navbar-item">
          Blogs
        </a>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            More
          </a>

          <div class="navbar-dropdown">
            <a class="navbar-item">
              About
            </a>
          </div>
        </div>
      </div>

      <!-- <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">
              Log in
            </a>
          </div>
        </div>
      </div> -->
    </div>
  </nav>
</template>

<script>

    export default {
        name: 'NavBar'
    }
</script>

<style scoped>
</style>
