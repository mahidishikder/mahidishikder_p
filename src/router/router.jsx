import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../Layout";
import AboutMe from "../pages/AboutMe";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

export const router = createBrowserRouter ([
  {
    path:'/',
    element:<Layout></Layout>,
    children:[
      {
      path:'/',
      element:<Home></Home>
      },
      {
        path:'/about',
        element:<AboutMe></AboutMe>
      },
      {
        path:'/skills',
        element:<Skills></Skills>
      },
      {
        path:'/projects',
        element:<Projects></Projects>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      }
    ]
  }
])