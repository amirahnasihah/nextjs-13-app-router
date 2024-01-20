import Link from "next/link";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <nav className="fixed right-0 z-10 top-100 h-screen w-60 bg-gray-800">
        <ul className="flex-col p-2">
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
      {/* will display /about/page.tsx */}
      <div>{children}</div>
    </section>
  );
}
