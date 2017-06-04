<template>
  <div class="links">
    <router-link :to="{ name: 'Hello' }">HELLO</router-link>
    <router-link :to="{ name: 'Movie' }">MOVIE</router-link>
    <router-link :to="{ name: 'Book' }">BOOK</router-link>
  </div>
</template>

<script>
export default {
  name: 'links',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
