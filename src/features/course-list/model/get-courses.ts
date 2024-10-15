import { useGet } from "@/shared/hooks/use-get/useGet";
import { z } from "zod";

const responseSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export const getCourses = () => {
  return useGet("/api/tests/get-all", responseSchema);
};
