<template>
    <div class="hello">
        <h2>Add Course</h2>
        
        <div @click="RouteToHome()" class="cursor">Back</div>
    </div>
</template>

<script>
export default {
  name: 'AddCourse',
  methods: {
    RouteToHome() {
      this.$router.push({
        name: 'home'
      });
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.cursor {
    cursor: pointer;
}
</style>
