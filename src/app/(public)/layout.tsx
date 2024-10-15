import { Header } from "@/widgets/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="glex-grow flex h-full flex-col">{children}</main>
    </>
  );
}
