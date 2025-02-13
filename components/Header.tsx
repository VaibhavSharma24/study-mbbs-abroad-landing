"use client"

import type React from "react"
import { useState } from "react"
import Popup from "./Popup"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    const headerOffset = 80 // Height of your fixed header
    if (element) {
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    setIsOpen(false) // Close mobile menu after clicking
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">Study MBBS Abroad</div>
          <div className="hidden md:flex space-x-6">
            <a
              href="#why-study"
              onClick={(e) => scrollToSection(e, "why-study")}
              className="text-gray-600 hover:text-primary transition duration-300 cursor-pointer"
            >
              Why Study Abroad
            </a>
            <a
              href="#countries"
              onClick={(e) => scrollToSection(e, "countries")}
              className="text-gray-600 hover:text-primary transition duration-300 cursor-pointer"
            >
              Countries
            </a>
            <a
              href="#admission"
              onClick={(e) => scrollToSection(e, "admission")}
              className="text-gray-600 hover:text-primary transition duration-300 cursor-pointer"
            >
              Admission
            </a>
            <button
              onClick={() => setIsPopupOpen(true)}
              className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark transition duration-300"
            >
              Contact Us
            </button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-500 hover:text-gray-700 focus:outline-none">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4 animate-fadeIn">
            <a
              href="#why-study"
              onClick={(e) => scrollToSection(e, "why-study")}
              className="block py-2 text-gray-600 hover:text-primary"
            >
              Why Study Abroad
            </a>
            <a
              href="#countries"
              onClick={(e) => scrollToSection(e, "countries")}
              className="block py-2 text-gray-600 hover:text-primary"
            >
              Countries
            </a>
            <a
              href="#admission"
              onClick={(e) => scrollToSection(e, "admission")}
              className="block py-2 text-gray-600 hover:text-primary"
            >
              Admission
            </a>
            <button
              onClick={() => {
                setIsPopupOpen(true)
                setIsOpen(false)
              }}
              className="block w-full text-left py-2 text-primary font-semibold"
            >
              Contact Us
            </button>
          </div>
        )}
      </nav>
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </header>
  )
}

