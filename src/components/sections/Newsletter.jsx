import contactUsSectionImage from "/images/contact-us-section-image.png";

const Newsletter = () => {
  return (
    <section
      className="
        relative
        z-20
        overflow-hidden
        bg-[#111111]
        px-4
        py-16

        sm:px-6
        sm:py-20

        md:py-24

        lg:px-8
        lg:py-28
      "
    >
      {/* =====================================
          BACKGROUND GLOW
      ===================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[320px]
          w-[320px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#d6b477]/[0.035]
          blur-[90px]

          sm:h-[400px]
          sm:w-[400px]

          lg:h-[500px]
          lg:w-[500px]
          lg:blur-[130px]
        "
      />

      <div className="container relative mx-auto w-full">
        {/* =====================================
            MAIN CARD
        ===================================== */}

        <div
          className="
            relative
            flex
            min-h-0
            flex-col
            overflow-hidden
            rounded-2xl
            border
            border-white/[0.07]
            bg-[#151515]

            sm:rounded-[24px]

            lg:min-h-[420px]
            lg:flex-row
            lg:rounded-[28px]
          "
        >
          {/* =====================================
              LEFT — IMAGE
          ===================================== */}

          <div
            className="
              group
              relative
              h-[260px]
              w-full
              shrink-0
              overflow-hidden

              sm:h-[320px]

              md:h-[360px]

              lg:h-auto
              lg:w-1/2
            "
          >
            <img
              src={contactUsSectionImage}
              alt="Luxury diamond ring"
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-1000
                group-hover:scale-105
              "
            />

            {/* Image gradient */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-b
                from-transparent
                via-transparent
                to-[#151515]

                lg:bg-gradient-to-r
                lg:from-transparent
                lg:via-transparent
                lg:to-[#151515]
              "
            />

            {/* Bottom gradient */}

            <div
              className="
                pointer-events-none
                absolute
                inset-x-0
                bottom-0
                h-24
                bg-gradient-to-t
                from-black/50
                to-transparent

                sm:h-32
              "
            />

            {/* Gold corner — top left */}

            <div
              className="
                pointer-events-none
                absolute
                left-4
                top-4
                h-7
                w-7
                border-l
                border-t
                border-[#d6b477]/50

                sm:left-6
                sm:top-6
                sm:h-9
                sm:w-9

                lg:h-10
                lg:w-10
              "
            />

            {/* Gold corner — bottom right */}

            <div
              className="
                pointer-events-none
                absolute
                bottom-4
                right-4
                h-7
                w-7
                border-b
                border-r
                border-[#d6b477]/50

                sm:bottom-6
                sm:right-6
                sm:h-9
                sm:w-9

                lg:h-10
                lg:w-10
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
              w-full
              flex-col
              justify-center
              px-5
              py-10

              sm:px-8
              sm:py-12

              md:px-12
              md:py-14

              lg:w-1/2
              lg:px-12
              lg:py-16

              xl:px-20
            "
          >
            {/* =====================================
                LABEL
            ===================================== */}

            <div
              className="
                mb-4
                flex
                items-center
                gap-3

                sm:mb-5
                md:mb-6
              "
            >
              <span
                className="
                  h-px
                  w-6
                  bg-[#d6b477]

                  sm:w-8
                "
              />

              <span
                className="
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.28em]
                  text-[#d6b477]

                  sm:text-[10px]
                  sm:tracking-[0.35em]
                "
              >
                Stay Updated
              </span>
            </div>

            {/* =====================================
                HEADING
            ===================================== */}

            <h2
              className="
                max-w-xl
                text-[36px]
                font-light
                leading-[1.05]
                tracking-[-0.035em]
                text-white

                sm:text-[42px]

                md:text-5xl

                lg:text-[48px]

                xl:text-5xl
              "
            >
              Be The First
              <br />
              <span className="font-serif italic text-[#d6b477]">
                To Know
              </span>
            </h2>

            {/* =====================================
                DESCRIPTION
            ===================================== */}

            <p
              className="
                mt-5
                max-w-md
                text-[13px]
                font-light
                leading-6
                tracking-wide
                text-white/50

                sm:mt-6
                sm:text-[14px]
                sm:leading-7
              "
            >
              Discover new collections, exclusive pieces, and private offers
              before anyone else. Join our world of timeless elegance.
            </p>

            {/* =====================================
                NEWSLETTER FORM
            ===================================== */}

            <div
              className="
                mt-6
                flex
                w-full
                max-w-md
                flex-col
                gap-3

                sm:mt-8
                sm:flex-row
                sm:items-center
              "
            >
              {/* Input */}

              <input
                type="email"
                placeholder="Your email address"
                className="
                  h-12
                  min-w-0
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
                  focus:bg-white/[0.05]
                "
              />

              {/* Button */}

              <button
                className="
                  group
                  flex
                  h-12
                  w-full
                  shrink-0
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-white
                  px-6
                  text-sm
                  font-medium
                  text-black
                  transition-all
                  duration-300

                  sm:w-auto

                  hover:bg-[#d6b477]
                  hover:shadow-[0_0_30px_rgba(214,180,119,0.15)]
                "
              >
                <span>Subscribe</span>

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

            {/* =====================================
                PRIVACY TEXT
            ===================================== */}

            <p
              className="
                mt-3
                text-[9px]
                leading-5
                tracking-wide
                text-white/25

                sm:mt-4
                sm:text-[10px]
              "
            >
              No spam. Only timeless pieces and exclusive updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
