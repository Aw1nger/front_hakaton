import { Button } from "@/shared/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/shared/components/ui/sheet";
import { navbarLinks } from "@/widgets/header/config/config";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Logo from "./logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Image alt="" src={Logo} className="h-auto w-32" />
        </Link>
        {navbarLinks.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="text-muted-foreground transition-colors hover:text-foreground"
            prefetch={false}
          >
            {item.title}
          </Link>
        ))}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <MenuIcon className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link href="/" className="flex items-center gap-2" prefetch={false}>
              <Image alt="" src={Logo} className="h-auto w-32" />
            </Link>
            {navbarLinks.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground"
                prefetch={false}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Navbar;
