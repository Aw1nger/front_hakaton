import { Header } from "@/widgets/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex h-full flex-grow flex-col">{children}</main>
    </>
  );
}
