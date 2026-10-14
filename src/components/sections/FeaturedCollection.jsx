const FeaturedCollection = ({ ringWrapperRef }) => {
  return (
    <section className="sticky top-0 z-10 min-h-screen overflow-hidden bg-black md:block hidden">
      {/* Subtle center atmosphere */}
      <div className=" pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d6b477]/[0.025] blur-[100px] sm:h-[450px] sm:w-[450px] lg:h-[620px] lg:w-[620px] " />
      {/* Very subtle side glow */}
      <div className=" pointer-events-none absolute left-1/2 top-1/2 h-[250px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(214,180,119,0.035)_0%,transparent_70%)] sm:h-[300px] sm:w-[700px] lg:h-[400px] lg:w-[900px] " />
      <div className=" relative z-20 mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center gap-10 px-5 py-12 sm:gap-12 sm:px-8 lg:flex-row lg:gap-10 lg:px-8 lg:py-0 xl:gap-16 ">
        {/* ================================= LEFT CONTENT ================================= */}
        <div className=" flex w-full flex-col items-center text-center text-white lg:w-[30%] lg:items-start lg:text-left ">
          {/* Label */}
          <div className="mb-4 flex items-center gap-3 sm:mb-6">
            <span className="h-px w-6 bg-[#d6b477]/70 sm:w-8" />
            <span className=" text-[7px] font-medium uppercase tracking-[0.28em] text-[#d6b477] sm:text-[9px] lg:text-[10px] ">
              The New Collection
            </span>
          </div>
          {/* Heading */}
          <h2 className=" max-w-md text-3xl font-light leading-[1.08] tracking-[-0.035em] text-white sm:text-4xl lg:text-3xl xl:text-4xl ">
            Designed to Be <br />
            <span className=" font-serif italic text-[#d6b477] ">
              Remembered
            </span>
          </h2>
          {/* Decorative detail */}
          <div className="mt-4 flex items-center gap-2 sm:mt-6">
            <span className="h-px w-8 bg-white/10 sm:w-12" />
            <span className="text-[8px] text-[#d6b477] sm:text-[9px]"> ✦ </span>
            <span className="h-px w-8 bg-white/10 sm:w-12" />
          </div>
          {/* Description */}
          <p className=" mt-4 max-w-sm text-[12px] font-light leading-6 tracking-wide text-white/55 sm:mt-6 sm:text-[14px] sm:leading-7 ">
            Discover timeless pieces crafted with precision, elegance, and a
            passion for every detail.
          </p>
          {/* Button */}
          <button className=" group mt-6 inline-flex items-center gap-4 rounded-full bg-white px-6 py-3 text-xs font-medium text-black transition-all duration-500 hover:bg-[#d6b477] hover:shadow-[0_0_35px_rgba(214,180,119,0.18)] sm:mt-8 sm:px-7 sm:py-3.5 sm:text-sm ">
            <span>Explore Collection</span>
            <span className=" text-base transition-transform duration-300 group-hover:translate-x-1 sm:text-lg ">
              →
            </span>
          </button>
        </div>
        {/* ================================= CENTER — RING ================================= */}
        <div className=" relative flex w-full items-center justify-center h-[300px] sm:h-[380px] md:h-[450px] lg:h-screen lg:flex-1 ">
          {/* Center golden aura */}
          <div className=" pointer-events-none absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(214,180,119,0.06)_0%,rgba(214,180,119,0.025)_35%,transparent_70%)] blur-2xl sm:h-[330px] sm:w-[330px] md:h-[400px] md:w-[400px] lg:h-[430px] lg:w-[430px] " />
          {/* Outer decorative ring */}
          <div className=" pointer-events-none absolute left-1/2 top-1/2 h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d6b477]/[0.06] sm:h-[300px] sm:w-[300px] md:h-[360px] md:w-[360px] lg:h-[430px] lg:w-[430px] " />
          {/* Inner decorative ring */}
          <div className=" pointer-events-none absolute left-1/2 top-1/2 h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.025] sm:h-[250px] sm:w-[250px] md:h-[300px] md:w-[300px] lg:h-[350px] lg:w-[350px] " />
          {/* ================================= YOUR 3D RING ================================= */}
          <div
            ref={ringWrapperRef}
            className=" relative z-20 flex h-[280px] w-[280px] items-center justify-center sm:h-[340px] sm:w-[340px] md:h-[420px] md:w-[420px] lg:h-[500px] lg:w-[500px] "
          >
            {/* Put your existing Canvas here */}
          </div>
          {/* Ground reflection / light */}
          <div className=" pointer-events-none absolute bottom-[5%] left-1/2 z-10 h-[25px] w-[180px] -translate-x-1/2 rounded-[50%] bg-[#d6b477]/10 blur-[30px] sm:w-[240px] lg:bottom-[18%] lg:h-[35px] lg:w-[300px] lg:blur-[35px] " />
          <div className=" pointer-events-none absolute bottom-[4%] left-1/2 z-10 h-px w-[120px] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d6b477]/20 to-transparent blur-[1px] sm:w-[160px] lg:bottom-[17%] lg:w-[180px] " />
        </div>
        {/* ================================= RIGHT CONTENT ================================= */}
        <div className=" flex w-full flex-col items-center text-center text-white lg:w-[30%] lg:items-start lg:text-left ">
          {/* Label */}
          <div className="mb-4 flex items-center gap-3 sm:mb-6">
            <span className="h-px w-6 bg-[#d6b477]/70 sm:w-8" />
            <span className=" text-[7px] font-medium uppercase tracking-[0.28em] text-[#d6b477] sm:text-[9px] lg:text-[10px] ">
              The New Collection
            </span>
          </div>
          {/* Heading */}
          <h2 className=" max-w-md text-3xl font-light leading-[1.08] tracking-[-0.035em] text-white sm:text-4xl lg:text-3xl xl:text-4xl ">
            Designed to Be <br />
            <span className="font-serif italic text-[#d6b477]">Remembered</span>
          </h2>
          {/* Decorative detail */}
          <div className="mt-4 flex items-center gap-2 sm:mt-6">
            <span className="h-px w-8 bg-white/10 sm:w-12" />
            <span className="text-[8px] text-[#d6b477] sm:text-[9px]"> ✦ </span>
            <span className="h-px w-8 bg-white/10 sm:w-12" />
          </div>
          {/* Description */}
          <p className=" mt-4 max-w-sm text-[12px] font-light leading-6 tracking-wide text-white/55 sm:mt-6 sm:text-[14px] sm:leading-7 ">
            Discover timeless pieces crafted with precision, elegance, and a
            passion for every detail.
          </p>
          {/* Button */}
          <button className=" group mt-6 inline-flex items-center gap-4 rounded-full bg-white px-6 py-3 text-xs font-medium text-black transition-all duration-500 hover:bg-[#d6b477] hover:shadow-[0_0_35px_rgba(214,180,119,0.18)] sm:mt-8 sm:px-7 sm:py-3.5 sm:text-sm ">
            <span>Explore Collection</span>
            <span className=" text-base transition-transform duration-300 group-hover:translate-x-1 sm:text-lg ">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
export default FeaturedCollection;
