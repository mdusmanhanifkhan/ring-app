const CollectionIntro = () => {
  return (
    <div className="container mx-auto flex items-center gap-20 relative z-20">
      <div className="max-w-xl">
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-10 bg-[#c9a86a]" />

          <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#c9a86a]">
            The New Collection
          </span>
        </div>

        <h2 className="text-5xl font-light leading-[1.05] tracking-[-0.03em] text-white md:text-6xl">
          Designed to Be
          <br />
          <span className="font-serif italic text-[#d6b477]">Remembered</span>
        </h2>

        <p className="mt-7 max-w-md text-[15px] font-light leading-7 tracking-wide text-slate-300">
          Discover timeless pieces crafted with precision, elegance, and a
          passion for every detail.
        </p>

        <button
          className="group mt-8 inline-flex items-center gap-5 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition-all duration-300 hover:bg-[#d6b477] hover:shadow-[0_0_30px_rgba(214,180,119,0.25)]">
          <span>Explore Collection</span>

          <span
            className=" text-lg transition-transform duration-300 group-hover:translate-x-1"
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
  );
};

export default CollectionIntro;
