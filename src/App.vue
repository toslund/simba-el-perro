<template>
  <section id="app" class="hero is-fullheight is-default is-bold">
    <div class="hero-head">
    <nav id="main-nav" class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <span class="navbar-item">
              Simba El Perro
          </span>
          <span data-target="navbarMenu" class="navbar-burger burger" v-on:click="toggleburger" v-bind:class="{'is-active': burgeractive}">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenu" class="navbar-menu" v-bind:class="{ 'is-active': burgeractive }">
          <div class="navbar-end">
            <span class="navbar-item">
              <router-link to="/">Home</router-link>
            </span>
            <span class="navbar-item">
              <router-link to="/about">About</router-link>
            </span>
            <span class="navbar-item">
              <router-link to="/blog">Blog</router-link>
            </span>
        </div>
      </div>
    </div>
  </nav>
  </div>
  <div class="hero-body">
        <router-view/>
  </div>
  <div class="hero-foot">
            <div class="container">
                <div class="tabs is-centered">
                    <ul>
                        <li><a>Made with&nbsp;<i class="fas fa-paw"></i>&nbsp;in California</a></li>
                    </ul>
                </div>
                <div class="tabs is-centered">
                    <ul>
                        <li>Demo app built with Vue.js by <a href="https://timoslund.com">timoslund.com</a></li>
                    </ul>
                </div>
            </div>
        </div>

  </section>
</template>

<script>
export default {
  name: 'app',
    data() {
    return {
        burgeractive: false
  }},
    methods: {
    toggleburger: function() {
      this.burgeractive = !this.burgeractive;
    }
  },
}
</script>