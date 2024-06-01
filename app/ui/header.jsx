"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 mx-auto flex w-full flex-row items-end p-2 transition duration-300 ease-in ${scrolled ? "bg-purple-900" : "bg-transparent"}`}
    >
      <div className="mr-auto h-8 w-24 bg-gray-950 md:mr-0"></div>

      <div className="ml-3 mr-auto hidden sm:flex sm:justify-between">
        <Link
          href="/home"
          className={`${pathname === "/" ? "border-b-4 border-b-purple-950 px-2 pb-1" : ""} ml-3 capitalize hover:text-purple-950`}
        >
          home
        </Link>
        <Link
          href="/drama"
          className={`${pathname === "/drama" ? "border-b-4 border-b-purple-950 px-2 pb-1" : ""} ml-3 capitalize hover:text-purple-950`}
        >
          drama
        </Link>
        <Link
          href="/adventure"
          className={`${pathname === "/adventure" ? "border-b-4 border-b-purple-950 px-2 pb-1" : ""} ml-3 capitalize hover:text-purple-950`}
        >
          adventure
        </Link>
        <Link
          href="/action"
          className={`${pathname === "/action" ? "border-b-4 border-b-purple-950 px-2 pb-1" : ""} ml-3 capitalize hover:text-purple-950`}
        >
          action
        </Link>
      </div>

      <input
        type="text"
        placeholder="Search for movies, shows, anything..."
        className="w-44 border-b border-b-slate-500 bg-transparent bg-searchIcon bg-left bg-no-repeat px-3 pb-1.5 pl-8 text-sm focus:bg-none focus:pl-3 focus:outline-none sm:w-1/3 md:w-2/5"
      />
    </header>
  );
}
