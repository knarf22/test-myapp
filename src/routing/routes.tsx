import React from "react";
import Home from "../react-lessons/pages/Home";
import About from "../react-lessons/pages/About";
import Contact from "../react-lessons/pages/Contact";
import Tailwind from "../react-lessons/pages/Tailwind";
import ReactLearning from "../react-lessons/pages/ReactLearning";
import SkewedHero from "../tailwind-lessons/Skewed";


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
  }
];
