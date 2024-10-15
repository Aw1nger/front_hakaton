import { usePost } from "@/shared/hooks/use-post/usePost";
import { z } from "zod";

export const editProfileSchema = z.object({
  firstname: z
    .string()
    .min(3, "Имя должно содержать не менее 3 символов")
    .max(32, "Имя должно содержать не более 32 символов"),
  lastname: z
    .string()
    .min(3, "Фамилия должна содержать не менее 3 символов")
    .max(32, "Фамилия должна содержать не более 32 символов"),
  avatar: z
    .instanceof(File, { message: "Нужно выбрать фото" })
    .refine((file) => file.type === "image/jpeg" || file.type === "image/png", {
      message: "Фото должно быть в формате jpeg или png",
    })
    .refine((file) => file.size < 5 * 1024 * 1024, {
      message: "Фото должно быть меньше 5 мб",
    })
    .nullable(),
});

const editProfileResponseSchema = z.string();

export const useEditProfile = () => {
  return usePost<z.infer<typeof editProfileSchema>>(
    "/Profile/UpdateProfile",
    editProfileResponseSchema,
  );
};
