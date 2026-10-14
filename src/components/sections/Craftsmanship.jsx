const Craftsmanship = ({ eclipseSectionRef, ringWrapperRef }) => {
  return (
    <section
      ref={eclipseSectionRef}
      className="relative md:min-h-screen w-full overflow-hidden"
    >
      {/* Subtle Background Atmosphere */}
      <div className="pointer-events-none absolute left-1/2 top-[45%] h-150 w-150 -translate-x-1/2 rounded-full bg-[#c9a86a]/[0.035] blur-[140px]" />

      {/* Top Content */}
      <div className="relative z-20 mx-auto flex max-w-3xl flex-col items-center px-6 pt-10 text-center">
        {/* Section Label */}
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-10 bg-[#c9a86a]" />
          <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#c9a86a]">
            The Art of Craftsmanship
          </span>
          <span className="h-px w-10 bg-[#c9a86a]" />
        </div>

        {/* Heading */}
        <h2 className="text-5xl font-light leading-[1.05] tracking-[-0.03em] text-white md:text-6xl">
          Crafted to
          <span className="font-serif italic text-[#d6b477]">
            {" "}Perfection
          </span>
        </h2>

        {/* Decorative Divider */}
        <div className="mt-5 flex items-center gap-3">
          <span className="h-px w-14 bg-[#c9a86a]/40" />
          <span className="text-[10px] text-[#d6b477]">✦</span>
          <span className="h-px w-14 bg-[#c9a86a]/40" />
        </div>

        {/* Description */}
        <p className="mt-6 max-w-lg text-[14px] font-light leading-7 tracking-wide text-slate-300">
          From the finest materials to masterful craftsmanship, every ring is a
          symbol of dedication, passion, and timeless elegance.
        </p>
      </div>

      {/* Ring and Eclipse */}
      <div className="relative mx-auto mt-90 h-[520px] w-[520px] md:h-[600px] md:w-[600px]">
        {/* Eclipse Circle */}
        <div className="pointer-events-none relative z-0 h-[400px] w-[400px] -translate-y-1/2 rounded-full md:h-[370px] md:w-[370px] xl:h-[650px] xl:w-[650px]">
          {/* Inner Glow */}
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(214,180,119,0.08)_35%,rgba(214,180,119,0.32)_58%,rgba(214,180,119,0.12)_70%,transparent_78%)] blur-xl" />

          {/* Main Eclipse Ring */}
          <div className="absolute inset-[45px] rounded-full border-[3px] border-[#f3d49a] shadow-[0_0_20px_8px_rgba(214,180,119,0.55),0_0_70px_25px_rgba(214,180,119,0.28)]" />

          {/* Outer Glow Ring */}
          <div className="absolute -inset-[30px] rounded-full border border-[#d6b477]/30 blur-md" />

          {/* Ambient Outer Ring */}
          <div className="absolute -inset-[80px] rounded-full border border-[#d6b477]/10 blur-2xl" />
        </div>

        {/* 3D Ring Wrapper */}
        <div
          ref={ringWrapperRef}
          className="absolute left-1/2 top-[53%] z-10 flex h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 items-center justify-center"
        >
          {/* Place your existing 3D Canvas / Ring Model here */}
        </div>
      </div>
    </section>
  );
};

export default Craftsmanship;
