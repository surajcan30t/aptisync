import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black py-4 px-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        {/* Logo or Brand Name can go here */}

        {/* Hamburger button for mobile */}
        <div className="lg:hidden w-full flex justify-end">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex flex-wrap items-center justify-center gap-4 lg:gap-8">
          <li>
            <a
              href="#about"
              className="hover:text-blue-400 transition-colors duration-300 text-white"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#products"
              className="hover:text-blue-400 transition-colors duration-300 text-white"
            >
              Products
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="hover:text-blue-400 transition-colors duration-300 text-white"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#case-studies"
              className="hover:text-blue-400 transition-colors duration-300 text-white"
            >
              Case Studies
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-blue-400 transition-colors duration-300 text-white"
            >
              Contact
            </a>
          </li>
          <li>
            <Button
              variant="outline"
              size="sm"
              className="text-white border-white hover:bg-white hover:text-black transition-all duration-300"
            >
              Request A Support ✓
            </Button>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="lg:hidden mt-4 space-y-4 text-center">
          <li>
            <a
              href="#about"
              className="block text-white hover:text-blue-400 transition-colors duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#products"
              className="block text-white hover:text-blue-400 transition-colors duration-300"
            >
              Products
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="block text-white hover:text-blue-400 transition-colors duration-300"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#case-studies"
              className="block text-white hover:text-blue-400 transition-colors duration-300"
            >
              Case Studies
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block text-white hover:text-blue-400 transition-colors duration-300"
            >
              Contact
            </a>
          </li>
          <li>
            <Button
              variant="outline"
              size="sm"
              className="w-full text-white border-white hover:bg-white hover:text-black transition-all duration-300"
            >
              Request A Support ✓
            </Button>
          </li>
        </ul>
      )}
    </nav>
  );
}
