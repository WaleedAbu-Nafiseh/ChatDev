<template>
  <div>
    <h1>Hello World</h1>
    <button @click="showPopup">Click me</button>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  methods: {
    showPopup() {
      alert('Thanks for clicking');
    }
  }
}
</script>
<style scoped>
h1 {
  color: #42b983;
}
button {
  margin-top: 20px;
}
</style>