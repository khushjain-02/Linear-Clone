import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinkClasses =
    "text-sm font-medium text-slate-200 hover:text-cyan-300 transition-colors duration-200";

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        <Link to="/" className="text-xl font-semibold tracking-tight text-slate-50">
          <span className="bg-linear-to-r from-violet-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
            Linear
          </span>
          <span className="ml-1 text-slate-500">Clone</span>
        </Link>

        {/* Desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          <li>
            <Link to="/features" className={navLinkClasses}>
              Features
            </Link>
          </li>
          <li>
            <Link to="/about" className={navLinkClasses}>
              About
            </Link>
          </li>
          <li>
            <Link to="/testimonials" className={navLinkClasses}>
              Testimonials
            </Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <button
          className="inline-flex items-center justify-center rounded-lg p-2 text-slate-200 hover:bg-slate-800 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <HiX size={22} /> : <HiMenu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-slate-800 bg-slate-950/95 px-4 pb-6 pt-3 md:hidden">
          <nav className="flex flex-col gap-4 text-sm">
            <Link
              to="/features"
              className={navLinkClasses}
              onClick={() => setOpen(false)}
            >
              Features
            </Link>
            <Link
              to="/about"
              className={navLinkClasses}
              onClick={() => setOpen(false)}
            >
              About
            </Link>
            <Link
              to="/testimonials"
              className={navLinkClasses}
              onClick={() => setOpen(false)}
            >
              Testimonials
            </Link>
          </nav>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
