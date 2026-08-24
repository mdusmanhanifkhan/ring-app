import { useEffect, useRef } from "react";
import "./App.css";
import HeroSection from "./components/universal/HeroSection";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import CollectionIntro from "./components/sections/CollectionIntro";
import Craftsmanship from "./components/sections/Craftsmanship";
import FeaturedCollection from "./components/sections/FeaturedCollection";
import BestSellers from "./components/sections/BestSellers";
import CraftedToPerfection from "./components/sections/CraftedToPerfection";
import Newsletter from "./components/sections/Newsletter";
import Footer from "./components/universal/Footer";

function App() {
  const eclipseSectionRef = useRef(null);
  const sunCircleRef = useRef(null);
  const ringWrapperRef = useRef(null);

  const galleryRef = useRef(null);
  const gallerySectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // ==========================================
      // YOUR ECLIPSE ANIMATION
      // ==========================================

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: eclipseSectionRef.current,
          start: "top top",
          end: "+=1800",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.fromTo(
        ringWrapperRef.current,
        {
          x: 500,
          scale: 0.75,
          opacity: 0,
        },
        {
          x: 0,
          scale: 1,
          opacity: 1,
          duration: 0.35,
          ease: "none",
        },
      );

      tl.fromTo(
        sunCircleRef.current,
        {
          scale: 1.4,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.25,
          ease: "none",
        },
        "<",
      );

      tl.to(sunCircleRef.current, {
        scale: 1.5,
        duration: 0.2,
        ease: "none",
      });

      tl.to(sunCircleRef.current, {
        scale: 1.55,
        duration: 0.2,
        ease: "none",
      });

      // ==========================================
      // HORIZONTAL PRODUCT SCROLL
      // ==========================================

      const gallery = galleryRef.current;
      const gallerySection = gallerySectionRef.current;

      if (gallery && gallerySection) {
        const getScrollAmount = () => {
          return gallery.scrollWidth - window.innerWidth;
        };

        gsap.to(gallery, {
          x: () => -getScrollAmount(),

          ease: "none",

          scrollTrigger: {
            trigger: gallerySection,

            start: "top top",

            end: () => `+=${getScrollAmount()}`,

            scrub: 1,

            pin: true,

            anticipatePin: 1,

            invalidateOnRefresh: true,
          },
        });
      }
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className="flex flex-col gap-30 overflow-clip relative h-auto">
      <div className="bg-[#5C698A] blur-[200px] w-142 h-142 absolute top-237.5 rounded-full z-0 -right-80"></div>
      <div className="bg-[#5C698A] blur-[200px] w-100 h-100 absolute top-362.5 rounded-full z-0 -left-80"></div>
      <HeroSection />
      <CollectionIntro />
      <Craftsmanship
        sunCircleRef={sunCircleRef}
        ringWrapperRef={ringWrapperRef}
      />
      <FeaturedCollection ringWrapperRef={ringWrapperRef} />
      <section className="relative z-20 bg-[#111]">
        <CraftedToPerfection />
        <BestSellers
          gallerySectionRef={gallerySectionRef}
          galleryRef={galleryRef}
        />
        <Newsletter />
        <Footer />
      </section>
    </div>
  );
}

export default App;
