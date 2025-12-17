import Header from "@/components/shared/Header";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header variant="transparent" />
      <main>{children}</main>
    </>
  );
}

