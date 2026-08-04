import { useEffect, useRef } from "react";
import "./App.css";
import HeroSection from "./components/universal/HeroSection";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

function App() {
  const galleryRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const gallery = galleryRef.current;
    const section = gallery.parentElement;

    const animation = gsap.to(gallery, {
      x: () => -(gallery.scrollWidth - section.offsetWidth),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        pin: true,
        start: "top top",
        end: () => "+=" + (gallery.scrollWidth - section.offsetWidth),
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    return () => animation.scrollTrigger?.kill();
  }, []);

  return (
    <div className="flex flex-col gap-30 overflow-clip relative h-auto">
      <div className="bg-[#5C698A] blur-[200px] w-142 h-142 absolute top-237.5 rounded-full z-0 -left-80"></div>
      <div className="bg-[#5C698A] blur-[200px] w-100 h-100 absolute top-362.5 rounded-full z-0 -right-80"></div>
      <div className="bg-[#5C698A] blur-[200px] w-100 h-100 absolute top-462.5 rounded-full z-0  left-1/2 -translate-x-1/2"></div>
      <HeroSection />
      <div className="container mx-auto flex items-center gap-20 relative z-20">
        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-6 max-w-125 text-white">
          <p className="text-sm tracking-widest text-gray-400 uppercase">
            New Collection
          </p>

          <h2 className="text-5xl font-semibold leading-tight">
            A New Way Of Thinking
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever.
          </p>

          <button className="mt-4 px-6 py-3 bg-white text-black rounded-full w-fit hover:bg-gray-200 transition">
            Explore More
          </button>
        </div>

        {/* RIGHT SIDE (RING) */}
        <div className="flex-1 flex justify-center">
          <div className="w-100 h-100 sticky top-32">
            {/* ring will come here */}
          </div>
        </div>
      </div>

      <div className="container mx-auto w-full">
        <div className="text-white text-center mt-10 w-full flex flex-col gap-5 justify-center items-center">
          <p className="text-3xl font-semibold">New Way Of Thinking</p>
          <p className="max-w-150 text-center text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            everLorem Ipsum is{" "}
          </p>
        </div>

        <div className="w-100 h-170">{/* ring */}</div>
      </div>
      <section className="sticky top-0 h-screen z-10 bg-black">
        <div className="container mx-auto flex items-center gap-20 relative z-20">
          {/* LEFT CONTENT */}
          <div className="flex flex-col gap-6 max-w-200 text-white">
            <p className="text-sm tracking-widest text-gray-400 uppercase">
              New Collection
            </p>

            <h2 className="text-5xl font-semibold leading-tight">
              A New Way Of Thinking
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever.
            </p>

            <button className="mt-4 px-6 py-3 bg-white text-black rounded-full w-fit hover:bg-gray-200 transition">
              Explore More
            </button>
          </div>

          {/* Center CONTENT */}
          <div className="flex-1 flex justify-center">
            <div className="w-100 h-250"></div>
          </div>

          {/* RIGHT SIDE (RING) */}

          <div className="flex flex-col gap-6 max-w-200 text-white">
            <p className="text-sm tracking-widest text-gray-400 uppercase">
              New Collection
            </p>

            <h2 className="text-5xl font-semibold leading-tight">
              A New Way Of Thinking
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever.
            </p>

            <button className="mt-4 px-6 py-3 bg-white text-black rounded-full w-fit hover:bg-gray-200 transition">
              Explore More
            </button>
          </div>
        </div>
      </section>

      <section className="relative z-20 bg-[#111] min-h-screen">
        <div className="container mx-auto w-full">
          <div className="text-white text-center mt-10 w-full flex flex-col gap-5 justify-center items-center">
            <p className="text-3xl font-semibold">New Way Of Thinking</p>
            <p className="max-w-150 text-center text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              everLorem Ipsum is{" "}
            </p>
            <p className="max-w-150 text-center text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              everLorem Ipsum is{" "}
            </p>
            <p className="max-w-150 text-center text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              everLorem Ipsum is{" "}
            </p>
            <p className="max-w-150 text-center text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              everLorem Ipsum is{" "}
            </p>
            <p className="max-w-150 text-center text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              everLorem Ipsum is{" "}
            </p>
            <p className="max-w-150 text-center text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              everLorem Ipsum is{" "}
            </p>
            <p className="max-w-150 text-center text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              everLorem Ipsum is{" "}
            </p>
            <p className="max-w-150 text-center text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              everLorem Ipsum is{" "}
            </p>
            <p className="max-w-150 text-center text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              everLorem Ipsum is{" "}
            </p>
            <p className="max-w-150 text-center text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              everLorem Ipsum is{" "}
            </p>
            <p className="max-w-150 text-center text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              everLorem Ipsum is{" "}
            </p>
            <p className="max-w-150 text-center text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              everLorem Ipsum is{" "}
            </p>
            <p className="max-w-150 text-center text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              everLorem Ipsum is{" "}
            </p>
            <p className="max-w-150 text-center text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              everLorem Ipsum is{" "}
            </p>
            <p className="max-w-150 text-center text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              everLorem Ipsum is{" "}
            </p>
          </div>
        </div>

        <div className="w-full min-w-full">
          <div className="text-center text-white">
            <p>Cards</p>
            <p>
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              everLorem Ipsum is{" "}
            </p>
          </div>
          <div className="w-full flex-1 flex items-center overflow-hidden">
            {/* Glow */}
            <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-[#5C698A]/40 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Ring */}
            <div ref={galleryRef} className="flex w-max gap-12 px-24 mt-10">
              {Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={index}
                  className="group relative w-80 shrink-0 overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#5C698A]"
                >
                  {/* Glow */}
                  <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-[#5C698A]/40 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                  {/* Image */}
                  <div className="relative flex justify-center">
                    <img
                      src="https://www.citypng.com/public/uploads/preview/png-marriage-engagement-wedding-gold-ring-704081695119088ixwjgq6eng.png?v=2026072011"
                      alt=""
                      className="h-44 transition duration-500 group-hover:scale-110 group-hover:rotate-6"
                    />
                  </div>

                  {/* Text */}
                  <div className="mt-8 text-center">
                    <h3 className="text-2xl font-semibold text-white">
                      Premium Ring
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-gray-400">
                      Crafted with timeless elegance and premium materials.
                    </p>

                    <button className="mt-8 rounded-full border border-[#5C698A] px-6 py-3 text-white transition hover:bg-[#5C698A]">
                      Explore
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
