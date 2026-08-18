import { useEffect, useRef } from "react";
import "./App.css";
import HeroSection from "./components/universal/HeroSection";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ringImage from "/images/ring.png";
import contactUsSectionImage from "/images/contact-us-section-image.png";

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
      <div className="bg-[#5C698A] blur-[200px] w-142 h-142 absolute top-237.5 rounded-full z-0 -right-80"></div>
      {/* <div className="bg-[#5C698A] blur-[200px] w-100 h-100 absolute top-362.5 rounded-full z-0 -right-80"></div> */}
      <div className="bg-[#5C698A] blur-[200px] w-100 h-100 absolute top-362.5 rounded-full z-0 -left-80"></div>
      {/* <div className="bg-[#5C698A] blur-[200px] w-100 h-100 absolute top-462.5 rounded-full z-0  left-1/2 -translate-x-1/2"></div> */}
      <HeroSection />
      {/* Second Section */}
      <div className="container mx-auto flex items-center gap-20 relative z-20">
        {/* LEFT CONTENT */}
        <div className="max-w-xl">
          {/* Small Label */}
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#c9a86a]" />

            <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#c9a86a]">
              The New Collection
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-5xl font-light leading-[1.05] tracking-[-0.03em] text-white md:text-6xl">
            Designed to Be
            <br />
            <span className="font-serif italic text-[#d6b477]">Remembered</span>
          </h2>

          {/* Description */}
          <p className="mt-7 max-w-md text-[15px] font-light leading-7 tracking-wide text-slate-300">
            Discover timeless pieces crafted with precision, elegance, and a
            passion for every detail.
          </p>

          {/* Button */}
          <button
            className="group mt-8 inline-flex items-center gap-5 rounded-full bg-white px-7 py-3.5
      text-sm
      font-medium
      text-black
      transition-all
      duration-300
      hover:bg-[#d6b477]
      hover:shadow-[0_0_30px_rgba(214,180,119,0.25)]
    "
          >
            <span>Explore Collection</span>

            <span
              className="
        text-lg
        transition-transform
        duration-300
        group-hover:translate-x-1
      "
            >
              →
            </span>
          </button>
        </div>

        {/* RIGHT SIDE (RING) */}
        <div className="flex-1 flex justify-center">
          <div className="w-100 h-100 sticky top-32">
            {/* ring will come here */}
          </div>
        </div>
      </div>
      {/* Third Section */}
      <div className="container mx-auto w-full">
        <div className="text-white text-center mt-10 w-full flex flex-col gap-5 justify-center items-center">
          <p className="text-3xl font-semibold">New Way Of Thinking</p>
          <p className="max-w-150 text-center text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            everLorem Ipsum is{" "}
          </p>
        </div>

     <div className="relative mx-auto h-170 w-170 mt-5">
  <div
    className="
      relative
      z-10
      h-full
      w-full
      rounded-full
      bg-[#a78554]
      before:absolute
      before:top-[1px]
      before:left-[-0.2px]
      before:h-full
      before:w-full
      before:rounded-full
      before:bg-black
      before:content-['']
      before:-z-10
    "
  />
</div>
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

      <section className="relative z-20 bg-[#111]">
        <div className="container mx-auto w-full">
          <div className="flex justify-center gap-10 py-10">
            <div className="flex gap-5">
              <div className="bg-gray-200 w-120 h-100 rounded-xl"></div>
              <div className="flex flex-col gap-4">
                <div className="bg-gray-200 w-30 h-30 rounded-xl"></div>
                <div className="bg-gray-200 w-30 h-30 rounded-xl"></div>
                <div className="bg-gray-200 w-30 h-30 rounded-xl"></div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-3 w-full max-w-150 text-white">
              <h3 className="text-amber-500">Our CraftManShip</h3>
              <h1 className="text-4xl font-serif font-semibold">
                Built On Passion, <br /> Crafted to Perfection
              </h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
                aliquid, qui sint eligendi quibusdam ea magnam ut magni, rem,
                porro repellat quisquam ullam! Expedita, eos fuga commodi fugit
                dignissimos libero.Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Ad aliquid, qui sint eligendi quibusdam ea
                magnam ut magni, rem, porro repellat quisquam ullam! Expedita,
                eos fuga commodi fugit dignissimos libero.Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Ad aliquid, qui sint.
              </p>

              <button className="mt-4 px-6 py-3 bg-white text-black rounded-full w-fit hover:bg-gray-200 transition">
                Explore More
              </button>
            </div>
          </div>
        </div>

        <div className="relative w-full overflow-hidden">
          {/* TITLE */}
          <div className="text-center text-white pt-10 pb-6">
            <p className="text-sm tracking-widest text-gray-400">BEST SELLER</p>

            <p className="text-3xl font-semibold mt-2">Our Most Loved Pieces</p>
          </div>

          {/* HORIZONTAL SCROLL */}
          <div ref={galleryRef} className="flex w-max gap-3 px-24">
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                className="group relative w-64 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white/5 p-2 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#5C698A]"
              >
                {/* Glow */}
                <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-[#5C698A]/40 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                {/* Image */}
                <div className="relative flex justify-center">
                  <img
                    src={ringImage}
                    alt="ring image"
                    className="h-44 transition duration-500 group-hover:scale-110 group-hover:rotate-6"
                  />
                </div>

                {/* Content */}
                <div className="mt-8 text-center">
                  <h3 className="text-2xl font-semibold text-white">
                    Premium Ring
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-gray-400">$1,250</p>

                  <button className="mt-3 rounded-full border border-[#5C698A] px-6 py-1 text-white transition hover:bg-[#5C698A]">
                    Explore
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto">
          <div className="flex gap-5 items-center bg-[#2020203a] rounded-2xl overflow-clip">
            <div className="w-full max-w-200">
              <img
                src={contactUsSectionImage}
                alt="image of ring in stone"
                className="w-full h-full object-fill"
              />
            </div>
            <div className="space-y-1.5">
              <p className="text-amber-500">STAY UPDATED</p>
              <p className="text-4xl  text-white">Be The First To Know</p>
              <p className=" text-white">
                Subscribe to get special offer, free giveaway, <br /> and
                once-in-o-WeTime Offer
              </p>
              <button className="mt-3 rounded-full border border-[#5C698A] px-6 py-1 text-white transition hover:bg-[#5C698A]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
