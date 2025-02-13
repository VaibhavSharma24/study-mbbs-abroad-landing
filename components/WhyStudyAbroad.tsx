import { CheckCircle } from "lucide-react"

export default function WhyStudyAbroad() {
  const benefits = [
    "Global Recognition",
    "Affordable Education",
    "Cultural Exposure",
    "Advanced Facilities",
    "Research Opportunities",
    "Language Skills",
  ]

  return (
    <section id="why-study" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Why Study MBBS Abroad?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md card-hover">
              <div className="flex items-center mb-4">
                <CheckCircle className="text-secondary mr-2" />
                <h3 className="text-xl font-semibold">{benefit}</h3>
              </div>
              <p className="text-gray-600">
                Experience the advantage of {benefit.toLowerCase()} when you choose to study MBBS abroad.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

