import ringImage from "/images/ring.png";

const BestSellers = ({gallerySectionRef , galleryRef}) => {
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

      <div
        className="
        relative
        z-10
        mt-12
        w-full
        overflow-hidden
      "
      >
        <div
          ref={galleryRef}
          className="
          flex
          w-max
          gap-6
          px-[6vw]
        "
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className="
              group
              relative
              flex
              h-[290px]
              w-[470px]
              shrink-0
              overflow-hidden
              rounded-2xl
              border
              border-white/[0.08]
              bg-[#181818]
              transition-all
              duration-500
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
                -right-20
                -top-20
                h-56
                w-56
                rounded-full
                bg-[#d6b477]/10
                blur-[80px]
                opacity-0
                transition-opacity
                duration-700
                group-hover:opacity-100
              "
              />

              {/* =================================
                IMAGE
            ================================= */}

              <div
                className="
                relative
                flex
                w-[55%]
                items-center
                justify-center
              "
              >
                {/* Ring glow */}

                <div
                  className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  h-44
                  w-44
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-[#d6b477]/10
                  blur-[60px]
                "
                />

                <img
                  src={ringImage}
                  alt="Premium luxury ring"
                  className="
                  relative
                  z-10
                  w-[250px]
                  object-contain
                  transition-all
                  duration-700
                  ease-out
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
                w-[45%]
                flex-col
                justify-center
                pr-8
              "
              >
                {/* Product number */}

                <span
                  className="
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  text-[#d6b477]/50
                "
                >
                  0{(index % 9) + 1}
                </span>

                {/* Product title */}

                <h3
                  className="
                  mt-4
                  font-serif
                  text-2xl
                  font-medium
                  leading-tight
                  text-white
                "
                >
                  Aurelia
                  <br />
                  Diamond Ring
                </h3>

                {/* Divider */}

                <div className="my-4 h-px w-10 bg-[#d6b477]/40" />

                {/* Description */}

                <p
                  className="
                  max-w-[170px]
                  text-xs
                  leading-5
                  text-white/40
                "
                >
                  Handcrafted elegance with a timeless diamond setting.
                </p>

                {/* Price */}

                <p
                  className="
                  mt-4
                  text-sm
                  font-medium
                  tracking-wide
                  text-[#d6b477]
                "
                >
                  $1,250
                </p>

                {/* Button */}

                <button
                  className="
                  mt-4
                  flex
                  w-fit
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-white/15
                  px-5
                  py-2
                  text-xs
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:border-[#d6b477]
                  hover:bg-[#d6b477]
                  hover:text-black
                "
                >
                  <span>Explore</span>

                  <span>→</span>
                </button>
              </div>

              {/* =================================
                CORNER DETAILS
            ================================= */}

              <div
                className="
                pointer-events-none
                absolute
                bottom-4
                left-4
                h-7
                w-7
                border-b
                border-l
                border-[#d6b477]/30
              "
              />

              <div
                className="
                pointer-events-none
                absolute
                right-4
                top-4
                h-7
                w-7
                border-r
                border-t
                border-[#d6b477]/30
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
