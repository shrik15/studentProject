<template>
    <div class="hello">
        <h2>Student List</h2>
        <table>
            <tr>
                <th>Name</th>
                <th>Description</th>
            </tr>
            <tr v-for="studentData in studentDataList" :key="studentData.Id">
                <td @click="RouteToStudentDetails(studentData.Id)" class="cursor">{{ studentData.Name }}</td>
                <td>{{ studentData.Description }}</td>
            </tr>
        </table>
        
        <div @click="RouteToHome()" class="cursor">Back</div>
    </div>
</template>

<script>
import Student from '@/data/student.json';
export default {
  name: 'StudentList',
  data() {
    return {
      studentDataList: Student
    };
  },
  methods: {
    RouteToStudentDetails(id) {
      this.$router.push({
        name: 'studentDetails',
          params: {
            id,
          },
      });
    },
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
