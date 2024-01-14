import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Blog Post",
  description: "Hashnode Blog Post",
};

export default function PostLayout({
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
