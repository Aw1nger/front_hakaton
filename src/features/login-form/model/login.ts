import { usePost } from "@/shared/hooks/use-post/usePost";
import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, "Пароль должен содержать не менее 8 символов")
    .max(32, "Пароль должен содержать не более 32 символов"),
  smart_token: z.string(),
});

export const loginResponseSchema = z.string();

export const useLogin = () => {
  return usePost<z.infer<typeof loginSchema>>(
    "/Authorization/login",
    loginResponseSchema,
  );
};
