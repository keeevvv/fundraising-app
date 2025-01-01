"use client";
import React, { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header className="bg-cream fixed top-0 w-full h-16 z-50 ">
        <div className="h-full ">
          <nav className="flex items-center justify-between h-full mx-8 md:mx-24">
            <Link className="text-xl lg:text-4xl font-bold " href="/">
              Logo
            </Link>

            <div className="hidden md:flex gap-6 text-lg font-medium ">
              <ul>
                <li className="hover:underline">
                  <Link href="/home">Home</Link>
                </li>
              </ul>
              <ul>
                <li className="hover:underline">
                  <Link href="/about">About</Link>
                </li>
              </ul>
              <ul>
                <li className="hover:underline">
                  <Link href="/services">Services</Link>
                </li>
              </ul>
              <ul>
                <li className="hover:underline">
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <button
              className="md:hidden text-2xl"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <IoClose size={30} />
              ) : (
                <GiHamburgerMenu size={30} />
              )}
            </button>
            <Link href="/profile" className="hidden md:block">
              <img
                src="https://s1.zerochan.net/Shinomiya.Kaguya.600.2926542.jpg"
                alt="kaguya"
                className="w-12 h-12 rounded-full"
              />
            </Link>
          </nav>
        </div>
      </header>

      {/* Side Menu */}
      <aside
        className={`fixed md:hidden top-16 right-0 h-screen w-64 bg-honeydew shadow-lg transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } z-40`}
      >
        <ul className="flex flex-col p-6 space-y-4  ">
          <li className="hover:bg-black ">
            <Link href="/" className="text-lg ">
              Home
            </Link>
          </li>
          <li className="hover:bg-black">
            <Link href="/about" className="text-lg ">
              About
            </Link>
          </li>
          <li className="hover:bg-black">
            <Link href="/contact" className="text-lg ">
              Contact
            </Link>
          </li>
        </ul>
      </aside>

      {/* Overlay to close menu */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
}
