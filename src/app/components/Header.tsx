"use client";

import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="w-full h-24 md:h-32 flex items-center justify-between">
        <Link className="font-semibold text-xl md:text-2xl" href={"/"}>
          Lunex
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-between gap-6 items-center">
          <div className="flex gap-6 lg:gap-12 items-center text-base lg:text-lg">
            <Link href={"/workflow"} className="hover:underline">
              Workflow
            </Link>
            <Link href={"/blog"} className="hover:underline">
              Blog
            </Link>
            <Link href={"/project"} className="hover:underline">
              Project
            </Link>
          </div>
          <div className="border-r h-11"></div>
          <ModeToggle />
        </nav>

        {/* Mobile Navigation Button */}
        <div className="flex items-center gap-4 md:hidden">
          <ModeToggle />
          <button
            onClick={toggleMenu}
            className="p-1 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background pt-24 px-4 md:hidden">
          <nav className="flex flex-col items-center gap-8 text-xl">
            <Link
              href={"/workflow"}
              className="hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Workflow
            </Link>
            <Link
              href={"/blog"}
              className="hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href={"/project"}
              className="hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Project
            </Link>
            <Link
              href={"/"}
              className="hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
