import { createBrowserRouter } from "react-router-dom";
import CourseLayout from "../layout/CourseLayout";
import Main from "../layout/Main";
import LoginPage from "../Login/LoginPage/LoginPage";
import Registration from "../Login/Registration/Registration";
import Blog from "../Pages/Blog/Blog";
import CheckoutPage from "../Pages/CheckoutPage/CheckoutPage";
import Course from "../Pages/Course/Course";
import Courses from "../Pages/Courses/Courses";
import Home from "../Pages/Home/Home";
import SelectedCourses from "../Pages/SelectedCourses/SelectedCourses";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '*',
        element: <h1 className="text-7xl text-center">404 Not Found</h1>
    },
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
    },
    {
        path: '/login',
        element: <LoginPage></LoginPage>
    },
    {
        path: '/register',
        element: <Registration></Registration>
    },
    {
        path: '/checkout/:id',
        element: <PrivateRoute><CheckoutPage></CheckoutPage></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/checkout/${params.id}`)
    },
    {
        path: '/Blog',
        element: <Blog></Blog>
    }

])