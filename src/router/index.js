import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import Student from '../components/StudentList.vue';
import AddStudent from '../components/AddStudent.vue';
import StudentDetails from '../components/StudentDetails.vue';
import Course from '../components/CourseList.vue';
import AddCourse from '../components/AddCourse.vue';

// Each routes object should have following:
// meta: { breadcrumb: [{labelName: string, iconSrc: string,
// link: string(empty if need to go back to calling site)}]}

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    redirect: '/',
  },
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/student',
    name: 'student',
    component: Student,
  },
  {
    path: '/student/:Id',
    name: 'studentDetails',
    component: StudentDetails,
  },
  {
    path: '/addStudent',
    name: 'addStudent',
    component: AddStudent,
  },
  {
    path: '/course',
    name: 'course',
    component: Course,
  },
  {
    path: '/addCourse',
    name: 'addCourse',
    component: AddCourse,
  }
];

const router = new VueRouter({
  mode: 'history',
  base: '/eventhub/',
  routes,
});

export default router;
