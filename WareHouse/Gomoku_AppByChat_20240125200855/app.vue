
<template>
  <div id="app">
    <hello-world></hello-world>
  </div>
</template>
<script>
import HelloWorld from './components/HelloWorld.vue'; // Ensure this path is correct
export default {
  name: 'App',
  components: {
    HelloWorld // This registers the HelloWorld component for use in the template
  }
}
</script>
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