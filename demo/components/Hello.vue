<template>
  <div class="hello">
    <h2>welcome</h2>
    <links></links>
    <h1>{{ msg }}</h1>
    <div class="flag" v-for="n in 4">
      <p v-elem></p>
      <links></links>
    </div>
  </div>
</template>

<script>
import Links from './Links'

export default {
  name: 'hello',
  components: { Links },
  data () {
    return {
      msg: 'vue-scroll-behavior'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
