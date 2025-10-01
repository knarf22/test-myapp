import React from "react";
import Home from "../react-lessons/pages/Home";
import About from "../react-lessons/pages/About";
import Contact from "../react-lessons/pages/Contact";
import Tailwind from "../react-lessons/pages/Tailwind";
import ReactLearning from "../react-lessons/pages/ReactLearning";
// import SkewedHero from "../tailwind-lessons/Skewed";
import Todo from "../react-lessons/todo/Todo";
import ContactForm from "../react-lessons/contact-form/ContactForm";
import { AdminContactTable } from "../react-lessons/contact-form/AdminView";
import BlogPage from "../react-lessons/mini-blog/BlogPage";
import CreateBlogPage from "../react-lessons/mini-blog/CreatePostPage";


interface RouteType {
  path: string;
  element: React.ReactElement;
  roles?: string[]; // We'll keep this for later use, but ignore for now
}

export const ROUTES: RouteType[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/tailwind-practice",
    element: <Tailwind />,
  },
  {
    path: "/react-learning",
    element: <ReactLearning />,
  },
  {
    path : "/todo",
    element : <Todo />
  },
  {
    path : "/contact-form",
    element : <ContactForm />
  },
    {
    path : "/adminView-form",
    element : <AdminContactTable />
  },
    {
    path : "/blog-post",
    element : <CreateBlogPage />
  },
    {
    path : "/blog-list",
    element : <BlogPage />
  }
];
