<template>
  <div class="book">
    <h1>{{ msg }}</h1>
    <h2>BOOK Links</h2>
    <!-- <router-link :to="{ name: 'Hello' }">HELLO</router-link> -->
  </div>
</template>

<script>
export default {
  name: 'book',
  data () {
    return {
      msg: 'Welcome to Your BOOK'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>
