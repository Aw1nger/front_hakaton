import { ThemeBtn } from "@/features/theme-btn";
import Navbar from "./navbar";

export const Header = ({ children }: { children?: React.ReactNode }) => {
  return (
    <header className="sticky top-0 flex h-16 items-center justify-between gap-4 border-b bg-background px-6">
      <Navbar />
      <div className="flex items-center justify-end gap-4 md:ml-auto md:gap-2 lg:gap-4">
        {children}
        <ThemeBtn />
      </div>
    </header>
  );
};
