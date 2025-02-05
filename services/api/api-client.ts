"use server";
import { auth } from "@/auth"; 
import { ApiResponse, SuccessResponse, ErrorResponse } from "@/lib/types";


const apiClient = async <T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<ApiResponse<T>> => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const session = await auth();
  const config = {
    ...options,
    headers: {
      Accept: "application/json",
       Authorization: session?.user.accessToken ? `Bearer ${session.user.accessToken}` : "",
      ...options.headers,
    },
  };

  const response = await fetch(`${baseUrl}${endpoint}`, config);

  // Handle 2xx responses (Success)
  if (response.ok) {
    const data = await response.json();
    return data as SuccessResponse<T>;
  }

  // Handle 4xx responses (Client Errors)
  if (response.status >= 400 && response.status < 500) {
    const errorData = await response.json();
    return errorData as ErrorResponse;
  }

  // Handle 5xx responses (Server Errors)
  if (response.status >= 500) {
    //throw new Error(`حدث خطأ في الخادم: ${response.status} - ${response.statusText}`);
    const errorData = {
      type: "error",
      message: `حدث خطأ في الخادم: ${response.status} - ${response.statusText}`,
      code: response.status,
    };
    return errorData as ErrorResponse;
  }

  // If for some reason the status code isn't recognized
  const errorData = {
    type: "error",
    message: `خطأ غير متوقع: ${response.status}. الرجاء المحاولة لاحقًا.`,
    code: response.status,
  };
  return errorData as ErrorResponse;
};
export default apiClient;