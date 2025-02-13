"use client"
import Image from "next/image"
import type React from "react" // Added import for React

export default function HeroSection() {
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
    <section className="gradient-bg text-white py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn">Study MBBS Abroad</h1>
            <p className="text-xl mb-8 animate-fadeIn">Unlock Your Medical Career with International Education</p>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="bg-white text-primary py-3 px-8 rounded-full text-lg font-semibold transition duration-300 inline-block animate-fadeIn hover:bg-primary hover:text-white"
            >
              Apply Now for MBBS Abroad
            </a>
          </div>
          <div className="md:w-1/2 animate-fadeIn">
            <div className="relative rounded-xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm p-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gifts-studyabroad-MsSvRgWw1bO7OEPoKQX74FQV3aBvBb.png"
                alt="Global landmarks illustration showing international study destinations"
                width={600}
                height={400}
                className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
                priority
                style={{ objectFit: "contain" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f3f4f6"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}

