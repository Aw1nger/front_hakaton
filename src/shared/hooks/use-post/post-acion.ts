"use server";
import axios from "axios";
import { cookies } from "next/headers";

function parseSetCookie(setCookieStr: string) {
  const parts = setCookieStr.split(";").map((part) => part.trim());
  const [key, value] = parts[0].split("=");

  const cookieObj: Record<string, any> = { key, value };

  parts.slice(1).forEach((part) => {
    const [key, value] = part.split("=");
    cookieObj[key.toLowerCase()] = value || true;
  });

  return cookieObj;
}

export async function postAction<dataType>(url: string, data?: dataType) {
  try {
    const response = await axios.post(`${process.env.API_URL}${url}`, data, {
      withCredentials: true,
      headers: {
        Cookie: `token=${cookies().get("token")?.value}`,
      },
    });

    const setCookieHeader = response.headers["set-cookie"];
    if (setCookieHeader) {
      setCookieHeader.forEach((cookieStr: string) => {
        const parsedCookie = parseSetCookie(cookieStr);
        cookies().set(parsedCookie.key, parsedCookie.value, {
          path: parsedCookie.path || "/",
          expires: parsedCookie.expires
            ? new Date(parsedCookie.expires)
            : undefined,
          httpOnly: !!parsedCookie.httponly,
          secure: !!parsedCookie.secure,
          sameSite: parsedCookie.samesite || "Lax",
        });
      });
    }

    return { response: response.data, success: true };
  } catch (error: any) {
    console.error("Error request", error);
    console.error("Error response", error?.response?.data);

    return {
      response: error?.response?.data,
      success: false,
    };
  }
}
