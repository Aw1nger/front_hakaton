"use server";

import axios from "axios";
import { cookies } from "next/headers";

export async function getAction<queryType>(url: string, query?: queryType) {
  try {
    const response = await axios.get(`${process.env.API_URL}${url}`, {
      params: query,
      headers: {
        Cookie: `token=${cookies().get("token")?.value}`,
      },
    });

    const headers = response.headers as any;
    const plainHeaders = Object.fromEntries(Object.entries(headers));

    return {
      response: response.data,
      headers: plainHeaders,
      success: true,
    };
  } catch (error: any) {
    console.error("Error response", error?.response?.data);

    return {
      response: error?.response?.data,
      headers: null,
      success: false,
    };
  }
}
