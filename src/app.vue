<style lang="scss" scoped>
</style>

<template>

  <div id="app">
    <h1>{{msg}}</h1>
    <comp-a></comp-a>
    <comp-b></comp-b>
    <Counter></Counter>
    
  </div>
</template>

<script>
import CompA from './components/a.vue'
import CompB from './components/b.vue'
import Counter from './components/counter.vue'

export default {
  data() {
    return {
      msg: 'Hello Vueify'
    }
  },
  components: {
    CompA,
    CompB,
    Counter
  }
}
</script>
