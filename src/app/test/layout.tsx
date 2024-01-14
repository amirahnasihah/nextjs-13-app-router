import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Halaman Basic Routing",
  description: "Routing Fundamentals",
};

export default function TestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <h1>Hello Test Page</h1>
        {children}
      </body>
    </html>
  );
}
