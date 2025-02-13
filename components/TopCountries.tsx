import Image from "next/image"

export default function TopCountries() {
  const countries = ["Russia", "Uzbekistan", "Kazakhstan", "Philippines", "Georgia", "Kyrgyzstan", "Egypt"]

  const getCountryFlag = (country: string) => {
    switch (country) {
      case "Russia":
        return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Flag_of_Russia.svg-AxvyEaQcM7nIUIWzUS2Jc9uBM2Io5n.png"
      case "Uzbekistan":
        return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Flag_of_Uzbekistan.svg-KyY5WyG2Dpxl2EUrHuKkX3aFUcf6le.png"
      case "Kazakhstan":
        return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Flag_of_Kazakhstan.svg-XCiqnHoPJwi1p07uQlgK6xfl7RhhY3.png"
      case "Philippines":
        return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Flag_of_the_Philippines.svg%20(1).png-nFcBEMRXDwvBjmojSHzK81X3ti8lhd.webp"
      case "Georgia":
        return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Flag_of_Georgia.svg-PmAZbhuQG09b8h4Riv1CbkHrFhXJ5Z.png"
      case "Kyrgyzstan":
        return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Flag_of_Kyrgyzstan.svg-6C7fWHoiwCaTMhGjjvQsklqJzGrYTG.png"
      case "Egypt":
        return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Flag_of_Egypt.svg-NSbo5TXiTkh2ShIeiZYxjQ6u5EIcvY.png"
      default:
        return `/placeholder.svg?height=150&width=150`
    }
  }

  return (
    <section id="countries" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Top Countries for MBBS</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {countries.map((country, index) => (
            <div key={index} className="text-center">
              <Image
                src={getCountryFlag(country) || "/placeholder.svg"}
                alt={`${country} flag`}
                width={300}
                height={200}
                className="mx-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full h-[150px] object-cover"
              />
              <h3 className="mt-4 text-xl font-semibold">{country}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

