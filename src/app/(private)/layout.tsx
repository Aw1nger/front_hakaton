import { getSession } from "@/entities/check-session/check-session";
import { Header } from "@/widgets/header";
import { UserDropdown } from "@/widgets/header/ui/user-dropdown";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  if (!session.auth) {
    redirect("/login");
  }
  return (
    <>
      <Header>
        <UserDropdown />
      </Header>
      <main className="glex-grow flex h-full flex-col">{children}</main>
    </>
  );
}
