const CraftedToPerfection = () => {
  return (
    <section className="relative overflow-hidden bg-[#111111] py-16 sm:py-20 md:py-24 lg:py-28">
      {/* Background atmosphere */}
      <div
        className="
          pointer-events-none
          absolute
          left-[-180px]
          top-1/2
          h-[350px]
          w-[350px]
          -translate-y-1/2
          rounded-full
          bg-[#d6b477]/[0.025]
          blur-[100px]
          sm:h-[450px]
          sm:w-[450px]
          lg:h-[500px]
          lg:w-[500px]
          lg:blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-180px]
          bottom-[-150px]
          h-[350px]
          w-[350px]
          rounded-full
          bg-[#d6b477]/[0.02]
          blur-[100px]
          sm:h-[400px]
          sm:w-[400px]
          lg:h-[450px]
          lg:w-[450px]
          lg:blur-[130px]
        "
      />

      <div className="container relative z-10 mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div
          className="
            flex
            flex-col
            items-center
            justify-center
            gap-12
            md:gap-14
            lg:flex-row
            lg:items-center
            lg:gap-10
            xl:gap-14
          "
        >
          {/* =====================================
              LEFT — IMAGE GALLERY
          ===================================== */}

          <div
            className="
              flex
              w-full
              max-w-[700px]
              shrink-0
              gap-3
              sm:gap-4
              md:max-w-[760px]
              lg:w-auto
              lg:max-w-none
            "
          >
            {/* Main Image */}

            <div
              className="
                group
                relative
                h-[300px]
                min-w-0
                flex-1
                overflow-hidden
                rounded-xl
                border
                border-white/10
                bg-black
                sm:h-[360px]
                sm:rounded-2xl
                md:h-[430px]
                md:w-[520px]
                md:flex-none
                lg:h-[450px]
                lg:w-[460px]
                xl:h-[430px]
                xl:w-[520px]
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
                  bottom-3
                  left-3
                  h-6
                  w-6
                  border-b
                  border-l
                  border-[#d6b477]/50
                  sm:bottom-4
                  sm:left-4
                  sm:h-8
                  sm:w-8
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  right-3
                  top-3
                  h-6
                  w-6
                  border-r
                  border-t
                  border-[#d6b477]/50
                  sm:right-4
                  sm:top-4
                  sm:h-8
                  sm:w-8
                "
              />
            </div>

            {/* =================================
                THUMBNAILS
            ================================= */}

            <div
              className="
                flex
                shrink-0
                flex-col
                gap-3
                sm:gap-4
              "
            >
              {/* Thumbnail 01 */}
              <div
                className="
                  group
                  relative
                  h-[92px]
                  w-[92px]
                  cursor-pointer
                  overflow-hidden
                  rounded-lg
                  border
                  border-white/10
                  bg-black
                  transition-all
                  duration-300
                  hover:border-[#d6b477]/60
                  sm:h-[105px]
                  sm:w-[105px]
                  sm:rounded-xl
                  md:h-[137px]
                  md:w-[137px]
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
                  h-[92px]
                  w-[92px]
                  cursor-pointer
                  overflow-hidden
                  rounded-lg
                  border
                  border-white/10
                  bg-black
                  transition-all
                  duration-300
                  hover:border-[#d6b477]/60
                  sm:h-[105px]
                  sm:w-[105px]
                  sm:rounded-xl
                  md:h-[137px]
                  md:w-[137px]
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
                  h-[92px]
                  w-[92px]
                  cursor-pointer
                  overflow-hidden
                  rounded-lg
                  border
                  border-white/10
                  bg-black
                  transition-all
                  duration-300
                  hover:border-[#d6b477]/60
                  sm:h-[105px]
                  sm:w-[105px]
                  sm:rounded-xl
                  md:h-[137px]
                  md:w-[137px]
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

          <div
            className="
              flex
              w-full
              max-w-[700px]
              flex-col
              items-start
              lg:max-w-[500px]
              xl:max-w-[560px]
            "
          >
            {/* Label */}

            <div className="mb-4 flex items-center gap-3 sm:mb-5">
              <span className="h-px w-6 bg-[#d6b477] sm:w-8" />

              <p
                className="
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.25em]
                  text-[#d6b477]
                  sm:text-[11px]
                  sm:tracking-[0.3em]
                "
              >
                Our Craftsmanship
              </p>
            </div>

            {/* Heading */}

            <h2
              className="
                font-serif
                text-[34px]
                font-medium
                leading-[1.08]
                tracking-[-0.025em]
                text-white
                sm:text-[40px]
                md:text-[46px]
                lg:text-[36px]
                xl:text-[54px]
              "
            >
              Built On Passion,
              <span className="italic text-[#f0eee9]">
                Crafted to Perfection
              </span>
            </h2>

            {/* Decorative line */}

            <div className="mt-5 flex w-full max-w-[180px] items-center gap-2 sm:mt-6 sm:max-w-[210px]">
              {/* Left line */}
              <span
                className="
      h-px
      flex-1
      bg-[#d6b477]/60
    "
              />

              {/* Center diamond */}
              <span
                className="
      shrink-0
      text-[9px]
      leading-none
      text-[#d6b477]
      sm:text-[10px]
    "
              >
                ✦
              </span>

              {/* Right line */}
              <span
                className="
       h-px
      flex-1
      bg-[#d6b477]/60
    "
              />
            </div>

            {/* Description */}

            <p
              className="
                mt-6
                lg:max-w-[520px]
                text-[14px]
                font-light
                leading-7
                tracking-wide
                text-white/60
                sm:mt-7
                sm:text-[15px]
              "
            >
              Every piece we create is a reflection of our dedication to
              excellence. From the finest materials to masterful craftsmanship,
              we bring passion, precision, and purpose into every detail.
            </p>

            <p
              className="
                mt-2
                max-w-[520px]
                text-[14px]
                font-light
                leading-7
                tracking-wide
                text-white/60
                sm:text-[15px]
              "
            >
              Because true beauty is never rushed — it's crafted.
            </p>

            {/* Button */}

            <button
              className="
                group
                mt-7
                inline-flex
                items-center
                gap-4
                rounded-full
                bg-white
                px-6
                py-3
                text-sm
                font-medium
                text-black
                transition-all
                duration-300
                hover:bg-[#d6b477]
                hover:shadow-[0_0_30px_rgba(214,180,119,0.15)]
                sm:mt-8
                sm:gap-5
                sm:px-7
                sm:py-3.5
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
  );
};

export default CraftedToPerfection;
