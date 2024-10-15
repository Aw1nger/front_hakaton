import { usePost } from "@/shared/hooks/use-post/usePost";
import { z } from "zod";

export const registerSchema = z.object({
  name: z
    .string()
    .min(3, "Имя должно быть больше 3 символов")
    .max(32, "Имя должно быть меньше 32 символов"),
  email: z.string().email("Некорректная почта"),
  password: z
    .string()
    .min(6, "Пароль должен быть больше 6 символов")
    .max(32, "Пароль должен быть меньше 32 символов"),
  smart_token: z.string(),
});

const responseSchema = z.object({
  message: z.string(),
});

export const useReg = () => {
  return usePost<z.infer<typeof registerSchema>>(
    "/api/users/register",
    responseSchema,
  );
};
