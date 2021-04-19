<template>
  <img width="160" alt="Vite logo" :src="logoSvg" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import logoSvg from '../public/logo.svg'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    return {
      logoSvg,
    }
  }
})
</script>

<style lang="scss">
$bg: #ccc;
body {
  background-color: $bg;
  // display: flex;
}

</style>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>