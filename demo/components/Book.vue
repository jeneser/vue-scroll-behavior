<template>
  <div class="book">
    <h2>Book Links</h2>
    <links></links>
    <h1>{{ msg }}</h1>
    <div class="flag" v-for="n in 2">
      <p v-elem></p>
      <links></links>
    </div>
  </div>
</template>

<script>
import Links from './Links'

export default {
  name: 'book',
  components: { Links },
  data () {
    return {
      msg: 'Great, Your book'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
