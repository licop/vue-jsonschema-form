<template>
  <h1>{{ msg }}</h1>

</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  name: 'Hello World',
  props: {
    msg: String
  },
  setup(props) {
    
  }
})
</script>


<style scoped>

</style>
