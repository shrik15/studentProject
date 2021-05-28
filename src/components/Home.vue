<template>
  <div class="hello">
    <h3>Home</h3>
    <ul>
      <li @click="RouteToStudentList()" class="cursor">Student List</li>
      <li @click="RouteToCourseList()" class="cursor">Course List</li>
      <li @click="RouteToAddStudent()" class="cursor">Add Student</li>
      <li @click="RouteToAddCourse()" class="cursor">Add Course</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  },
  methods: {
    RouteToStudentList() {
      this.$router.push({
        name: 'student'
      });
    },
    RouteToCourseList() {
      this.$router.push({
        name: 'course'
      });
    },
    RouteToAddStudent() {
      this.$router.push({
        name: 'addStudent'
      });
    },
    RouteToAddCourse() {
      this.$router.push({
        name: 'addCourse'
      });
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.cursor {
    cursor: pointer;
}
</style>
