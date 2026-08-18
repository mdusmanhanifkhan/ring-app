import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { FaBagShopping } from "react-icons/fa6";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Contact Us", href: "#contact" },
  ];

  const actionItems = [
    {
      label: "Search",
      icon: CiSearch,
      className: "h-6 w-6 sm:h-6.5 sm:w-6.5",
    },
    {
      label: "Account",
      icon: VscAccount,
      className: "h-5 w-5 sm:h-5.5 sm:w-5.5",
    },
    {
      label: "Shopping bag",
      icon: FaBagShopping,
      className: "h-5 w-5 sm:h-5.5 sm:w-5.5",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Close mobile menu when scrolling
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

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

        ${
          isScrolled
            ? "top-3 w-[calc(100%-24px)] sm:top-4 sm:w-[calc(100%-32px)] md:max-w-300"
            : "top-3 w-[calc(100%-24px)] sm:top-4 sm:w-[calc(100%-32px)] md:w-full md:container"
        }
      `}
    >
      <div
        className={`
          relative

          flex
          min-h-16
          items-center
          justify-between

          rounded-[18px]
          sm:rounded-[20px]

          border

          transition-all
          duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]

          ${
            isScrolled
              ? `
                border-white/8
                bg-[#0c1420]/75
                px-4
                sm:px-5.5
                shadow-[0_15px_40px_rgba(0,0,0,0.18)]
                backdrop-blur-[18px]
              `
              : `
                border-transparent
                bg-transparent
                px-1
                sm:px-2
              `
          }
        `}
      >
        {/* Logo */}
        <a
          href="/"
          onClick={handleNavClick}
          className="
            shrink-0
            text-[17px]
            font-semibold
            tracking-[0.14em]
            text-white
            transition-opacity
            duration-300
            hover:opacity-70

            sm:text-[20px]
            sm:tracking-[0.16em]
          "
        >
          LOGO
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex lg:gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="
                group
                relative
                whitespace-nowrap
                text-[14px]
                font-normal
                text-[#a2b6cf]
                transition-colors
                duration-300
                hover:text-white

                lg:text-[15px]
              "
            >
              {item.label}

              <span
                className="
                  absolute
                  -bottom-1
                  left-1/2
                  h-px
                  w-0
                  -translate-x-1/2
                  bg-white
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3 text-[#a2b6cf] sm:gap-4">
          {actionItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.label}
                aria-label={item.label}
                type="button"
                className="
                  flex
                  shrink-0
                  cursor-pointer
                  items-center
                  justify-center
                  transition-all
                  duration-300
                  hover:-translate-y-px
                  hover:text-white
                "
              >
                <Icon className={item.className} />
              </button>
            );
          })}

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="
              flex
              cursor-pointer
              items-center
              justify-center
              text-[#a2b6cf]
              transition-all
              duration-300
              hover:text-white

              md:hidden
            "
          >
            {isMenuOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`
            absolute
            left-0
            right-0
            top-[calc(100%+10px)]

            overflow-hidden

            rounded-[18px]
            border
            border-white/8
            bg-[#0c1420]/95
            shadow-[0_15px_40px_rgba(0,0,0,0.2)]
            backdrop-blur-[18px]

            transition-all
            duration-500
            ease-[cubic-bezier(0.22,1,0.36,1)]

            md:hidden

            ${
              isMenuOpen
                ? "pointer-events-auto max-h-100 translate-y-0 opacity-100"
                : "pointer-events-none max-h-0 -translate-y-3 opacity-0"
            }
          `}
        >
          <nav className="flex flex-col p-4">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={handleNavClick}
                className={`
                  group
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/6
                  py-4

                  text-[15px]
                  text-[#a2b6cf]

                  transition-colors
                  duration-300
                  hover:text-white

                  ${
                    index === navItems.length - 1
                      ? "border-b-0"
                      : ""
                  }
                `}
              >
                <span>{item.label}</span>

                <span
                  className="
                    translate-x-0
                    text-white/30
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                    group-hover:text-white
                  "
                >
                  →
                </span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;