
<style lang="sass" scoped>
main {
	background-color: yellow;
	h2 {
		color: green;
	}

}
</style>

<template>
<main>
	
	<h2>{{msg}}</h2>
	<input v-model="msg">

</main>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello from component AAA!'
    }
  }
}
</script>
