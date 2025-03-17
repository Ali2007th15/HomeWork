"use client";

import { cn } from "@/lib/utils";

import { useState } from "react";

import { Button } from "@/components/ui/button";

import { ShoppingBag } from "lucide-react";
import logo from "../../../../public/logo.png"
import Image from "next/image";
import Link from "next/link";
import { Sidebar } from "@/features/shared/sidebar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 py-5 transition-all duration-600"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="z-10">
            <Image
              src={logo}
              alt="Pizza shop"
              width={150}
              height={50}
            />
          </Link>

          {/* Mobile Menu Button */}
          <div className="lg:hidden z-10">
            <button
              onClick={toggleMenu}
              className="flex flex-col justify-between w-8 h-7"
              aria-label="Toggle menu"
            >
              <span
                className={cn(
                  "h-1 w-full bg-[#ff6432] rounded-sm transition-all duration-300",
                  isOpen && "rotate-45 translate-y-3"
                )}
              />
              <span
                className={cn(
                  "h-1 w-full bg-[#ff6432] rounded-sm transition-all duration-300",
                  isOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "h-1 w-full bg-[#ff6432] rounded-sm transition-all duration-300",
                  isOpen && "-rotate-45 -translate-y-3"
                )}
              />
            </button>
          </div>

          <ul className="hidden lg:flex items-center space-x-8">
            {["Home", "Menu", "Events", "About us"].map((item) => (
              <li key={item}>
                <button
                  onClick={() => {
                    document
                      .getElementById(item.toLowerCase().replace(" ", "-"))
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-white hover:text-[#ff6432] transition-colors duration-200 cursor-pointer"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4 z-10">
            <Button className="bg-gradient-to-r from-[#ff6432] to-[#ffa228] hover:opacity-90 text-white border-none">
              Login
            </Button>
            <Sidebar/>
          </div>

          {/* Mobile Menu */}
          <div
            className={cn(
              "fixed inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center transition-all duration-300 lg:hidden",
              isOpen ? "opacity-100 visible" : "opacity-0 invisible"
            )}
          >
            <ul className="flex flex-col items-center space-y-6">
              {["Home", "Menu", "Events", "About us"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      document
                        .getElementById(item.toLowerCase().replace(" ", "-"))
                        ?.scrollIntoView({ behavior: "smooth" });
                      setIsOpen(false);
                    }}
                    className="text-white text-xl hover:text-[#ff6432] transition-colors duration-200"
                  >
                    {item}
                  </button>
                </li>
              ))}
              <li className="pt-6 flex flex-col items-center space-y-4">
                <Button className="bg-gradient-to-r from-[#ff6432] to-[#ffa228] hover:opacity-90 text-white border-none">
                  Login
                </Button>
                <Link
                  href="/basket"
                  className="text-white hover:text-[#ff6432] transition-colors"
                >
                  <ShoppingBag className="w-6 h-6" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
