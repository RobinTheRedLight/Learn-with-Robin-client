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
import Lectures from "../Pages/Lectures/Lectures";
import SelectedCourses from "../Pages/SelectedCourses/SelectedCourses";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "*",
    element: <h1 className="text-7xl text-center">404 Not Found</h1>,
  },
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://learn-with-robin-server.vercel.app/"),
      },
      {
        path: "/:id",
        element: <SelectedCourses></SelectedCourses>,
        loader: ({ params }) =>
          fetch(`https://learn-with-robin-server.vercel.app/${params.id}`),
      },
    ],
  },
  {
    path: "/courses",
    element: <CourseLayout></CourseLayout>,
    children: [
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/courses/:id",
        element: <Course></Course>,
        loader: ({ params }) =>
          fetch(
            `https://learn-with-robin-server.vercel.app/courses/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/register",
    element: <Registration></Registration>,
  },
  {
    path: "/checkout/:id",
    element: (
      <PrivateRoute>
        <CheckoutPage></CheckoutPage>
      </PrivateRoute>
    ),
    loader: ({ params }) =>
      fetch(`https://learn-with-robin-server.vercel.app/checkout/${params.id}`),
  },
  {
    path: "/Blog",
    element: <Blog></Blog>,
  },
  {
    path: "/lectures/:id",
    element: <Lectures></Lectures>,
    loader: ({ params }) =>
      fetch(`https://learn-with-robin-server.vercel.app/courses/${params.id}`),
  },
]);
