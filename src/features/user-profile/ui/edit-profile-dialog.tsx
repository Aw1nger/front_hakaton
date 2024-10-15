"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/shared/components/ui/avatar";
import { Button } from "@/shared/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/components/ui/form";
import { Input } from "@/shared/components/ui/input";
import { useAuth } from "@/shared/providers/auth-provider";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleUserIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { editProfileSchema } from "../model/edit-profile";

export const EditProfileDialog = () => {
  const [imagePreviews, setImagePreviews] = useState<string | null>(null);
  const { session } = useAuth();
  const editProfileForm = useForm<z.infer<typeof editProfileSchema>>({
    resolver: zodResolver(editProfileSchema),
  });

  useEffect(() => {
    if (session.user) {
      editProfileForm.reset({
        firstname: session.user.firstname,
        lastname: session.user.lastname,
        avatar: null,
      });
      setImagePreviews(session.user.avatar || null);
    }
  }, [session, editProfileForm]);

  const onSubmit = (values: z.infer<typeof editProfileSchema>) => {
    console.log(values);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Редактировать профиль</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[350px] rounded-lg sm:max-w-[425px]">
        <Form {...editProfileForm}>
          <DialogHeader>
            <DialogTitle>Редактировать профиль</DialogTitle>
            <DialogDescription>
              Внесите изменения в свой профиль здесь. Нажмите кнопку сохранить,
              когда закончите.
            </DialogDescription>
          </DialogHeader>

          <form
            onSubmit={editProfileForm.handleSubmit(onSubmit)}
            className="flex flex-col gap-2"
          >
            <FormField
              control={editProfileForm.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Имя</FormLabel>
                  <FormControl>
                    <Input placeholder="Имя..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={editProfileForm.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Фамилия</FormLabel>
                  <FormControl>
                    <Input placeholder="Фамилия..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={editProfileForm.control}
              name="avatar"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Аватар</FormLabel>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-auto max-w-20">
                      <AvatarImage
                        src={imagePreviews ?? session.user?.avatar}
                        alt="User Avatar"
                      />
                      <AvatarFallback>
                        <CircleUserIcon className="h-full w-full" />
                      </AvatarFallback>
                    </Avatar>
                    <FormControl>
                      <Input
                        type="file"
                        placeholder="Аватар..."
                        onChange={(e) => {
                          const file = e.target.files?.[0] || null;

                          if (file) {
                            const reader = new FileReader();
                            reader.addEventListener("load", () => {
                              const img = new Image();
                              img.src = reader.result as string;
                              img.onload = () => {
                                const canvas = document.createElement("canvas");
                                const ctx = canvas.getContext("2d");

                                const size = Math.min(img.width, img.height);
                                const offsetX = (img.width - size) / 2;
                                const offsetY = (img.height - size) / 2;

                                canvas.width = size;
                                canvas.height = size;

                                ctx?.drawImage(
                                  img,
                                  offsetX,
                                  offsetY,
                                  size,
                                  size,
                                  0,
                                  0,
                                  canvas.width,
                                  canvas.height,
                                );

                                canvas.toBlob((blob) => {
                                  if (blob) {
                                    const croppedFile = new File(
                                      [blob],
                                      file.name,
                                      {
                                        type: file.type,
                                        lastModified: Date.now(),
                                      },
                                    );

                                    field.onChange(croppedFile);

                                    const croppedImage =
                                      URL.createObjectURL(croppedFile);
                                    setImagePreviews(croppedImage);
                                  }
                                }, "image/jpeg");
                              };
                            });
                            reader.readAsDataURL(file);
                          } else {
                            setImagePreviews(null);
                            field.onChange(null);
                          }
                        }}
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit">Сохранить изменения</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
