import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-blue-600 backdrop-blur-md px-8 py-4 flex justify-between items-center text-white">
      <h1 className="text-xl font-bold"><a href="#">Linear</a></h1>

      {/* Desktop */}
      <ul className="hidden md:flex gap-6">
        <li>
          <a href="#features" className="hover:text-gray-400">
            Features
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-gray-400">
            About
          </a>
        </li>
        <li>
          <a href="#testimonials" className="hover:text-gray-400">
            Testimonials
          </a>
        </li>
      </ul>

      {/* Mobile Button */}
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        {open ? <HiX size={24} /> : <HiMenu size={24} />}
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute left-0 right-0 top-full z-40 bg-white p-6 flex flex-col gap-6 ">
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#testimonials">Testimonials</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
