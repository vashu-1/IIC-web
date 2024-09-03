"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const navigate = (name) => {
    router.push(name);
  };
  return (
    <div className="flex max-w-full mx-24 h-20 text-white justify-between items-center text-xl">
      <div className="logo">
        <h1>IIC</h1>
      </div>
      <ul className="flex ">
        <li className="mx-4 headline">
          <Link href="/" activeClass="active">
            HOME
          </Link>
        </li>
        <li className="mx-4">
          <Link href="/About">ABOUT</Link>
        </li>
        <li className="mx-4">
          <Link href="/Initiatives">INITIATIVES</Link>
        </li>
        <li className="mx-4">
          <Link href="/Team">TEAM</Link>
        </li>
        <li className="mx-4">
          <Link href="/Gallery">GALLERY</Link>
        </li>
      </ul>
      <button
        className="px-8 text-xl rounded-3xl py-2 text-white border-white border-2"
        onClick={() => navigate("/contact")}
      >
        CONTACT US
      </button>
    </div>
  );
};

export default Navbar;
