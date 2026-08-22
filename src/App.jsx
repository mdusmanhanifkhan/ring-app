import { useEffect, useRef } from "react";
import "./App.css";
import HeroSection from "./components/universal/HeroSection";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ringImage from "/images/ring.png";
import contactUsSectionImage from "/images/contact-us-section-image.png";

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
      {/* <div className="bg-[#5C698A] blur-[200px] w-100 h-100 absolute top-362.5 rounded-full z-0 -right-80"></div> */}
      <div className="bg-[#5C698A] blur-[200px] w-100 h-100 absolute top-362.5 rounded-full z-0 -left-80"></div>
      {/* <div className="bg-[#5C698A] blur-[200px] w-120 h-120 absolute top-500.5 rounded-full z-0 -right-80"></div> */}
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
      {/* =========================================
    THIRD SECTION
========================================= */}

      <section className="relative min-h-screen w-full overflow-hidden">
        {/* subtle background atmosphere */}
        <div
          className="
      pointer-events-none
      absolute
      left-1/2
      top-[45%]
      h-[600px]
      w-[600px]
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      bg-[#c9a86a]/[0.035]
      blur-[140px]
    "
        />

        {/* =========================================
      TOP CONTENT
  ========================================= */}

        <div
          className="
      relative
      z-20
      mx-auto
      flex
      max-w-3xl
      flex-col
      items-center
      px-6
      pt-10
      text-center
    "
        >
          {/* Small Label */}

          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#c9a86a]" />

            <span
              className="
          text-[11px]
          font-medium
          uppercase
          tracking-[0.28em]
          text-[#c9a86a]
        "
            >
              The Art of Craftsmanship
            </span>

            <span className="h-px w-10 bg-[#c9a86a]" />
          </div>

          {/* Heading */}

          <h2
            className="
        text-5xl
        font-light
        leading-[1.05]
        tracking-[-0.03em]
        text-white
        md:text-6xl
      "
          >
            Crafted to
            <span className="font-serif italic text-[#d6b477]">
              {" "}
              Perfection
            </span>
          </h2>

          {/* Small decorative line */}

          <div className="mt-5 flex items-center gap-3">
            <span className="h-px w-14 bg-[#c9a86a]/40" />

            <span className="text-[10px] text-[#d6b477]">✦</span>

            <span className="h-px w-14 bg-[#c9a86a]/40" />
          </div>

          {/* Description */}

          <p
            className="
        mt-6
        max-w-lg
        text-[14px]
        font-light
        leading-7
        tracking-wide
        text-slate-300
      "
          >
            From the finest materials to masterful craftsmanship, every ring is
            a symbol of dedication, passion, and timeless elegance.
          </p>
        </div>

        {/* =========================================
      RING + ECLIPSE
  ========================================= */}

        <div
          className="
      relative
      mx-auto
      mt-2
      h-[520px]
      w-[520px]
      md:h-[600px]
      md:w-[600px]
    "
        >
          {/* =====================================
        ECLIPSE GLOW
    ===================================== */}

          <div
            ref={sunCircleRef}
            className="
        absolute
        left-1/2
        top-[52%]
        h-[420px]
        w-[420px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        scale-50
        opacity-0
        pointer-events-none
        z-0
      "
          >
            {/* Main golden aura */}

            <div
              className="
          absolute
          inset-0
          rounded-full
          bg-[radial-gradient(circle,rgba(214,180,119,0.08)_35%,rgba(214,180,119,0.32)_58%,rgba(214,180,119,0.12)_70%,transparent_78%)]
          blur-xl
        "
            />

            {/* Bright eclipse ring */}

            <div
              className="
          absolute
          inset-[45px]
          rounded-full
          border-[3px]
          border-[#f3d49a]
          shadow-[0_0_20px_8px_rgba(214,180,119,0.55),0_0_70px_25px_rgba(214,180,119,0.28)]
        "
            />

            {/* Outer light */}

            <div
              className="
          absolute
          -inset-[30px]
          rounded-full
          border
          border-[#d6b477]/30
          blur-md
        "
            />

            {/* Far outer glow */}

            <div
              className="
          absolute
          -inset-[80px]
          rounded-full
          border
          border-[#d6b477]/10
          blur-2xl
        "
            />
          </div>

          {/* =====================================
        3D RING
    ===================================== */}

          <div
            ref={ringWrapperRef}
            className="
        absolute
        left-1/2
        top-[53%]
        z-10
        flex
        h-[500px]
        w-[500px]
        -translate-x-1/2
        -translate-y-1/2
        items-center
        justify-center
      "
          >
            {/* 
        PUT YOUR EXISTING 3D CANVAS / RING MODEL HERE

        Example:

        <Canvas>
          ...
        </Canvas>
      */}
          </div>

          {/* =====================================
        BOTTOM GOLDEN LIGHT
    ===================================== */}

          <div
            className="
        pointer-events-none
        absolute
        bottom-[2%]
        left-1/2
        z-0
        h-[80px]
        w-[420px]
        -translate-x-1/2
        rounded-full
        bg-[#d6b477]/20
        blur-[55px]
      "
          />
        </div>
      </section>

      {/* =========================================
    PREMIUM COLLECTION SECTION
========================================= */}

      <section className="sticky top-0 z-10 h-screen overflow-hidden bg-black">
        {/* Subtle center atmosphere */}
        <div
          className="
      pointer-events-none
      absolute
      left-1/2
      top-1/2
      h-[620px]
      w-[620px]
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      bg-[#d6b477]/[0.025]
      blur-[120px]
    "
        />

        {/* Very subtle side glow */}
        <div
          className="
      pointer-events-none
      absolute
      left-1/2
      top-1/2
      h-[400px]
      w-[900px]
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      bg-[radial-gradient(ellipse,rgba(214,180,119,0.035)_0%,transparent_70%)]
    "
        />

        <div
          className="
      relative
      z-20
      container
      mx-auto
      flex
      h-full
      items-center
      gap-16
      px-6
      lg:gap-20
    "
        >
          {/* =====================================
        LEFT CONTENT
    ===================================== */}

          <div className="flex w-[30%] flex-col items-start text-white">
            {/* Label */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#d6b477]/70" />

              <span
                className="
            text-[10px]
            font-medium
            uppercase
            tracking-[0.32em]
            text-[#d6b477]
          "
              >
                The New Collection
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
          max-w-md
          text-4xl
          font-light
          leading-[1.08]
          tracking-[-0.035em]
          text-white
          md:text-5xl
          lg:text-[54px]
        "
            >
              Designed to Be
              <br />
              <span
                className="
            font-serif
            italic
            text-[#d6b477]
          "
              >
                Remembered
              </span>
            </h2>

            {/* Decorative detail */}
            <div className="mt-6 flex items-center gap-2">
              <span className="h-px w-12 bg-white/10" />

              <span className="text-[9px] text-[#d6b477]">✦</span>

              <span className="h-px w-12 bg-white/10" />
            </div>

            {/* Description */}
            <p
              className="
          mt-6
          max-w-sm
          text-[14px]
          font-light
          leading-7
          tracking-wide
          text-white/55
        "
            >
              Discover timeless pieces crafted with precision, elegance, and a
              passion for every detail.
            </p>

            {/* Button */}
            <button
              className="
          group
          mt-8
          inline-flex
          items-center
          gap-5
          rounded-full
          bg-white
          px-7
          py-3.5
          text-sm
          font-medium
          text-black
          transition-all
          duration-500
          hover:bg-[#d6b477]
          hover:shadow-[0_0_35px_rgba(214,180,119,0.18)]
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

          {/* =====================================
        CENTER — RING
    ===================================== */}

          <div className="relative flex h-full flex-1 items-center justify-center">
            {/* Center golden aura */}

            <div
              className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-107.5
          w-107.5
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[radial-gradient(circle,rgba(214,180,119,0.06)_0%,rgba(214,180,119,0.025)_35%,transparent_70%)]
          blur-2xl
        "
            />

            {/* Outer decorative ring */}

            <div
              className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[430px]
          w-[430px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-[#d6b477]/[0.06]
        "
            />

            {/* Inner decorative ring */}

            <div
              className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[350px]
          w-[350px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-white/[0.025]
        "
            />

            {/* =================================
          YOUR 3D RING
      ================================= */}

            <div
              ref={ringWrapperRef}
              className="
          relative
          z-20
          flex
          h-[500px]
          w-[500px]
          items-center
          justify-center
        "
            >
              {/* PUT YOUR EXISTING CANVAS HERE */}

              {/*
        <Canvas>
          ...
        </Canvas>
        */}
            </div>

            {/* Ground reflection / light */}

            <div
              className="
          pointer-events-none
          absolute
          bottom-[18%]
          left-1/2
          z-10
          h-[35px]
          w-[300px]
          -translate-x-1/2
          rounded-[50%]
          bg-[#d6b477]/10
          blur-[35px]
        "
            />

            <div
              className="
          pointer-events-none
          absolute
          bottom-[17%]
          left-1/2
          z-10
          h-px
          w-[180px]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-[#d6b477]/20
          to-transparent
          blur-[1px]
        "
            />
          </div>

          {/* =====================================
        RIGHT CONTENT
    ===================================== */}

          <div className="flex w-[30%] flex-col items-start text-white">
            {/* Label */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#d6b477]/70" />

              <span
                className="
            text-[10px]
            font-medium
            uppercase
            tracking-[0.32em]
            text-[#d6b477]
          "
              >
                The New Collection
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
          max-w-md
          text-4xl
          font-light
          leading-[1.08]
          tracking-[-0.035em]
          text-white
          md:text-5xl
          lg:text-[54px]
        "
            >
              Designed to Be
              <br />
              <span
                className="
            font-serif
            italic
            text-[#d6b477]
          "
              >
                Remembered
              </span>
            </h2>

            {/* Decorative detail */}
            <div className="mt-6 flex items-center gap-2">
              <span className="h-px w-12 bg-white/10" />

              <span className="text-[9px] text-[#d6b477]">✦</span>

              <span className="h-px w-12 bg-white/10" />
            </div>

            {/* Description */}
            <p
              className="
          mt-6
          max-w-sm
          text-[14px]
          font-light
          leading-7
          tracking-wide
          text-white/55
        "
            >
              Discover timeless pieces crafted with precision, elegance, and a
              passion for every detail.
            </p>

            {/* Button */}
            <button
              className="
          group
          mt-8
          inline-flex
          items-center
          gap-5
          rounded-full
          bg-white
          px-7
          py-3.5
          text-sm
          font-medium
          text-black
          transition-all
          duration-500
          hover:bg-[#d6b477]
          hover:shadow-[0_0_35px_rgba(214,180,119,0.18)]
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
        </div>
      </section>

      <section className="relative z-20 bg-[#111]">
        {/* =========================================
    CRAFTSMANSHIP SECTION
========================================= */}

        <section className="relative bg-[#111111] py-24 overflow-hidden">
          {/* Background atmosphere */}
          <div
            className="
      pointer-events-none
      absolute
      left-[-180px]
      top-1/2
      h-[500px]
      w-[500px]
      -translate-y-1/2
      rounded-full
      bg-[#d6b477]/[0.025]
      blur-[130px]
    "
          />

          <div
            className="
      pointer-events-none
      absolute
      right-[-180px]
      bottom-[-150px]
      h-[450px]
      w-[450px]
      rounded-full
      bg-[#d6b477]/[0.02]
      blur-[130px]
    "
          />

          <div className="container relative z-10 mx-auto w-full px-6">
            <div className="flex items-center justify-center gap-12 lg:gap-14">
              {/* =====================================
          LEFT — IMAGE GALLERY
      ===================================== */}

              <div className="flex shrink-0 gap-4">
                {/* Main Image */}

                <div
                  className="
            group
            relative
            h-[430px]
            w-[520px]
            overflow-hidden
            rounded-2xl
            border
            border-white/10
            bg-black
          "
                >
                  <img
                    src="/images/craftsmanship-main.png"
                    alt="Handcrafted luxury ring"
                    className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-[1.03]
            "
                  />

                  {/* Image overlay */}

                  <div
                    className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-black/30
              via-transparent
              to-transparent
            "
                  />

                  {/* Gold corner accent */}

                  <div
                    className="
              pointer-events-none
              absolute
              bottom-4
              left-4
              h-8
              w-8
              border-b
              border-l
              border-[#d6b477]/50
            "
                  />

                  <div
                    className="
              pointer-events-none
              absolute
              right-4
              top-4
              h-8
              w-8
              border-r
              border-t
              border-[#d6b477]/50
            "
                  />
                </div>

                {/* =================================
            THUMBNAILS
        ================================= */}

                <div className="flex flex-col gap-4">
                  {/* Thumbnail 01 */}

                  <div
                    className="
              group
              relative
              h-[137px]
              w-[137px]
              cursor-pointer
              overflow-hidden
              rounded-xl
              border
              border-white/10
              bg-black
              transition-all
              duration-300
              hover:border-[#d6b477]/60
            "
                  >
                    <img
                      src="/images/craftsmanship-detail-1.png"
                      alt="Luxury ring detail"
                      className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-500
                group-hover:scale-110
              "
                    />

                    <div
                      className="
                absolute
                inset-0
                bg-black/10
                transition
                group-hover:bg-transparent
              "
                    />
                  </div>

                  {/* Thumbnail 02 */}

                  <div
                    className="
              group
              relative
              h-[137px]
              w-[137px]
              cursor-pointer
              overflow-hidden
              rounded-xl
              border
              border-white/10
              bg-black
              transition-all
              duration-300
              hover:border-[#d6b477]/60
            "
                  >
                    <img
                      src="/images/craftsmanship-detail-2.png"
                      alt="Jewelry craftsmanship"
                      className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-500
                group-hover:scale-110
              "
                    />

                    <div
                      className="
                absolute
                inset-0
                bg-black/10
                transition
                group-hover:bg-transparent
              "
                    />
                  </div>

                  {/* Thumbnail 03 */}

                  <div
                    className="
              group
              relative
              h-[137px]
              w-[137px]
              cursor-pointer
              overflow-hidden
              rounded-xl
              border
              border-white/10
              bg-black
              transition-all
              duration-300
              hover:border-[#d6b477]/60
            "
                  >
                    <img
                      src="/images/craftsmanship-detail-3.png"
                      alt="Handcrafted ring detail"
                      className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-500
                group-hover:scale-110
              "
                    />

                    <div
                      className="
                absolute
                inset-0
                bg-black/10
                transition
                group-hover:bg-transparent
              "
                    />
                  </div>
                </div>
              </div>

              {/* =====================================
          RIGHT — CONTENT
      ===================================== */}

              <div className="flex w-full max-w-[560px] flex-col items-start">
                {/* Label */}

                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#d6b477]" />

                  <p
                    className="
              text-[11px]
              font-medium
              uppercase
              tracking-[0.3em]
              text-[#d6b477]
            "
                  >
                    Our Craftsmanship
                  </p>
                </div>

                {/* Heading */}

                <h2
                  className="
            font-serif
            text-[48px]
            font-medium
            leading-[1.05]
            tracking-[-0.025em]
            text-white
            lg:text-[54px]
          "
                >
                  Built On Passion,
                  <br />
                  <span className="italic text-[#f0eee9]">
                    Crafted to Perfection
                  </span>
                </h2>

                {/* Decorative line */}

                <div className="mt-6 flex items-center gap-2">
                  <span className="h-px w-16 bg-[#d6b477]/60" />

                  <span className="text-[10px] text-[#d6b477]">✦</span>

                  <span className="h-px w-8 bg-[#d6b477]/20" />
                </div>

                {/* Description */}

                <p
                  className="
            mt-7
            max-w-[520px]
            text-[15px]
            font-light
            leading-7
            tracking-wide
            text-white/60
          "
                >
                  Every piece we create is a reflection of our dedication to
                  excellence. From the finest materials to masterful
                  craftsmanship, we bring passion, precision, and purpose into
                  every detail.
                </p>

                <p
                  className="
            mt-2
            max-w-[520px]
            text-[15px]
            font-light
            leading-7
            tracking-wide
            text-white/60
          "
                >
                  Because true beauty is never rushed — it's crafted.
                </p>

                {/* Button */}

                <button
                  className="
            group
            mt-8
            inline-flex
            items-center
            gap-5
            rounded-full
            bg-white
            px-7
            py-3.5
            text-sm
            font-medium
            text-black
            transition-all
            duration-300
            hover:bg-[#d6b477]
            hover:shadow-[0_0_30px_rgba(214,180,119,0.15)]
          "
                >
                  <span>Explore More</span>

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
            </div>
          </div>
        </section>

        {/* =========================================
    PREMIUM BEST SELLER SECTION
========================================= */}

        <div
          ref={gallerySectionRef}
          className="
    relative
    flex
    h-screen
    w-full
    flex-col
    justify-center
    overflow-hidden
    bg-[#111111]
  "
        >
          {/* =========================================
      BACKGROUND ATMOSPHERE
  ========================================= */}

          <div
            className="
      pointer-events-none
      absolute
      left-1/2
      top-1/2
      h-[700px]
      w-[1100px]
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      bg-[#d6b477]/[0.025]
      blur-[140px]
    "
          />

          <div
            className="
      pointer-events-none
      absolute
      left-0
      top-1/2
      h-[350px]
      w-[350px]
      -translate-y-1/2
      rounded-full
      bg-[#5C698A]/[0.04]
      blur-[120px]
    "
          />

          {/* =========================================
      TITLE
  ========================================= */}

          <div
            className="
      relative
      z-10
      mx-auto
      w-full
      max-w-5xl
      px-6
      text-center
    "
          >
            {/* Label */}

            <p
              className="
        text-[11px]
        font-medium
        uppercase
        tracking-[0.4em]
        text-[#d6b477]
      "
            >
              Best Seller
            </p>

            {/* Heading */}

            <h2
              className="
        mt-4
        font-serif
        text-5xl
        font-medium
        leading-none
        tracking-[-0.025em]
        text-white
        md:text-6xl
      "
            >
              Our Most Loved Pieces
            </h2>

            {/* Decorative line */}

            <div className="mt-5 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-[#d6b477]/40" />

              <span className="text-[9px] text-[#d6b477]">✦</span>

              <span className="h-px w-12 bg-[#d6b477]/40" />
            </div>

            {/* Description */}

            <p
              className="
        mx-auto
        mt-5
        max-w-2xl
        text-sm
        font-light
        leading-6
        tracking-wide
        text-white/40
      "
            >
              Discover our most cherished creations, crafted with exceptional
              materials, timeless design, and meticulous attention to every
              detail.
            </p>
          </div>

          {/* =========================================
      HORIZONTAL PRODUCT TRACK
  ========================================= */}

          <div
            className="
      relative
      z-10
      mt-12
      w-full
      overflow-hidden
    "
          >
            <div
              ref={galleryRef}
              className="
        flex
        w-max
        gap-6
        px-[6vw]
      "
            >
              {Array.from({ length: 10 }).map((_, index) => (
                <div
                  key={index}
                  className="
            group
            relative
            flex
            h-[290px]
            w-[470px]
            shrink-0
            overflow-hidden
            rounded-2xl
            border
            border-white/[0.08]
            bg-[#181818]
            transition-all
            duration-500
            hover:-translate-y-2
            hover:border-[#d6b477]/30
          "
                >
                  {/* =================================
              CARD GLOW
          ================================= */}

                  <div
                    className="
              pointer-events-none
              absolute
              -right-20
              -top-20
              h-56
              w-56
              rounded-full
              bg-[#d6b477]/10
              blur-[80px]
              opacity-0
              transition-opacity
              duration-700
              group-hover:opacity-100
            "
                  />

                  {/* =================================
              IMAGE
          ================================= */}

                  <div
                    className="
              relative
              flex
              w-[55%]
              items-center
              justify-center
            "
                  >
                    {/* Ring glow */}

                    <div
                      className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-44
                w-44
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#d6b477]/10
                blur-[60px]
              "
                    />

                    <img
                      src={ringImage}
                      alt="Premium luxury ring"
                      className="
                relative
                z-10
                w-[250px]
                object-contain
                transition-all
                duration-700
                ease-out
                group-hover:scale-110
                group-hover:rotate-3
              "
                    />
                  </div>

                  {/* =================================
              PRODUCT CONTENT
          ================================= */}

                  <div
                    className="
              relative
              z-10
              flex
              w-[45%]
              flex-col
              justify-center
              pr-8
            "
                  >
                    {/* Product number */}

                    <span
                      className="
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-[#d6b477]/50
              "
                    >
                      0{(index % 9) + 1}
                    </span>

                    {/* Product title */}

                    <h3
                      className="
                mt-4
                font-serif
                text-2xl
                font-medium
                leading-tight
                text-white
              "
                    >
                      Aurelia
                      <br />
                      Diamond Ring
                    </h3>

                    {/* Divider */}

                    <div className="my-4 h-px w-10 bg-[#d6b477]/40" />

                    {/* Description */}

                    <p
                      className="
                max-w-[170px]
                text-xs
                leading-5
                text-white/40
              "
                    >
                      Handcrafted elegance with a timeless diamond setting.
                    </p>

                    {/* Price */}

                    <p
                      className="
                mt-4
                text-sm
                font-medium
                tracking-wide
                text-[#d6b477]
              "
                    >
                      $1,250
                    </p>

                    {/* Button */}

                    <button
                      className="
                mt-4
                flex
                w-fit
                items-center
                gap-3
                rounded-full
                border
                border-white/15
                px-5
                py-2
                text-xs
                font-medium
                text-white
                transition-all
                duration-300
                hover:border-[#d6b477]
                hover:bg-[#d6b477]
                hover:text-black
              "
                    >
                      <span>Explore</span>

                      <span>→</span>
                    </button>
                  </div>

                  {/* =================================
              CORNER DETAILS
          ================================= */}

                  <div
                    className="
              pointer-events-none
              absolute
              bottom-4
              left-4
              h-7
              w-7
              border-b
              border-l
              border-[#d6b477]/30
            "
                  />

                  <div
                    className="
              pointer-events-none
              absolute
              right-4
              top-4
              h-7
              w-7
              border-r
              border-t
              border-[#d6b477]/30
            "
                  />
                </div>
              ))}
            </div>
          </div>

          {/* =========================================
      BOTTOM SCROLL INDICATOR
  ========================================= */}

          <div
            className="
      relative
      z-10
      mt-10
      flex
      items-center
      justify-center
      gap-4
    "
          >
            <span className="h-px w-12 bg-white/10" />

            <span
              className="
        text-[10px]
        uppercase
        tracking-[0.35em]
        text-white/25
      "
            >
              Scroll to explore
            </span>

            <span className="text-sm text-[#d6b477]">→</span>

            <span className="h-px w-12 bg-white/10" />
          </div>
        </div>

       {/* =========================================
    FINAL CTA / NEWSLETTER SECTION
========================================= */}

<section className="relative z-20 overflow-hidden bg-[#111111] px-6 py-24">

  {/* Background glow */}
  <div
    className="
      pointer-events-none
      absolute
      left-1/2
      top-1/2
      h-[500px]
      w-[500px]
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      bg-[#d6b477]/[0.035]
      blur-[130px]
    "
  />

  <div className="container relative mx-auto">

    <div
      className="
        relative
        flex
        min-h-[420px]
        overflow-hidden
        rounded-[28px]
        border
        border-white/[0.07]
        bg-[#151515]
      "
    >

      {/* =====================================
          LEFT — IMAGE
      ===================================== */}

      <div className="relative w-1/2 overflow-hidden">

        <img
          src={contactUsSectionImage}
          alt="Luxury diamond ring"
          className="
            h-full
            min-h-[420px]
            w-full
            object-cover
            transition-transform
            duration-1000
            hover:scale-105
          "
        />

        {/* Image gradient */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-transparent
            via-transparent
            to-[#151515]
          "
        />

        {/* Bottom gradient */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-32
            bg-gradient-to-t
            from-black/50
            to-transparent
          "
        />

        {/* Gold corner */}
        <div
          className="
            absolute
            left-6
            top-6
            h-10
            w-10
            border-l
            border-t
            border-[#d6b477]/50
          "
        />

        <div
          className="
            absolute
            bottom-6
            right-6
            h-10
            w-10
            border-b
            border-r
            border-[#d6b477]/50
          "
        />

      </div>


      {/* =====================================
          RIGHT — CONTENT
      ===================================== */}

      <div
        className="
          relative
          flex
          w-1/2
          flex-col
          justify-center
          px-14
          lg:px-20
        "
      >

        {/* Label */}
        <div className="mb-6 flex items-center gap-3">

          <span className="h-px w-8 bg-[#d6b477]" />

          <span
            className="
              text-[10px]
              font-medium
              uppercase
              tracking-[0.35em]
              text-[#d6b477]
            "
          >
            Stay Updated
          </span>

        </div>


        {/* Heading */}
        <h2
          className="
            max-w-xl
            text-4xl
            font-light
            leading-[1.05]
            tracking-[-0.035em]
            text-white
            md:text-5xl
          "
        >
          Be The First
          <br />
          <span className="font-serif italic text-[#d6b477]">
            To Know
          </span>
        </h2>


        {/* Description */}
        <p
          className="
            mt-6
            max-w-md
            text-[14px]
            font-light
            leading-7
            tracking-wide
            text-white/50
          "
        >
          Discover new collections, exclusive pieces, and private offers
          before anyone else. Join our world of timeless elegance.
        </p>


        {/* Newsletter */}
        <div className="mt-8 flex max-w-md items-center gap-2">

          <input
            type="email"
            placeholder="Your email address"
            className="
              h-12
              flex-1
              rounded-full
              border
              border-white/10
              bg-white/[0.03]
              px-5
              text-sm
              text-white
              outline-none
              placeholder:text-white/30
              transition
              focus:border-[#d6b477]/50
            "
          />

          <button
            className="
              group
              flex
              h-12
              items-center
              gap-3
              rounded-full
              bg-white
              px-6
              text-sm
              font-medium
              text-black
              transition-all
              duration-300
              hover:bg-[#d6b477]
              hover:shadow-[0_0_30px_rgba(214,180,119,0.15)]
            "
          >
            Subscribe

            <span
              className="
                text-base
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </button>

        </div>


        {/* Small privacy text */}
        <p className="mt-4 text-[10px] tracking-wide text-white/25">
          No spam. Only timeless pieces and exclusive updates.
        </p>

      </div>

    </div>

  </div>

</section>

{/* =========================================
    FOOTER
========================================= */}

<footer className="relative overflow-hidden bg-[#0b0b0b]">

  {/* Top border */}
  <div className="h-px w-full bg-white/[0.06]" />

  <div className="container mx-auto px-6">

    {/* =====================================
        MAIN FOOTER
    ===================================== */}

    <div className="grid grid-cols-1 gap-12 py-20 md:grid-cols-2 lg:grid-cols-4">

      {/* =================================
          BRAND
      ================================= */}

      <div className="lg:col-span-1">

        <h2
          className="
            text-3xl
            font-semibold
            tracking-[0.18em]
            text-white
          "
        >
          AURELIA
        </h2>

        <p
          className="
            mt-6
            max-w-xs
            text-sm
            font-light
            leading-7
            text-white/40
          "
        >
          Timeless jewelry crafted with precision, passion, and an
          unwavering dedication to beauty.
        </p>

        {/* Social */}
        <div className="mt-7 flex items-center gap-3">

          <a
            href="#"
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              text-xs
              text-white/50
              transition
              hover:border-[#d6b477]/50
              hover:text-[#d6b477]
            "
          >
            IG
          </a>

          <a
            href="#"
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              text-xs
              text-white/50
              transition
              hover:border-[#d6b477]/50
              hover:text-[#d6b477]
            "
          >
            FB
          </a>

          <a
            href="#"
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              text-xs
              text-white/50
              transition
              hover:border-[#d6b477]/50
              hover:text-[#d6b477]
            "
          >
            PI
          </a>

        </div>

      </div>


      {/* =================================
          EXPLORE
      ================================= */}

      <div>

        <p
          className="
            mb-6
            text-[10px]
            font-medium
            uppercase
            tracking-[0.3em]
            text-[#d6b477]
          "
        >
          Explore
        </p>

        <div className="flex flex-col gap-4">

          <a
            href="#"
            className="text-sm text-white/45 transition hover:text-white"
          >
            Home
          </a>

          <a
            href="#"
            className="text-sm text-white/45 transition hover:text-white"
          >
            About Us
          </a>

          <a
            href="#"
            className="text-sm text-white/45 transition hover:text-white"
          >
            Collection
          </a>

          <a
            href="#"
            className="text-sm text-white/45 transition hover:text-white"
          >
            Craftsmanship
          </a>

          <a
            href="#"
            className="text-sm text-white/45 transition hover:text-white"
          >
            Contact
          </a>

        </div>

      </div>


      {/* =================================
          CUSTOMER CARE
      ================================= */}

      <div>

        <p
          className="
            mb-6
            text-[10px]
            font-medium
            uppercase
            tracking-[0.3em]
            text-[#d6b477]
          "
        >
          Customer Care
        </p>

        <div className="flex flex-col gap-4">

          <a
            href="#"
            className="text-sm text-white/45 transition hover:text-white"
          >
            Shipping & Delivery
          </a>

          <a
            href="#"
            className="text-sm text-white/45 transition hover:text-white"
          >
            Returns & Exchanges
          </a>

          <a
            href="#"
            className="text-sm text-white/45 transition hover:text-white"
          >
            Size Guide
          </a>

          <a
            href="#"
            className="text-sm text-white/45 transition hover:text-white"
          >
            FAQs
          </a>

          <a
            href="#"
            className="text-sm text-white/45 transition hover:text-white"
          >
            Privacy Policy
          </a>

        </div>

      </div>


      {/* =================================
          CONTACT
      ================================= */}

      <div>

        <p
          className="
            mb-6
            text-[10px]
            font-medium
            uppercase
            tracking-[0.3em]
            text-[#d6b477]
          "
        >
          Get In Touch
        </p>

        <div className="flex flex-col gap-5">

          <div>
            <p className="text-[10px] uppercase tracking-widest text-white/25">
              Email
            </p>

            <p className="mt-1 text-sm text-white/55">
              hello@aurelia.com
            </p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-widest text-white/25">
              Phone
            </p>

            <p className="mt-1 text-sm text-white/55">
              +1 234 567 890
            </p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-widest text-white/25">
              Atelier
            </p>

            <p className="mt-1 text-sm leading-6 text-white/55">
              24 Madison Avenue
              <br />
              New York, NY
            </p>
          </div>

        </div>

      </div>

    </div>


    {/* =====================================
        GOLD DIVIDER
    ===================================== */}

    <div className="relative">

      <div className="h-px w-full bg-white/[0.06]" />

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-1
          w-1
          -translate-x-1/2
          -translate-y-1/2
          rotate-45
          bg-[#d6b477]
        "
      />

    </div>


    {/* =====================================
        BOTTOM FOOTER
    ===================================== */}

    <div
      className="
        flex
        flex-col
        items-center
        justify-between
        gap-4
        py-7
        md:flex-row
      "
    >

      <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">
        © 2026 Aurelia Jewelry. All rights reserved.
      </p>

      <div className="flex items-center gap-6">

        <a
          href="#"
          className="
            text-[10px]
            uppercase
            tracking-[0.2em]
            text-white/25
            transition
            hover:text-white
          "
        >
          Terms
        </a>

        <a
          href="#"
          className="
            text-[10px]
            uppercase
            tracking-[0.2em]
            text-white/25
            transition
            hover:text-white
          "
        >
          Privacy
        </a>

      </div>

    </div>

  </div>

</footer>
      </section>
      
    </div>
  );
}

export default App;
