import {createWebHashHistory, createRouter} from 'vue-router'
import Home from "@/pages/Home";
import About from "@/pages/About";
import Course from "@/pages/Course";
import Mentor from "@/pages/Mentor";
import Contact from "@/pages/Contact";
import Join from "@/pages/Join";
import CoursesPageOne from "@/pages/CoursesPageOne";
import CoursesPageTwo from "@/pages/CoursesPageTwo";

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        name: 'About',
        path: '/about',
        component: About
    },
    {
        name: 'Course',
        path: '/course',
        component: Course
    },
    {
        name: 'Course One',
        path: '/courses-page-one',
        component: CoursesPageOne
    },
    {
        name: 'Course Two',
        path: '/courses-page-two',
        component: CoursesPageTwo
    },
    {
        name: 'Mentor',
        path: '/mentor',
        component: Mentor
    },
    {
        name: 'Contact',
        path: '/contact',
        component: Contact
    },
    {
        name: 'Join',
        path: '/join',
        component: Join
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});
export default router