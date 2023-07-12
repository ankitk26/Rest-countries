"use client";

import { Moon, Sun } from "lucide-react";
import Link from "next/link";

interface Props {}

export default function Header({}: Props) {
  return (
    <nav className="shadow py-4">
      <header className="w-11/12 mx-auto flex items-center justify-between">
        <Link href="/">
          <h2 className="text-xl">Where in the world?</h2>
        </Link>

        <button
          className="flex items-center gap-4 bg-transparent border-none focus:outline-none"
          // onClick={toggleTheme}
        >
          <Sun size={18} />
          <Moon size={18} />
          <h4 className="hidden md:block">
            {/* {theme === "light" ? "Light" : "Dark"} mode */}
          </h4>
        </button>
      </header>
    </nav>
  );
}
