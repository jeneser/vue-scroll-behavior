<template>
  <div class="movie">
    <h2>Movie Links</h2>
    <links></links>
    <h1>{{ msg }}</h1>
    <div class="position" v-for="n in 4">
      <p v-elem></p>
      <links></links>
    </div>
  </div>
</template>

<script>
import Links from './Links'

export default {
  name: 'movie',
  components: { Links },
  data () {
    return {
      msg: 'Welcome, Your movie links'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
