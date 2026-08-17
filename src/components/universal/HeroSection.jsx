import RingModel from "../model/RingModel";
import Header from "./Header";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const sectionRef = useRef();

  const ringRef = useRef();
  const modelRef = useRef();
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=3000",
          scrub: true,
        },
      });

      // 1. Move to the right
      tl.to(ringRef.current, {
        x: 400,
        y: 600,
        ease: "none",
      });

      // 2. Slightly down while staying on the right
      // tl.to(ringRef.current, {
      //   x: 350,
      //   y: 1100,
      //   ease: "none",
      // });

      // 3. Come diagonally back to the center
      tl.to(ringRef.current, {
        x: -30,
        y: 1300,
        ease: "none",
      });

      // 4. Reach the center
      tl.to(ringRef.current, {
        x: 0,
        y: 1950,
        ease: "none",
      });

      // 5. Move straight down
      tl.to(ringRef.current, {
        x: 0,
        y: 2600,
        ease: "none",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full h-full">
      <Header />
      <div className="relative w-full h-screen z-20" ref={sectionRef}>
        {/* <span className="w-full h-20 bg-[#0F1014] blur-sm absolute -b"></span> */}
        <div
          className="absolute -top-72 left-1/2 -translate-x-1/2 w-full h-125
  bg-[radial-gradient(circle,rgba(33,82,141,0.6)_0%,rgba(33,82,141,0.3)_20%,rgba(0,0,0,0)_120%)]
  blur-2xl"
        ></div>
        {/* <div
          className="absolute -top-72 left-1/2 -translate-x-1/2 w-full h-125
  bg-[radial-gradient(circle,_rgba(33,82,141,0.6)_0%,_rgba(33,82,141,0.3)_20%,_rgba(0,0,0,0)_120%)]
  blur-2xl"
        ></div> */}

        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 z-50">
          <div className="w-232.75 h-130">
            <img
              src="/images/bg-dot.png"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <img
          src="/images/white-rainbow.png"
          className="w-full absolute bottom-0"
          alt=""
        />

        <div className="text-white flex flex-col justify-center items-center pt-36">
          <p className="text-[60px] font-semibold">New Way Of Thinking</p>
          <p className="max-w-200 text-center text-[16px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever
          </p>
        </div>

        <div className="relative w-full h-full">
          {/* <div ref={ringRef} className="absolute w-full h-full z-40 -top-72">
            <RingModel />
          </div> */}
          <div ref={ringRef} className="absolute w-full h-full z-40 -top-72">
            <div ref={modelRef} className="w-full h-full">
              <RingModel />
            </div>
          </div>
          <svg
            width="633"
            height="1211"
            viewBox="0 0 633 1211"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-[-70%] left-1/2 -translate-x-1/2 z-0"
          >
            <use href="/svg/ring-light.svg#ring-light" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
