import ringImage from "/images/ring.png";

const BestSellers = ({ gallerySectionRef, galleryRef }) => {
  return (
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
          materials, timeless design, and meticulous attention to every detail.
        </p>
      </div>

      {/* =========================================
        HORIZONTAL PRODUCT TRACK
    ========================================= */}

      {/* =========================================
    HORIZONTAL PRODUCT TRACK
========================================= */}

      <div
        className="
    relative
    z-10
    mt-8
    w-full
    overflow-hidden
    sm:mt-10
    md:mt-12
  "
      >
        <div
          ref={galleryRef}
          className="
      flex
      w-max
      gap-4
      px-4
      sm:gap-5
      sm:px-6
      md:gap-6
      md:px-[6vw]
      my-3
    "
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className="
          group
          relative
          flex
          h-[240px]
          w-[calc(100vw-32px)]
          max-w-[400px]
          shrink-0
          overflow-hidden
          rounded-xl
          border
          border-white/[0.08]
          bg-[#181818]
          transition-all
          duration-500

          sm:h-[260px]
          sm:w-[430px]
          sm:rounded-2xl

          md:h-[280px]
          md:w-[460px]

          lg:h-[290px]
          lg:w-[470px]

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
            -right-16
            -top-16
            h-44
            w-44
            rounded-full
            bg-[#d6b477]/10
            blur-[70px]
            opacity-0
            transition-opacity
            duration-700
            group-hover:opacity-100
            sm:-right-20
            sm:-top-20
            sm:h-56
            sm:w-56
            sm:blur-[80px]
          "
              />

              {/* =================================
            IMAGE AREA
        ================================= */}

              <div
                className="
            relative
            flex
            h-full
            w-[48%]
            shrink-0
            items-center
            justify-center

            sm:w-[50%]
            md:w-[53%]
            lg:w-[55%]
          "
              >
                {/* Ring glow */}

                <div
                  className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-28
              w-28
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#d6b477]/10
              blur-[45px]

              sm:h-36
              sm:w-36
              sm:blur-[50px]

              md:h-40
              md:w-40

              lg:h-44
              lg:w-44
              lg:blur-[60px]
            "
                />

                <img
                  src={ringImage}
                  alt="Premium luxury ring"
                  className="
              relative
              z-10
              w-[145px]
              max-w-[90%]
              object-contain
              transition-all
              duration-700
              ease-out

              sm:w-[175px]
              md:w-[205px]
              lg:w-[250px]

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
            min-w-0
            flex-1
            flex-col
            justify-center
            pr-4

            sm:pr-5
            md:pr-6
            lg:pr-8
          "
              >
                {/* Product number */}

                <span
                  className="
              text-[8px]
              uppercase
              tracking-[0.25em]
              text-[#d6b477]/50

              sm:text-[9px]
              sm:tracking-[0.3em]

              md:text-[10px]
            "
                >
                  0{(index % 9) + 1}
                </span>

                {/* Product title */}

                <h3
                  className="
              mt-2
              font-serif
              text-[18px]
              font-medium
              leading-[1.15]
              text-white

              sm:mt-3
              sm:text-xl

              md:text-2xl
            "
                >
                  Aurelia
                  <br />
                  Diamond Ring
                </h3>

                {/* Divider */}

                <div
                  className="
              my-2
              h-px
              w-7
              bg-[#d6b477]/40

              sm:my-3
              sm:w-9

              md:my-4
              md:w-10
            "
                />

                {/* Description */}

                <p
                  className="
              max-w-[125px]
              text-[10px]
              leading-[1.45]
              text-white/40

              sm:max-w-[150px]
              sm:text-[11px]
              sm:leading-5

              md:max-w-[170px]
              md:text-xs
            "
                >
                  Handcrafted elegance with a timeless diamond setting.
                </p>

                {/* Price */}

                <p
                  className="
              mt-2
              text-[11px]
              font-medium
              tracking-wide
              text-[#d6b477]

              sm:mt-3
              sm:text-xs

              md:mt-4
              md:text-sm
            "
                >
                  $1,250
                </p>

                {/* Button */}

                <button
                  className="
              mt-2
              flex
              w-fit
              items-center
              gap-2
              rounded-full
              border
              border-white/15
              px-3
              py-1.5
              text-[9px]
              font-medium
              text-white
              transition-all
              duration-300

              sm:mt-3
              sm:gap-2.5
              sm:px-4
              sm:py-2
              sm:text-[10px]

              md:mt-4
              md:gap-3
              md:px-5
              md:text-xs

              hover:border-[#d6b477]
              hover:bg-[#d6b477]
              hover:text-black
            "
                >
                  <span>Explore</span>

                  <span
                    className="
                transition-transform
                duration-300
                group-hover:translate-x-0.5
              "
                  >
                    →
                  </span>
                </button>
              </div>

              {/* =================================
            CORNER DETAILS
        ================================= */}

              <div
                className="
            pointer-events-none
            absolute
            bottom-3
            left-3
            h-5
            w-5
            border-b
            border-l
            border-[#d6b477]/30

            sm:bottom-4
            sm:left-4
            sm:h-6
            sm:w-6

            md:h-7
            md:w-7
          "
              />

              <div
                className="
            pointer-events-none
            absolute
            right-3
            top-3
            h-5
            w-5
            border-r
            border-t
            border-[#d6b477]/30

            sm:right-4
            sm:top-4
            sm:h-6
            sm:w-6

            md:h-7
            md:w-7
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
  );
};

export default BestSellers;
