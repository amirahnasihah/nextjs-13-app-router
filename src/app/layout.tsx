/** 
- Pages and Layouts: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts

- Page: A page is UI that is unique to a route.define pages by exporting a component from a `page.js` file.

- Layouts: A layout is UI that is **shared** between multiple pages. On navigation, layouts preserve state, remain interactive, and do not re-render. Layouts can also be nested.
*/
"use client";

// import type { Metadata } from "next";
import { Chilanka } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import { usePathname } from "next/navigation";

const inter = Chilanka({ subsets: ["latin"], weight: "400" });

const disableNavbar = ["/login", "/register"];

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="en">
      {/* Include shared UI here e.g. a header or sidebar */}

      {/* below is Root Layout (required) <body> tag */}
      <body className={inter.className}>
        {!disableNavbar.includes(pathname) && <Navbar />}
        {/* <Navbar></Navbar> */}
        {children}
      </body>
    </html>
  );
}

/**
- first layout.tsx -> access `{children}`, iaitu bergantung pd page yg kita buka (routing mana yg kita buka cth root page.tsx) -> then go to page.tsx

- "jika disableNavbar TIDAK(!) mengandungi pathname iaitu '/login' dgn '/register', maka paparkan elemen Navbar"
- kalau berada di url '/login' dgn '/register', jadi takda Navbar
*/
