
const CraftedToPerfection = () => {
  return (
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
              excellence. From the finest materials to masterful craftsmanship,
              we bring passion, precision, and purpose into every detail.
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
  )
}

export default CraftedToPerfection