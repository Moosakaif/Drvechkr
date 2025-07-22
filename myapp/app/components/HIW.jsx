export default function HowItWorks() {
  const steps = [
    { title: "Enter VIN", desc: "Start by entering your vehicle's VIN above." },
    { title: "Generate Report", desc: "We search databases for accident and service history." },
    { title: "View Results", desc: "See detailed vehicle information instantly." },
  ];

  return (
    <section className="py-16 px-6 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-10">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, idx) => (
          <div key={idx} className="p-6 bg-white rounded-xl shadow-md">
            <div className="text-xl font-semibold mb-2">{step.title}</div>
            <p className="text-gray-600">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}