"use server";
import axios from "axios";
import { cookies } from "next/headers";

export async function Logout(): Promise<{ message: string }> {
  try {
    const response = await axios.post(
      "/api/users/logout",
      {},
      { withCredentials: true },
    );

    if (response.status !== 200) {
      throw new Error("Failed to logout");
    }

    cookies().delete("token");
    return {
      message: "Вы вышли из аккаунта!",
    };
  } catch (error) {
    console.error("Logout failed", error);
    return {
      message: "Ошибка выхода из аккаунта!",
    };
  }
}
