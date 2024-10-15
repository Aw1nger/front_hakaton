"use client";
import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { VscError } from "react-icons/vsc";
import { useVerify } from "../model/verify-email";

export const VerifyEmail = ({
  code,
}: {
  code: string | string[] | undefined;
}) => {
  const navigate = useRouter();
  const [sendVerify, pendingVerify, successVerify, responseVerify] =
    useVerify();

  useEffect(() => {
    if (code) {
      sendVerify({ "confirm-token": code });
    }
  }, [code, sendVerify]);

  return (
    <div className="flex h-full items-center justify-center">
      <div className="basis-full p-1 sm:basis-3/4 md:basis-2/3 lg:basis-1/3">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">
              {pendingVerify ? (
                <Skeleton className="h-10 w-full" />
              ) : (
                responseVerify
              )}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center">
            {pendingVerify && <Skeleton className="h-12 w-12" />}
            {successVerify ? (
              <FaRegCircleCheck size={48} className="text-green-500" />
            ) : (
              <VscError size={48} className="text-red-500" />
            )}
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button
              disabled={pendingVerify}
              onClick={() => navigate.push("/login")}
              className="w-full"
            >
              Перейти ко входу!
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
