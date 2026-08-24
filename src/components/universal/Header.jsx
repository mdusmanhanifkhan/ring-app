import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { FaBagShopping } from "react-icons/fa6";
import { FiMenu, FiX } from "react-icons/fi";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Contact Us", href: "#contact" },
];

const ACTION_ITEMS = [
  { label: "Search", icon: CiSearch },
  { label: "Account", icon: VscAccount },
  { label: "Shopping bag", icon: FaBagShopping },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`sticky mx-auto top-3 z-50 transition-all duration-700 ease-in-out sm:top-4 container`}
    >
      <div
        className={`relative min-h-16 flex items-center justify-between rounded-[18px] border transition-all duration-700 ease-in-out sm:rounded-[20px] ${
          isScrolled
            ? `border-white/8 bg-[#0c1420]/75 px-4 shadow-[0_15px_40px_rgba(0,0,0,0.18)] backdrop-blur-[18px] sm:px-5 `
            : `border-transparent bg-transparent px-1 sm:px-2`
        }`}
      >
        {/* Logo */}
        <a
          href="/"
          onClick={closeMenu}
          className="text-[17px] font-semibold text-white sm:text-[20px]"
        >
          LOGO
        </a>

        <nav className="hidden items-center gap-6 md:flex lg:gap-8">
          {NAV_ITEMS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="group relative whitespace-nowrap text-[14px] text-muted transition-colors duration-300 hover:text-white lg:text-[15px]"
            >
              {label}
              <span className="absolute -bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-white transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Actions */}

        <div className="flex items-center gap-3 text-muted sm:gap-4">
          {ACTION_ITEMS.map(({ label, icon: Icon }) => (
            <button
              key={label}
              type="button"
              aria-label={label}
              className="flex items-center justify-center transition-all duration-300 hover:-translate-y-px hover:text-white"
            >
              <Icon className={label === "Search" ? "h-6 w-6" : "h-5 w-5"} />
            </button>
          ))}

          {/* Mobile Menu */}

          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className=" flex items-center justify-center text-muted transition-colors duration-300 hover:text-white md:hidden "
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
          className={`absolute left-0 right-0 top-[calc(100%+10px)] overflow-hidden rounded-[18px] border border-white/8 bg-[#0c1420]/95 shadow-[0_15px_40px_rgba(0,0,0,0.2)] backdrop-blur-[18px] transition-all duration-500 ease-linear md:hidden ${
            isMenuOpen
              ? "pointer-events-auto max-h-100 translate-y-0 opacity-100"
              : "pointer-events-none max-h-0 -translate-y-3 opacity-0"
          }
          `}
        >
          <nav className="flex flex-col p-4">
            {NAV_ITEMS.map(({ label, href }, index) => (
              <a
                key={label}
                href={href}
                onClick={closeMenu}
                className={`group flex items-center justify-between py-4 text-[15px] text-muted transition-colors duration-300 hover:text-white
                  ${
                    index !== NAV_ITEMS.length - 1
                      ? "border-b border-white/6"
                      : ""
                  }
                `}
              >
                <span>{label}</span>
                <span className="text-white/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white">
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
