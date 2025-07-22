export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="space-y-6 max-w-3xl">
        <div>
          <h2 className="text-xl font-semibold">What is a VIN?</h2>
          <p className="text-gray-700">A Vehicle Identification Number (VIN) is a unique code used to identify individual motor vehicles.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">How accurate is your report?</h2>
          <p className="text-gray-700">We aggregate data from trusted sources such as DMVs, insurance databases, and service centers.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Can I get a refund?</h2>
          <p className="text-gray-700">Due to the digital nature of our reports, all sales are final unless there's a technical issue with delivery.</p>
        </div>
      </div>
    </main>
  );
}
    