export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">Pricing</h1>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 border rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-2">Basic</h2>
          <p className="text-lg mb-4">$9.99 / report</p>
          <ul className="text-gray-700 mb-4">
            <li>- Basic vehicle history</li>
            <li>- Accident checks</li>
          </ul>
        </div>
        <div className="p-6 border rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-2">Standard</h2>
          <p className="text-lg mb-4">$19.99 / report</p>
          <ul className="text-gray-700 mb-4">
            <li>- Everything in Basic</li>
            <li>- Ownership history</li>
            <li>- Service records</li>
          </ul>
        </div>
        <div className="p-6 border rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-2">Premium</h2>
          <p className="text-lg mb-4">$29.99 / report</p>
          <ul className="text-gray-700 mb-4">
            <li>- All Standard features</li>
            <li>- Title checks</li>
            <li>- Market value insights</li>
          </ul>
        </div>
      </div>
    </main>
  );
}