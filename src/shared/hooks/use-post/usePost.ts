import { useState, useTransition } from "react";
import { z, ZodSchema } from "zod";
import { postAction } from "./post-acion";

export function usePost<dataType>(url: string, schema: ZodSchema) {
  const [isPending, startTransition] = useTransition();
  const [isSuccessed, setIsSuccessed] = useState<boolean>(true);
  const [response, setResponse] = useState<z.infer<typeof schema>>();

  const sendPost = async (data?: dataType): Promise<boolean> => {
    return new Promise((resolve) => {
      startTransition(async () => {
        await postAction(url, data).then(({ response, success }) => {
          console.log("usePost response:", response, success);
          setIsSuccessed(success);
          try {
            const parsedResponse = schema.parse(response);
            setResponse(parsedResponse);
          } catch (error) {
            console.error("Error parsing response", error);
          }
          resolve(success);
        });
      });
    });
  };

  return [sendPost, isPending, isSuccessed, response] as const;
}
