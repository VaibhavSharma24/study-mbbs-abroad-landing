import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import WhyStudyAbroad from "@/components/WhyStudyAbroad"
import TopCountries from "@/components/TopCountries"
import AdmissionProcess from "@/components/AdmissionProcess"
import CTAForm from "@/components/CTAForm"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <WhyStudyAbroad />
      <TopCountries />
      <AdmissionProcess />
      <CTAForm />
      <Footer />
    </main>
  )
}

