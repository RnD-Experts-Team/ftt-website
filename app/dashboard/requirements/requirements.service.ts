import { HttpClient } from "@/lib/http/http-client";
import { getAuthToken } from "@/lib/http/auth";
import {
  NeedsSectionListResponse,
  NeedsSectionSingleResponse,
  NeedsItemListResponse,
  NeedsItemSingleResponse,
  NeedsItemDeleteResponse,
  UpdateNeedsSectionPayload,
  CreateNeedsItemPayload,
  UpdateNeedsItemPayload,
} from "./requirements";

const http = new HttpClient({
  baseUrl: "/api",
  getToken: getAuthToken,
});

export const RequirementsService = {
  // â”€â”€ Needs Section â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  getNeedsSections: (): Promise<NeedsSectionListResponse> => {
    return http.get<NeedsSectionListResponse>("/needs-sections");
  },

  updateNeedsSection: (
    id: number,
    payload: UpdateNeedsSectionPayload
  ): Promise<NeedsSectionSingleResponse> => {
    return http.post<NeedsSectionSingleResponse>(`/needs-sections/${id}`, payload);
  },

  // â”€â”€ Needs Items â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  getNeedsItems: (): Promise<NeedsItemListResponse> => {
    return http.get<NeedsItemListResponse>("/needs-items/");
  },

  createNeedsItem: (
    payload: CreateNeedsItemPayload
  ): Promise<NeedsItemSingleResponse> => {
    return http.post<NeedsItemSingleResponse>("/needs-items", payload);
  },

  updateNeedsItem: (
    id: number,
    payload: UpdateNeedsItemPayload
  ): Promise<NeedsItemSingleResponse> => {
    return http.put<NeedsItemSingleResponse>(`/needs-items/${id}`, payload);
  },

  deleteNeedsItem: (id: number): Promise<NeedsItemDeleteResponse> => {
    return http.delete<NeedsItemDeleteResponse>(`/needs-items/${id}`);
  },
};
