<template>
  <div>
    <h1>Hello {{ name }}</h1>
    <p>It is {{ timestamp }} </p>
  </div>
</template>

<script>
export default {
  data() {
    return { name: 'Jane Doe' }
  },
  computed: {
    timestamp() {
      let dt = new Date(Date.now());
      return dt.toTimeString();
    }
  }
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>
