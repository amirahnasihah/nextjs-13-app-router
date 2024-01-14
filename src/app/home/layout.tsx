import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Halaman Home",
  description: "My homepage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
