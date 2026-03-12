import { HttpClient } from "@/lib/http/http-client";
import { getAuthToken } from "@/lib/http/auth";

const httpClient = new HttpClient({
  baseUrl: "/api/cms",
  getToken: () => getAuthToken(),
});

export interface UpdateUserPayload {
  email: string;
  password?: string;
  name?: string;
}

export interface UserResponse {
  message: string;
  user: {
    id: number;
    name: string;
    email: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
  };
}

export async function updateUser(
  payload: UpdateUserPayload
): Promise<UserResponse> {
  return httpClient.requestRaw<UserResponse>({
    url: "/user/update",
    method: "PUT",
    data: payload,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}
