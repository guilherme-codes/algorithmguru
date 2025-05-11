'use client'
import { useState } from "react";
import SidebarNav from "./nav";
import { Righteous } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const righteous = Righteous({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-righteous"
});

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="lg:hidden fixed top-0 left-0 w-full bg-blue-custom text-white p-2 px-4 flex justify-between items-center z-50">
        <Link href="/" className={righteous.className}>
          <span className="text-lg uppercase">Algorithm Guru</span>
        </Link>
        <button onClick={toggleSidebar} className="p-2 cursor-pointer">
          <i className={`fas text-[1.5rem] fa-${isOpen ? "times" : "bars"}`}></i>
        </button>
      </nav>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      <aside
        id="sidebar"
        className={`
          w-4/5 max-w-xs h-screen fixed top-0 left-0 
          bg-blue-custom text-white p-2 pt-5  overflow-y-auto 
          transition-transform transform z-50 
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0 lg:w-64
          shadow-lg
          opacity-95
        `
        }
      >
        <div className="flex flex-col justify-center items-center mb-6 hidden lg:flex">
          <Link href="/" className="flex flex-col items-center">
            <Image 
              src="/img/capivara.webp"
              alt="Capibara Logo" 
              className="px-3 pt-5"
              width={200}
              height={200} 
            />
            <span className={`${righteous.className} text-[2rem] uppercase leading-none text-center`}>
              Algorithm Guru
            </span>
          </Link>
        </div>
        <SidebarNav />
      </aside>
    </>
  );
}
