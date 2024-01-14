import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Projects",
  description: "Projects Array",
};

export default function ProjectLayout({
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
