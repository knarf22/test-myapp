import React, { useEffect, useRef } from "react";

const SkewedHero: React.FC = () => {
  const navRef = useRef<HTMLElement | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const nav = navRef.current;
    const hero = heroRef.current;
    if (!nav || !hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          // hero is out of view -> "colored" state
          // remove the backdrop invert
          nav.classList.remove("backdrop-invert");

          // optional: add a subtle background when scrolled (uncomment if desired)
          // nav.classList.add("bg-black/40");
        } else {
          // hero is in view -> "transparent" state (inverted backdrop)
          nav.classList.add("backdrop-invert");

          // optional: remove background if you added one above
          // nav.classList.remove("bg-black/40");
        }
      },
      {
        root: null,
        threshold: 0,
        rootMargin: `-${nav.getBoundingClientRect().height}px 0px 0px 0px`,
      }
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      <nav
        ref={navRef}
        id="navbar"
        // base Tailwind classes — starts in the "transparent" (inverted) state
        className="fixed top-0 left-0 w-full p-4 z-10 transition-colors duration-500 bg-transparent text-white backdrop-invert"
      >
        My Navbar
      </nav>

      <section
        ref={heroRef}
        className="relative flex items-center justify-center h-screen text-white overflow-hidden"
      >
        <h1 className="text-4xl font-bold z-10">Hero Section</h1>
        {/* Purple skew */}
        <div className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%] -z-10 -skew-y-6 bg-purple-600" />
        {/* White skew */}
        <div className="absolute w-[200%] h-[200%] top-[50%] left-[-50%] -z-10 -skew-y-6 bg-white" />
      </section>

      <section className="h-[200vh] bg-[#111] text-white p-8">
        <h2 className="text-2xl mb-4">Scroll Down</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit
          amet felis nec elit facilisis convallis.
        </p>
      </section>
    </div>  
  );
};

export default SkewedHero;
