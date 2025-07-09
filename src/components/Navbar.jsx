import { useState } from "react";
import { Link } from "react-router"; // Use react-router-dom, not "react-router"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", to: "/" },
  { name: "Stack", to: "/stack" },
  { name: "Bubble Sort", to: "/bubbleSort" },
  { name: "Linked List", to: "/linkedlist" },
  { name: "Queue", to: "/queue" },
  { name: "Linear Search", to: "/linearSearch" },
  { name: "Binary Search", to: "/binarySearch" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-gray-50 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-purple-700">
          DSAWOW
        </Link>

        {/* Hamburger Toggle */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-black">
            {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>

        {/* Links for Larger Screens */}
        <div className="hidden lg:flex space-x-4">
          {navigation.map((item) => (
            <Link key={item.name} to={item.to} className="btn btn-ghost">
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="lg:hidden px-4 pt-2 pb-4 space-y-2">
          {navigation.map((item) => (
            <Link key={item.name} to={item.to} className="block btn btn-ghost">
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}