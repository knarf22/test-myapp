// routesConfig.tsx
import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Tailwind from "../pages/Tailwind";


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
  }
];
