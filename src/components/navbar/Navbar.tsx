"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import SocialIcon from "./SocialIcon";
import { NavbarPropsType } from "@/interfaces/NavbarPropsType";
import { NavLinksType } from "@/interfaces/NavLinksType";

const Navbar = ({ socialLinks }: NavbarPropsType) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navLinks: NavLinksType[] = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Experience", path: "#experience" },
    { name: "Projects", path: "#projects" },
    { name: "Skills", path: "#skills" },
    { name: "Contact", path: "#contact" },
  ];

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out ${
          isScrolled
            ? "py-3 bg-[#050505]/90 backdrop-blur-lg border-b border-white/10 shadow-xl"
            : "py-4 bg-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* LOGO */}
          <Link
            href="/"
            className="group relative z-10 shrink-0"
            onClick={closeMobileMenu}
          >
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight transition-all duration-300 group-hover:scale-105">
              <span className="bg-clip-text text-transparent bg-linear-to-r from-white via-slate-300 to-slate-400 group-hover:from-sky-400 group-hover:via-sky-300 group-hover:to-blue-600 transition-all duration-300">
                Sankar
              </span>
              <span className="text-sky-400 font-normal ml-1">.</span>
            </h1>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <ul className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-3 py-2 backdrop-blur-sm shadow-inner">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className="relative px-3 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:text-white focus:outline-none group"
                  onClick={closeMobileMenu}
                >
                  <span className="relative z-10">{link.name}</span>
                  <span className="absolute inset-0 -z-10 rounded-full bg-linear-to-br from-sky-500/20 via-blue-600/20 to-purple-600/20 scale-90 opacity-0 blur-sm transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0.5 h-0.5 bg-sky-400 rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:w-2 group-hover:h-2" />
                </Link>
              </li>
            ))}
          </ul>

          {/* ICONS & TOGGLE */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="hidden sm:flex items-center gap-2">
              <SocialIcon
                href={socialLinks?.LinkedinLink as string | undefined}
                src="/svgs/linkedin.svg"
                alt="LinkedIn"
                size={20}
              />
              <SocialIcon
                href={socialLinks?.GithubLink as string | undefined}
                src="/svgs/github.svg"
                alt="GitHub"
                className="bg-white/10 rounded-full p-px"
                size={20}
              />
              <SocialIcon
                href={socialLinks?.YoutubeLink as string | undefined}
                src="/svgs/youtube.svg"
                alt="YouTube"
                size={20}
              />
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-1.5 text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-sky-500/50 rounded-full transition-all duration-200"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-md flex flex-col items-center justify-center gap-8 transition-all duration-500 ease-out md:hidden ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-full opacity-0 invisible pointer-events-none"
        }`}
        role="menu"
        aria-hidden={!isMobileMenuOpen}
      >
        {/* Decorative blurred elements */}
        <div className="absolute top-16 right-16 w-48 h-48 bg-sky-500/20 rounded-full blur-[60px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-16 left-16 w-48 h-48 bg-blue-600/20 rounded-full blur-[60px] pointer-events-none animate-pulse delay-150" />

        <ul className="flex flex-col items-center gap-8 relative z-10 text-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.path}
                onClick={closeMobileMenu}
                className="text-2xl sm:text-3xl font-bold text-slate-300 hover:text-transparent hover:bg-clip-text hover:bg-linear-to-r hover:from-sky-400 hover:via-sky-300 hover:to-blue-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-500/50 rounded-lg px-4 py-2"
                role="menuitem"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex gap-6 pb-8 relative z-10">
          <SocialIcon
            href={socialLinks?.LinkedinLink as string | undefined}
            src="/svgs/linkedin.svg"
            alt="LinkedIn"
            size={32}
          />
          <SocialIcon
            href={socialLinks?.GithubLink as string | undefined}
            src="/svgs/github.svg"
            alt="GitHub"
            size={32}
            className="bg-white rounded-full p-px"
          />
          <SocialIcon
            href={socialLinks?.YoutubeLink as string | undefined}
            src="/svgs/youtube.svg"
            alt="YouTube"
            size={32}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
