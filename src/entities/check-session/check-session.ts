"use server";
import { AuthInterface } from "@/shared/providers/auth-provider";
import axios from "axios";
import { cookies } from "next/headers";

export const getSession: () => Promise<AuthInterface> = async () => {
  try {
    const response = await axios.get(`${process.env.API_URL}/api/users/get`, {
      headers: {
        Cookie: `token=${cookies().get("token")?.value}`,
      },
    });

    return {
      auth: response.data.status,
      user: response.data.user,
    };
  } catch {
    return {
      auth: true,
      user: {
        id: 1,
        firstname: "Nikita",
        lastname: "Aw1nger",
        email: "aw1nger@yandex.ru",
      },
    };
  }
};
