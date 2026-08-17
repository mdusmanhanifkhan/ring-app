import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { FaBagShopping } from "react-icons/fa6";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`
        fixed
        z-50
        left-1/2
        -translate-x-1/2
        transition-all
        duration-700
        ease-[cubic-bezier(0.22,1,0.36,1)]

        ${isScrolled ? "top-4 w-full max-w-300" : "top-4 w-full container"}
      `}
    >
      <div
        className={`
          flex
          h-17
          items-center
          justify-between
          rounded-[20px]
          border
          transition-all
          duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]

          ${
            isScrolled
              ? `
                border-white/8
                bg-[#0c1420]/75
                px-5.5
                shadow-[0_15px_40px_rgba(0,0,0,0.18)]
                backdrop-blur-[18px]
              `
              : `
                border-transparent
                bg-transparent
                px-1
              `
          }
        `}
      >
        {/* Logo */}
        <a
          href="/"
          className="
            text-[20px]
            font-semibold
            tracking-[0.16em]
            text-white
            transition-opacity
            duration-300
            hover:opacity-70
          "
        >
          LOGO
        </a>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="/"
            className="
              group
              relative
              text-[15px]
              font-normal
              text-[#a2b6cf]
              transition-colors
              duration-300
              hover:text-white
            "
          >
            Home
            <span
              className="
                absolute
                -bottom-2
                left-1/2
                h-px
                w-0
                -translate-x-1/2
                bg-white
                transition-all
                duration-300
                group-hover:w-4.5
              "
            />
          </a>

          <a
            href="#about"
            className="
              group
              relative
              text-[15px]
              font-normal
              text-[#a2b6cf]
              transition-colors
              duration-300
              hover:text-white
            "
          >
            About Us
            <span
              className="
                absolute
                -bottom-2
                left-1/2
                h-px
                w-0
                -translate-x-1/2
                bg-white
                transition-all
                duration-300
                group-hover:w-4.5
              "
            />
          </a>

          <a
            href="#products"
            className="
              group
              relative
              text-[15px]
              font-normal
              text-[#a2b6cf]
              transition-colors
              duration-300
              hover:text-white
            "
          >
            Products
            <span
              className="
                absolute
                -bottom-2
                left-1/2
                h-px
                w-0
                -translate-x-1/2
                bg-white
                transition-all
                duration-300
               group-hover:w-4.5
              "
            />
          </a>

          <a
            href="#contact"
            className="
              group
              relative
              text-[15px]
              font-normal
              text-[#a2b6cf]
              transition-colors
              duration-300
              hover:text-white
            "
          >
            Contact Us
            <span
              className="
                absolute
                -bottom-2
                left-1/2
                h-px
                w-0
                -translate-x-1/2
                bg-white
                transition-all
                duration-300
                group-hover:w-4.5
              "
            />
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4 text-[#a2b6cf]">
          <button
            aria-label="Search"
            className="
              flex
              items-center
              justify-center
              transition-all
              duration-300
              hover:-translate-y-px
              hover:text-white
            "
          >
            <CiSearch className="h-5.75 w-5.75" />
          </button>

          <button
            aria-label="Account"
            className="
              flex
              items-center
              justify-center
              transition-all
              duration-300
              hover:-translate-y-px
              hover:text-white
            "
          >
            <VscAccount className="h-5.25 w-5.25" />
          </button>

          <button
            aria-label="Shopping bag"
            className="
              flex
              items-center
              justify-center
              transition-all
              duration-300
              hover:-translate-y-px
              hover:text-white
            "
          >
            <FaBagShopping className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
