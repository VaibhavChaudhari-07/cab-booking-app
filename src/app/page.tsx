import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Cab Booking App</h1>
        <p className="text-center mb-6">Welcome to our ride-hailing service.</p>
        <div className="space-y-4">
          <Link
            href="/sign-in"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 block text-center"
          >
            Sign In
          </Link>
          <Link
            href="/sign-up"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 block text-center"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
