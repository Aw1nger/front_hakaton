"use client";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/shared/components/ui/avatar";
import { useAuth } from "@/shared/providers/auth-provider";
import { CircleUserIcon } from "lucide-react";
import { EditProfileDialog } from "./edit-profile-dialog";

export const UserProfile = () => {
  const { session } = useAuth();
  const user_name = session.user?.firstname + " " + session.user?.lastname;

  return (
    <div className="mb-3 flex flex-wrap">
      <div className="basis-full p-2 md:basis-1/2">
        <div className="flex flex-wrap">
          <div className="p-1 sm:basis-1/3">
            <Avatar className="h-auto w-full">
              <AvatarImage src={session.user?.avatar ?? ""} alt="User Avatar" />
              <AvatarFallback>
                <CircleUserIcon className="h-full w-full p-7" />
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="flex flex-col justify-center gap-2 p-1 sm:basis-2/3 sm:pl-10">
            <div className="">
              <h2 className="text-2xl md:text-3xl lg:text-4xl">{user_name}</h2>
              <h3 className="text-md opacity-50 md:text-lg lg:text-xl">
                {session.user?.email}
              </h3>
            </div>
            <EditProfileDialog />
          </div>
        </div>
      </div>
    </div>
  );
};
