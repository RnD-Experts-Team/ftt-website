import { HttpClient } from "@/lib/http/http-client";
import { getAuthToken } from "@/lib/http/auth";
import {
  BenefitsSectionListResponse,
  BenefitsSectionSingleResponse,
  BenefitsItemListResponse,
  BenefitsItemSingleResponse,
  BenefitsItemDeleteResponse,
  UpdateBenefitsSectionPayload,
  CreateBenefitsItemPayload,
  UpdateBenefitsItemPayload,
} from "./benefits";

const http = new HttpClient({
  baseUrl: "/api",
  getToken: getAuthToken,
});

export const BenefitsService = {
  // â”€â”€ Benefits Section â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  getBenefitsSections: (): Promise<BenefitsSectionListResponse> => {
    return http.get<BenefitsSectionListResponse>("/benefits-sections/");
  },

  updateBenefitsSection: (
    id: number,
    payload: UpdateBenefitsSectionPayload
  ): Promise<BenefitsSectionSingleResponse> => {
    return http.post<BenefitsSectionSingleResponse>(
      `/benefits-sections/${id}`,
      payload
    );
  },

  // â”€â”€ Benefits Items â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  getBenefitsItems: (): Promise<BenefitsItemListResponse> => {
    return http.get<BenefitsItemListResponse>("/benefits-items/");
  },

  createBenefitsItem: (
    payload: CreateBenefitsItemPayload
  ): Promise<BenefitsItemSingleResponse> => {
    return http.post<BenefitsItemSingleResponse>("/benefits-items", payload);
  },

  updateBenefitsItem: (
    id: number,
    payload: UpdateBenefitsItemPayload
  ): Promise<BenefitsItemSingleResponse> => {
    return http.put<BenefitsItemSingleResponse>(
      `/benefits-items/${id}`,
      payload
    );
  },

  deleteBenefitsItem: (
    id: number
  ): Promise<BenefitsItemDeleteResponse> => {
    return http.delete<BenefitsItemDeleteResponse>(`/benefits-items/${id}`);
  },
};
