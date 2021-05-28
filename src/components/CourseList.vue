<template>
    <div class="hello">
        <h2>Course List</h2>
        <table>
            <tr>
                <th>Name</th>
                <th>Description</th>
            </tr>
            <tr v-for="courseData in courseDataList" :key="courseData.Id">
                <td>{{ courseData.Name }}</td>
                <td>{{ courseData.Description }}</td>
            </tr>
        </table>
        
        <div @click="RouteToHome()" class="cursor">Back</div>
    </div>
</template>

<script>
import Course from '@/data/courses.json';
export default {
  name: 'CourseList',
  data() {
    return {
      courseDataList: Course
    };
  },
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

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
.cursor {
    cursor: pointer;
}
</style>
