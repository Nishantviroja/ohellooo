import Link from 'next/link';
import Image from 'next/image';


export default function Navbar() {
  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-52">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="font-bricolage text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-gradient">
            {/* Fizoval - Your AI Insider */}
             <Image src="/Fizoval.png" alt="Example" width={130} height={200} />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="font-sen text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link href="/categories" className="font-sen text-gray-600 hover:text-gray-900 transition-colors">
              Categories
            </Link>
            <Link href="/blog" className="font-sen text-gray-600 hover:text-gray-900 transition-colors">
              Blog
            </Link>
            <Link href="/about" className="font-sen text-gray-600 hover:text-gray-900 transition-colors">
              About
            </Link>
          </nav>
          {/* <div className="hidden md:flex items-center space-x-4">
            <button className="p-1 rounded-full hover:bg-gray-100 transition-colors">
              <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
            <button className="p-1 rounded-full hover:bg-gray-100 transition-colors">
              <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
              </svg>
            </button>
          </div> */}
          <div className="md:hidden">
            <button className="p-1 rounded-md hover:bg-gray-100 transition-colors">
              <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
} 