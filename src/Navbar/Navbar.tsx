import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { FaAngleDown } from "react-icons/fa";
import WhatWeDo from "./WhatWeDo";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className=" fixed w-full z-10 backdrop-blur-md bg-white/30">
      <div className="px-10 lg:px-20">
        <div className="flex gap-12 justify-between lg:gap-44 h-20 items-center">
          <div>
            <img src={logo} alt="" />
          </div>
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-16 items-center">
            {/* link 1 */}
            <div className="relative group">
              <a
                href="#"
                className="relative text-white text-lg font-medium group"
              >
                <span className="flex items-center hover:text-blue-500">
                  What We Do
                  <FaAngleDown />
                </span>
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <WhatWeDo />
            </div>
            {/* link 2 */}

            {/* Services with dropdown */}

            <a
              href="#"
              className="text-white text-lg font-medium border-b hover:border-b-blue-500 hover:text-blue-500 transition"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-800">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-2">
          <a
            href="#"
            className="block text-white text-lg font-medium border-b hover:border-b-blue-500 hover:text-blue-500 transition"
          >
            Home
          </a>
          <a
            href="#"
            className="block text-white text-lg font-medium border-b hover:border-b-blue-500 hover:text-blue-500 transition"
          >
            About
          </a>
          <a
            href="#"
            className="block text-white text-lg font-medium border-b hover:border-b-blue-500 hover:text-blue-500 transition"
          >
            Services
          </a>
          <a
            href="#"
            className="block text-white text-lg font-medium border-b hover:border-b-blue-500 hover:text-blue-500 transition"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
