import contactUsSectionImage from "/images/contact-us-section-image.png";

const Newsletter = () => {
  return (
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
  )
}

export default Newsletter