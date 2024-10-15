import { usePost } from "@/shared/hooks/use-post/usePost";
import { z } from "zod";

const verifySchema = z.object({
  "confirm-token": z.union([z.string(), z.array(z.string())]),
});

const responseSchema = z.object({
  message: z.string(),
});

export const useVerify = () => {
  return usePost<z.infer<typeof verifySchema>>(
    "/api/users/confirm-email",
    responseSchema,
  );
};
