import { useState, useTransition } from "react";
import { z, ZodSchema } from "zod";
import { getAction } from "./get-action";

export function useGet<queryType>(url: string, schema: ZodSchema) {
  const [isPending, startTransition] = useTransition();
  const [isSuccessed, setIsSuccessed] = useState<boolean>(true);
  const [response, setResponse] = useState<z.infer<typeof schema>>();
  const [headers, setHeaders] = useState<any>();

  const sendGet = async (query?: queryType): Promise<boolean> => {
    return new Promise((resolve) => {
      startTransition(async () => {
        await getAction<queryType>(url, query).then(
          ({ response, headers, success }) => {
            console.log("useGet response:", response, success);
            setIsSuccessed(success);
            setHeaders(headers);
            try {
              schema.parse(response);
              setResponse(schema.parse(response));
            } catch (error) {
              console.error("Error parsing response", error);
            }
            resolve(success);
          },
        );
      });
    });
  };

  return [sendGet, isPending, isSuccessed, response, headers] as const;
}
