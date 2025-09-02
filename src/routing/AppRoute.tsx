// AppRoutes.tsx
import type { Transition } from "framer-motion";
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ROUTES } from "./routes";
import Layout from "../react-lessons/pages/Layout";
import SkewedHero from "../tailwind-lessons/Skewed";
import SignupUI from "../react-lessons/pages/SignUpUI";
import LoginUI from "../react-lessons/pages/LoginUI";
import { AnimatePresence, motion } from "framer-motion";

const pageVariants = {
    initial: { opacity: 0, x: 100 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: -100 },
};

const pageTransition: Transition = {
    type: "tween",
    ease: "easeInOut",
    duration: 0.6,
};

const AppRoutes: React.FC = () => {
    const location = useLocation();
    const isAnimatedRoute =
        location.pathname === "/login" || location.pathname === "/sign-up";

    return (
        <AnimatePresence mode="wait">
            {isAnimatedRoute ? (
                <motion.div
                    key={location.pathname}
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                    className="flex justify-center items-center min-h-screen bg-gray-50"
                >
                    <Routes location={location} key={location.pathname}>
                        <Route path="/login" element={<LoginUI />} />
                        <Route path="/sign-up" element={<SignupUI />} />
                    </Routes>
                </motion.div>
            ) : (
                <Routes location={location} key={location.pathname}>
                    <Route path="/skewed" element={<SkewedHero />} />
                    <Route path="/" element={<Layout />}>
                        {ROUTES.map(({ path, element }) =>
                            path === "/" ? (
                                <Route key={path} index element={element} />
                            ) : (
                                <Route
                                    key={path}
                                    path={path.substring(1)}
                                    element={element}
                                />
                            )
                        )}
                    </Route>
                </Routes>
            )}
        </AnimatePresence>
    );
};

export default AppRoutes;
