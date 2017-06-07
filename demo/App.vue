<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <div class="position">
      Top: {{ top }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      top: 0
    }
  },
  methods: {
    onScroll () {
      this.top = window.pageYOffset || document.documentElement.scrollTop
        || document.body.scrollTop
    }
  },
  mounted: function () {
    window.addEventListener('scroll', this.onScroll)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

a {
  color: #333;
}

.router-link-active {
  color: #42b983;
}

.flag {
  margin: 400px 0;
}

.position {
  position: fixed;
  top: 0;
  left: 0;
  width: 80px;
  height: 80px;
  line-height: 80px;
  font-weight: 700;
  background-color: red;
  z-index: 9;
}

</style>
