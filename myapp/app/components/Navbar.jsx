import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 text-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          DriveCheckr
        </Link>
        <div className="space-x-4">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/pricing" className="hover:text-blue-600">Pricing</Link>
          <Link href="/faq" className="hover:text-blue-600">Services</Link>
          <Link href="/contact" className="hover:text-blue-600">Email</Link>
        </div>
      </div>
    </nav>
  );
}
