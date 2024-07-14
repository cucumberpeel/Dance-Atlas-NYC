"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleSearchClick = () => {
    router.push("/home");
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <header className="w-full p-4 bg-gray-100 dark:bg-gray-900 shadow-md">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Dance Atlas NYC</h1>
          <div className="space-x-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md text-sm">
              Sign Up
            </button>
            <button className="px-4 py-2 bg-gray-500 text-white rounded-md text-sm">
              Log In
            </button>
          </div>
        </div>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Discover Dance Classes and Events in NYC
        </h2>
        <button
          onClick={handleSearchClick}
          className="px-6 py-3 bg-blue-600 text-white text-lg rounded-md mb-12"
        >
          Search
        </button>
      </main>

      <footer className="w-full p-4 bg-gray-100 dark:bg-gray-900 shadow-md">
        <div className="max-w-5xl mx-auto flex items-center justify-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2024 Dance Atlas NYC. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
