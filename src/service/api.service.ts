import axios, { AxiosResponse, Method } from "axios";

interface ApiResponse<T> {
  data: T;
  status: number;
}

export const send = async <T>(
  url: string,
  method: Method,
  data?: unknown
): Promise<ApiResponse<T>> => {
  const serverPrefix = "/api/v1";

  try {
    const response: AxiosResponse<T> = await axios({
      url: `${serverPrefix}${url}`,
      method,
      data,
    });
    return response;
  } catch (error) {
    console.error("API call error:", error);
    throw error;
  }
};
