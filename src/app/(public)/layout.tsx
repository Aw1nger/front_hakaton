import { getSession } from "@/entities/check-session/check-session";
import { Button } from "@/shared/components/ui/button";
import { Header } from "@/widgets/header";
import { UserDropdown } from "@/widgets/header/ui/user-dropdown";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  return (
    <>
      <Header>
        {session.auth ? <UserDropdown /> : <Button>Войти</Button>}
      </Header>
      <main className="flex h-full flex-grow flex-col">{children}</main>
    </>
  );
}
