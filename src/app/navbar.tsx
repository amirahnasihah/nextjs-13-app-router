// this is a component

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between bg-gray-800 py-2 px-5">
      <h1 className="text-white">Navbar</h1>
      <ul className="flex space-x-5 ml-auto">
        <Link href={`/`}>
          <li className="text-blue-200 cursor-pointer">Home</li>
        </Link>
        <Link href={`/about`}>
          <li className="text-blue-200 cursor-pointer">About</li>
        </Link>
        <Link href={`/about/profile`}>
          <li className="text-blue-200 cursor-pointer">Profile</li>
        </Link>
      </ul>
    </nav>
  );
}
