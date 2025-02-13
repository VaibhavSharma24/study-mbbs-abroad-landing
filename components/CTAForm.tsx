"use client"

import { useState } from "react"
import { Send } from "lucide-react"

export default function CTAForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const validateForm = () => {
    const formErrors = {}
    if (!formData.name.trim()) formErrors.name = "Name is required"
    if (!formData.email.trim()) formErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) formErrors.email = "Email is invalid"
    if (!formData.phone.trim()) formErrors.phone = "Phone is required"
    if (!formData.country.trim()) formErrors.country = "Country preference is required"
    return formErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formErrors = validateForm()
    if (Object.keys(formErrors).length === 0) {
      // Form is valid, you can submit the data here
      console.log("Form submitted:", formData)
      // Reset form after submission
      setFormData({ name: "", email: "", phone: "", country: "" })
      setErrors({})
    } else {
      setErrors(formErrors)
    }
  }

  return (
    <section id="contact" className="py-16 gradient-bg text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Start Your MBBS Journey Abroad</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-xl">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-primary"
              placeholder="Your Name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-primary"
              placeholder="Your Email"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block mb-2 text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-primary"
              placeholder="Your Phone Number"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="country" className="block mb-2 text-gray-700">
              Preferred Country
            </label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-primary"
            >
              <option value="">Select a country</option>
              <option value="Russia">Russia</option>
              <option value="Uzbekistan">Uzbekistan</option>
              <option value="Kazakhstan">Kazakhstan</option>
              <option value="Philippines">Philippines</option>
              <option value="Georgia">Georgia</option>
              <option value="Kyrgyzstan">Kyrgyzstan</option>
              <option value="Egypt">Egypt</option>
            </select>
            {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded-lg font-semibold hover:bg-primary-dark transition duration-300 flex items-center justify-center"
          >
            <Send className="mr-2" size={18} />
            Apply Now
          </button>
        </form>
      </div>
    </section>
  )
}

