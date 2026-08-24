const FeaturedCollection = ({ ringWrapperRef }) => {
  return (
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
  );
};

export default FeaturedCollection;
