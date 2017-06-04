<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
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

.position {
  margin: 400px 0;
}
</style>
