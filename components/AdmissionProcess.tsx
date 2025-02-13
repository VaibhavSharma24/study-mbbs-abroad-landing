export default function AdmissionProcess() {
  const steps = [
    { title: "Research", description: "Explore countries and universities offering MBBS programs." },
    { title: "Eligibility Check", description: "Ensure you meet the academic and language requirements." },
    { title: "Document Preparation", description: "Gather all necessary documents for application." },
    { title: "Application Submission", description: "Apply to your chosen universities." },
    { title: "Entrance Exam", description: "Prepare for and take any required entrance exams." },
    { title: "Visa Process", description: "Apply for a student visa once accepted." },
  ]

  return (
    <section id="admission" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Admission Process & Eligibility</h2>
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start card-hover bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4">
                {index + 1}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

