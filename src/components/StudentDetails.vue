<template>
    <div class="hello">
        <h2>Student Details</h2>
        <div>{{ studentData.Name }}</div>
        <div>{{ studentData.Description }}</div>
        <div @click="RouteToStudentList()" class="cursor">Back</div>
    </div>
</template>

<script>
import Student from '@/data/student.json';
export default {
  name: 'StudentDetails',
  data() {
    return {
      studentDataList: Student,
      Id: this.$route.params.id,
    };
  },
  computed: {
      studentData() {
          return this.studentDataList.find(t => t.Id === this.Id);
      },
  },
  methods: {  
    RouteToStudentList() {
      this.$router.push({
        name: 'student'
      });
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cursor {
    cursor: pointer;
}
</style>
