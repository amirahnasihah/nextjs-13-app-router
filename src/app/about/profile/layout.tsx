export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Title: Profile Layout</h1>
      {children}
    </div>
  );
}
