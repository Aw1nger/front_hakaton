"use client";

import { Button } from "@/shared/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import { useAuth } from "@/shared/providers/auth-provider";
import axios from "axios";
import { CircleUserIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const UserDropdown = () => {
  const { session } = useAuth();
  const navigate = useRouter();
  const user_name = session.user?.firstname + " " + session.user?.lastname;

  const hendleLogout = async () => {
    const response = await axios.post("/api/logout");
    if (response.status !== 200) {
      toast.error(response.data.message);
    } else {
      toast.success(response.data.message);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon" className="rounded-full">
          {session.user?.avatar ? (
            <Image
              src={session.user?.avatar}
              alt="User avatar"
              width={200}
              height={200}
              className="h-9 w-9 rounded-full"
            />
          ) : (
            <CircleUserIcon className="h-5 w-5" />
          )}
          <span className="sr-only">Выподающее меню пользователя</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>{user_name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => navigate.push("/profile")}>
          Профиль
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={async () => await hendleLogout()}>
          Выйти
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
