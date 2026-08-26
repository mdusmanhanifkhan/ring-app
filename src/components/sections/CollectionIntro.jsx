const CollectionIntro = () => {
  return (
    <div className="container relative z-20 mx-auto flex w-full flex-col items-center gap-12 px-5 py-12 sm:px-6 md:gap-14 md:px-8 lg:flex-row lg:items-center lg:gap-16 lg:px-10 lg:py-20 xl:gap-20">
      
      {/* LEFT SIDE */}
      <div className="w-full max-w-xl text-center lg:text-left">
        <div className="mb-5 flex items-center justify-center gap-3 lg:justify-start">
          <span className="h-px w-8 bg-[#c9a86a] sm:w-10" />

          <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#c9a86a] sm:text-[11px] sm:tracking-[0.28em]">
            The New Collection
          </span>
        </div>

        <h2 className="text-4xl font-light leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl md:text-6xl lg:text-6xl">
          Designed to Be
          <br />
          <span className="font-serif italic text-[#d6b477]">
            Remembered
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-md text-[14px] font-light leading-7 tracking-wide text-slate-300 sm:mt-7 sm:text-[15px] lg:mx-0">
          Discover timeless pieces crafted with precision, elegance, and a
          passion for every detail.
        </p>

        <button
          className="group mt-7 inline-flex items-center justify-center gap-4 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition-all duration-300 hover:bg-[#d6b477] hover:shadow-[0_0_30px_rgba(214,180,119,0.25)] sm:mt-8 sm:gap-5 sm:px-7"
        >
          <span>Explore Collection</span>

          <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>

      {/* RIGHT SIDE - RING */}
      <div className="flex w-full flex-1 items-center justify-center lg:w-auto">
        <div className="sticky top-20 flex h-64 w-64 items-center justify-center sm:h-72 sm:w-72 md:h-80 md:w-80 lg:top-32 lg:h-96 lg:w-96 xl:h-[400px] xl:w-[400px]">
          {/* Ring will come here */}
        </div>
      </div>
    </div>
  );
};

export default CollectionIntro;
