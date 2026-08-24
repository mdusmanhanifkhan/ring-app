import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Header from "./Header";
import RingModel from "../../3d-model/RingModel";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "none",
        },

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=3000",
          scrub: true,
        },
      });

      tl.to(ringRef.current, {
        x: 400,
        y: 600,
      });

      tl.to(ringRef.current, {
        x: -30,
        y: 1300,
      });

      tl.to(ringRef.current, {
        x: 0,
        y: 1950,
      });

      tl.to(ringRef.current, {
        x: 0,
        y: 2600,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="h-full w-full">
      <Header />

      <div ref={sectionRef} className="relative h-[80vh] md:h-screen w-full">
        {/* Background Glow */}
        <div
          className="
            absolute
            -top-12
            left-1/2
            h-125
            w-full
            -translate-x-1/2
            bg-[radial-gradient(circle,rgba(33,82,141,0.6)_0%,rgba(33,82,141,0.3)_20%,rgba(0,0,0,0)_120%)]
            blur-2xl
          "
        />

        {/* Background Dots */}
        <div
          className="
            absolute
            left-1/2
            top-[-10%]
            -translate-x-1/2
          "
        >
          <div className="h-130 w-232.75">
            <img
              src="/images/bg-dot.png"
              alt=""
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        {/* Bottom Rainbow */}
        <div className="hidden md:block">
          <img
          src="/images/white-rainbow.png"
          alt=""
          className="absolute md:bottom-0 w-full"
        />
        </div>

        {/* Hero Content */}
        <div
          className="relative z-10 flex flex-col gap-2 items-center justify-center pt-25 md:pt-30 lg:pt-56 text-white
          "
        >
          <span
            className="text-[9px] font-medium uppercase tracking-[0.35em] text-muted sm:text-[11px] sm:tracking-[0.4em]">
            Timeless • Refined • Iconic
          </span>

          <h1
            className="max-w-5xl text-center font-serif text-[32px] font-semibold italic leading-[1.05] tracking-[-0.04em] text-primary sm:text-[56px] md:text-[68px] lg:text-[76px]">
            Crafted to Be
            <span className="text-accent"> Your Forever</span>
          </h1>

          <p
            className="max-w-2xl text-center text-[12px] leading-6 text-secondary sm:text-[15px] sm:leading-7 md:text-[16px]
            "
          >
            Discover beautifully crafted engagement and fine jewelry rings
            designed to celebrate the moments that last a lifetime.
          </p>
        </div>

        {/* 3D Ring */}
        <div className="relative h-full w-full">
          <div ref={ringRef} className="absolute -top-48 z-40 h-full w-full scale-[0.9] md:scale-100">
            <RingModel />
          </div>

          {/* Ring Light */}
          <svg
            width="633"
            height="1211"
            viewBox="0 0 633 1211"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="
              absolute
              left-1/2
              top-[-70%]
              z-0
              -translate-x-1/2
            "
          >
            <use href="/svg/ring-light.svg#ring-light" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
