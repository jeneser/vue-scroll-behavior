<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <div class="position">
      Top: {{ scrollTop }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      scrollTop: 0
    }
  },
  methods: {
    onScroll () {
      let d = document
      this.scrollTop = d.getElementsByTagName('body')[0].scrollTop
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

/*body {
  height: 2000px;
}*/

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
