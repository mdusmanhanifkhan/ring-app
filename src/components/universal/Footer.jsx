
const Footer = () => {
  return (
        <footer className="relative overflow-hidden bg-[#0b0b0b]">
          {/* Top border */}
          <div className="h-px w-full bg-white/[0.06]" />

          <div className="container mx-auto px-6">
            {/* =====================================
        MAIN FOOTER
    ===================================== */}

            <div className="grid grid-cols-1 gap-12 py-20 md:grid-cols-2 lg:grid-cols-4">
              {/* =================================
          BRAND
      ================================= */}

              <div className="lg:col-span-1">
                <h2
                  className="
            text-3xl
            font-semibold
            tracking-[0.18em]
            text-white
          "
                >
                  AURELIA
                </h2>

                <p
                  className="
            mt-6
            max-w-xs
            text-sm
            font-light
            leading-7
            text-white/40
          "
                >
                  Timeless jewelry crafted with precision, passion, and an
                  unwavering dedication to beauty.
                </p>

                {/* Social */}
                <div className="mt-7 flex items-center gap-3">
                  <a
                    href="#"
                    className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              text-xs
              text-white/50
              transition
              hover:border-[#d6b477]/50
              hover:text-[#d6b477]
            "
                  >
                    IG
                  </a>

                  <a
                    href="#"
                    className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              text-xs
              text-white/50
              transition
              hover:border-[#d6b477]/50
              hover:text-[#d6b477]
            "
                  >
                    FB
                  </a>

                  <a
                    href="#"
                    className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              text-xs
              text-white/50
              transition
              hover:border-[#d6b477]/50
              hover:text-[#d6b477]
            "
                  >
                    PI
                  </a>
                </div>
              </div>

              {/* =================================
          EXPLORE
      ================================= */}

              <div>
                <p
                  className="
            mb-6
            text-[10px]
            font-medium
            uppercase
            tracking-[0.3em]
            text-[#d6b477]
          "
                >
                  Explore
                </p>

                <div className="flex flex-col gap-4">
                  <a
                    href="#"
                    className="text-sm text-white/45 transition hover:text-white"
                  >
                    Home
                  </a>

                  <a
                    href="#"
                    className="text-sm text-white/45 transition hover:text-white"
                  >
                    About Us
                  </a>

                  <a
                    href="#"
                    className="text-sm text-white/45 transition hover:text-white"
                  >
                    Collection
                  </a>

                  <a
                    href="#"
                    className="text-sm text-white/45 transition hover:text-white"
                  >
                    Craftsmanship
                  </a>

                  <a
                    href="#"
                    className="text-sm text-white/45 transition hover:text-white"
                  >
                    Contact
                  </a>
                </div>
              </div>

              {/* =================================
          CUSTOMER CARE
      ================================= */}

              <div>
                <p
                  className="
            mb-6
            text-[10px]
            font-medium
            uppercase
            tracking-[0.3em]
            text-[#d6b477]
          "
                >
                  Customer Care
                </p>

                <div className="flex flex-col gap-4">
                  <a
                    href="#"
                    className="text-sm text-white/45 transition hover:text-white"
                  >
                    Shipping & Delivery
                  </a>

                  <a
                    href="#"
                    className="text-sm text-white/45 transition hover:text-white"
                  >
                    Returns & Exchanges
                  </a>

                  <a
                    href="#"
                    className="text-sm text-white/45 transition hover:text-white"
                  >
                    Size Guide
                  </a>

                  <a
                    href="#"
                    className="text-sm text-white/45 transition hover:text-white"
                  >
                    FAQs
                  </a>

                  <a
                    href="#"
                    className="text-sm text-white/45 transition hover:text-white"
                  >
                    Privacy Policy
                  </a>
                </div>
              </div>

              {/* =================================
          CONTACT
      ================================= */}

              <div>
                <p
                  className="
            mb-6
            text-[10px]
            font-medium
            uppercase
            tracking-[0.3em]
            text-[#d6b477]
          "
                >
                  Get In Touch
                </p>

                <div className="flex flex-col gap-5">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/25">
                      Email
                    </p>

                    <p className="mt-1 text-sm text-white/55">
                      hello@aurelia.com
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/25">
                      Phone
                    </p>

                    <p className="mt-1 text-sm text-white/55">+1 234 567 890</p>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/25">
                      Atelier
                    </p>

                    <p className="mt-1 text-sm leading-6 text-white/55">
                      24 Madison Avenue
                      <br />
                      New York, NY
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* =====================================
        GOLD DIVIDER
    ===================================== */}

            <div className="relative">
              <div className="h-px w-full bg-white/[0.06]" />

              <div
                className="
          absolute
          left-1/2
          top-1/2
          h-1
          w-1
          -translate-x-1/2
          -translate-y-1/2
          rotate-45
          bg-[#d6b477]
        "
              />
            </div>

            {/* =====================================
        BOTTOM FOOTER
    ===================================== */}

            <div
              className="
        flex
        flex-col
        items-center
        justify-between
        gap-4
        py-7
        md:flex-row
      "
            >
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">
                © 2026 Aurelia Jewelry. All rights reserved.
              </p>

              <div className="flex items-center gap-6">
                <a
                  href="#"
                  className="
            text-[10px]
            uppercase
            tracking-[0.2em]
            text-white/25
            transition
            hover:text-white
          "
                >
                  Terms
                </a>

                <a
                  href="#"
                  className="
            text-[10px]
            uppercase
            tracking-[0.2em]
            text-white/25
            transition
            hover:text-white
          "
                >
                  Privacy
                </a>
              </div>
            </div>
          </div>
        </footer>
  )
}

export default Footer