"use client"

import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import type React from "react" // Added import for React

export default function Footer() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    const headerOffset = 80
    if (element) {
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Study MBBS Abroad</h3>
            <p className="text-sm text-gray-400">Your gateway to international medical education.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  href="#why-study"
                  onClick={(e) => scrollToSection(e, "why-study")}
                  className="hover:text-primary transition duration-300 cursor-pointer"
                >
                  Why Study Abroad
                </a>
              </li>
              <li>
                <a
                  href="#countries"
                  onClick={(e) => scrollToSection(e, "countries")}
                  className="hover:text-primary transition duration-300 cursor-pointer"
                >
                  Top Countries
                </a>
              </li>
              <li>
                <a
                  href="#admission"
                  onClick={(e) => scrollToSection(e, "admission")}
                  className="hover:text-primary transition duration-300 cursor-pointer"
                >
                  Admission Process
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, "contact")}
                  className="hover:text-primary transition duration-300 cursor-pointer"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-sm text-gray-400">Email: info@studymbbsabroad.com</p>
            <p className="text-sm text-gray-400">Phone: +1 234 567 8900</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Study MBBS Abroad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

