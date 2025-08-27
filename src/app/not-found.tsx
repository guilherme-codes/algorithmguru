import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center mt-10">
      <img
        src="/img/404.webp"
        alt="404 Not Found"
        className="max-w-xs md:max-w-md mb-8 rounded shadow-lg"
      />
      <h1 className="text-4xl font-bold mb-4">Page not found</h1>
      <p className="mb-6 text-lg text-gray-600">Oops! The content you're looking for doesn't exist or has been moved.</p>
      <Link href="/" className="btn-info">Back to Home</Link>
    </div>
  );
} 