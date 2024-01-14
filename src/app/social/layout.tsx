import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Social Network",
  description: "Social Network",
};

export default function SocialLayout({
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
