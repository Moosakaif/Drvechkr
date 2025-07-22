export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="text-lg text-gray-700 mb-4">Have questions? Reach out to us below.</p>
      <form className="max-w-xl space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border rounded-md"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border rounded-md"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 border rounded-md h-32"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </main>
  );
}