// AppRoutes.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./routes";
import Layout from "../pages/Layout";


const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<Layout />}>
                {ROUTES.map(({ path, element }) =>
                    path === "/" ? (
                        <Route
                            key={path}
                            index
                            element={element}
                        />
                    ) : (
                        <Route
                            key={path}
                            path={path.substring(1)}
                            element={element} />
                    )
                )}
            </Route>
        </Routes>
    );
};

export default AppRoutes;
