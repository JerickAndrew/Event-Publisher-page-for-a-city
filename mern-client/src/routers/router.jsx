import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About"
import Blog from "../components/Blog"
import SingleEvent from "../shop/SingleEvent";
import DashboardLayout from "../dashboard/DashboardLayout";
import UploadEvent from "../dashboard/UploadEvent";
import ManageEvents from "../dashboard/ManageEvents";
import EditEvents from "../dashboard/EditEvents";
import Dashboard from "../dashboard/Dashboard";
import Signup from "../components/Signup";
import Login from "../components/Login"
import PrivateRoute from "../PrivateRoute/PrivateRoute"
import Logout from "../components/Logout";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
          path: '/',
          element: <Home/>
        },
        {
          path:"/shop",
          element: <Shop/>
        },
        {
          path: "/about",
          element: <About/>
        },
        {
          path: "/blog",
          element: <Blog/>
        },
        {
          path: "/event/:id",
          element: <SingleEvent/>,
          loader: ({params}) => fetch(`http://localhost:5000/event/${params.id}`)
        }
      ]
    },
    {
      path: "/admin/dashboard",
      element:<DashboardLayout/>,
      children:[
        {
          path:"/admin/dashboard/",
          element:<PrivateRoute></PrivateRoute>
        },
        {
          path:"/admin/dashboard/upload",
          element: <UploadEvent/>
          
        },
        {
          path:"/admin/dashboard/manage",
          element: <ManageEvents/>
        },
        {
          path:"/admin/dashboard/edit-events/:id",
          element: <EditEvents/>,
          loader: ({params}) => fetch(`http://localhost:5000/event/${params.id}`)
        }
      ]
    },
    {
      path: "sign-up",
      element: <Signup/>
    },
    {
      path: "login",
      element: <Login/>
    },
    {
      path: "logout",
      element: <Logout/>
    }
  ]);

  export default router;