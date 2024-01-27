// this is a component
"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation"; // when click on Home, text is blue, when click on About, text is blue

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className="flex justify-between bg-gray-800 py-2 px-5">
      <div className="flex">
        {" "}
        <h1 className="text-white">Navbar</h1>
        <ul className="flex space-x-5 ml-5">
          <Link href={`/`}>
            <li
              className={`cursor-pointer ${
                pathname === "/" ? "text-blue-200" : "text-white"
              }`}
            >
              Home
            </li>
          </Link>
          <Link href={`/about`}>
            <li
              className={`${
                pathname === "/about" ? "text-blue-200" : "text-white"
              } cursor-pointer`}
            >
              About
            </li>
          </Link>
          <Link href={`/about/profile`}>
            <li
              className={`${
                pathname === "/about/profile" ? "text-blue-200" : "text-white"
              } cursor-pointer`}
            >
              Profile
            </li>
          </Link>
          <Link href={`/product`}>
            <li
              className={`${
                pathname === "/product" ? "text-blue-200" : "text-white"
              } cursor-pointer`}
            >
              Product
            </li>
          </Link>
        </ul>
      </div>

      <div className="flex ml-3">
        <button
          type="button"
          className="bg-white rounded-md px-2 text-sm h-6"
          onClick={() => router.push("/login")}
        >
          Login
        </button>
      </div>
    </nav>
  );
}

/**
- Linking and Navigating: https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating

- three ways to navigate between routes in Next.js: `<Link>` Component, `useRouter` Hook, native History API

- <Link> Component: built-in component that extends the HTML <a> tag. `import Link from 'next/link'`

- Checking Active Links: use usePathname() to determine if a link is active. `import { usePathname } from 'next/navigation'`

- `useRouter()` Hook: to programmatically change routes from Client Components. For Server Components, you would `redirect()` instead. `import { useRouter } from 'next/navigation'`
*/
