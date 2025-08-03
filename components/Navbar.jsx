"use client";

import { useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { FiMenu, FiX, FiUser, FiLogOut } from "react-icons/fi";
import Logo from "../components/assets/Bwl.svg";

import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();

  return (
    <nav className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
          <Image src={Logo} alt="Bwl" height={50} width={150}/>
            {/* <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-lg">R</span>
            </div>
            <span className="text-xl font-bold text-yellow-400">RSPL</span> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <Link
              href="/"
              className="text-white hover:text-yellow-400 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/#teams"
              className="text-white hover:text-yellow-400 transition-colors"
            >
              Teams
            </Link>
            {/* <Link
              href="/about"
              className="text-white hover:text-yellow-400 transition-colors"
            >
              About
            </Link> */}
            <Link
              href="/contact"
              className="text-white hover:text-yellow-400 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-6">
            {status === "loading" ? (
              <div className="w-8 h-8 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
            ) : session ? (
              <div className="flex items-center space-x-4">
                <Link
                  href="/dashboard"
                  className="flex items-center space-x-2 text-yellow-400 hover:text-yellow-300"
                >
                  <FiUser />
                  <span>Dashboard</span>
                </Link>
                <button
                  onClick={() => signOut()}
                  className="flex items-center space-x-2 text-red-400 hover:text-red-300"
                >
                  <FiLogOut />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-white hover:text-yellow-400 transition-colors"
                >
                  Login
                </Link>
                <Link href="/register" className="btn-primary">
                  Register Now
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-yellow-400"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              href="/"
              className="block text-white hover:text-yellow-400 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/#teams"
              className="block text-white hover:text-yellow-400 transition-colors"
            >
              Teams
            </Link>
            <Link
              href="/about"
              className="block text-white hover:text-yellow-400 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block text-white hover:text-yellow-400 transition-colors"
            >
              Contact
            </Link>
            {session ? (
              <>
                <Link
                  href="/dashboard"
                  className="block text-yellow-400 hover:text-yellow-300"
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => signOut()}
                  className="block text-red-400 hover:text-red-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="block text-white hover:text-yellow-400 transition-colors"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="block btn-primary text-center"
                >
                  Register Now
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
