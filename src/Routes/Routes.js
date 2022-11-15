import { createBrowserRouter } from "react-router-dom";
import CourseLayout from "../layout/CourseLayout";
import Main from "../layout/Main";
import Course from "../Pages/Course/Course";
import Courses from "../Pages/Courses/Courses";
import Home from "../Pages/Home/Home";
import SelectedCourses from "../Pages/SelectedCourses/SelectedCourses";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/')
            },
            {
                path: '/:id',
                element: <SelectedCourses></SelectedCourses>,
                loader: ({ params }) => fetch(`http://localhost:5000/${params.id}`)
            },
        ]
    },
    {
        path: '/courses',
        element: <CourseLayout></CourseLayout>,
        children: [
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/courses/:id',
                element: <Course></Course>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
            },
        ]
    }
])