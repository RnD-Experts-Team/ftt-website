import { HttpClient } from "@/lib/http/http-client";
import { getAuthToken } from "@/lib/http/auth";
import {
  TemptationSectionListResponse,
  TemptationSectionSingleResponse,
  TemptationRequirementSingleResponse,
  TemptationRequirementDeleteResponse,
  UpdateTemptationSectionPayload,
  CreateTemptationRequirementPayload,
  UpdateTemptationRequirementPayload,
} from "./pay-growth";

const http = new HttpClient({
  baseUrl: "/api",
  getToken: getAuthToken,
});

export const PayGrowthService = {
  // â”€â”€ Temptation Section â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  getTemptationSections: (): Promise<TemptationSectionListResponse> => {
    return http.get<TemptationSectionListResponse>("/temptation-sections/");
  },

  updateTemptationSection: (
    id: number,
    payload: UpdateTemptationSectionPayload
  ): Promise<TemptationSectionSingleResponse> => {
    const formData = new FormData();
    (Object.keys(payload) as (keyof UpdateTemptationSectionPayload)[]).forEach(
      (key) => {
        const val = payload[key];
        if (val === undefined || val === null) return;
        if (val instanceof File) {
          formData.append(key, val);
        } else {
          formData.append(key, String(val));
        }
      }
    );
    return http.post<TemptationSectionSingleResponse>(
      `/temptation-sections/${id}`,
      formData
    );
  },

  // â”€â”€ Temptation Requirements â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  createTemptationRequirement: (
    payload: CreateTemptationRequirementPayload
  ): Promise<TemptationRequirementSingleResponse> => {
    return http.post<TemptationRequirementSingleResponse>(
      "/temptation-requirements/",
      payload
    );
  },

  updateTemptationRequirement: (
    id: number,
    payload: UpdateTemptationRequirementPayload
  ): Promise<TemptationRequirementSingleResponse> => {
    return http.put<TemptationRequirementSingleResponse>(
      `/temptation-requirements/${id}`,
      payload
    );
  },

  deleteTemptationRequirement: (
    id: number
  ): Promise<TemptationRequirementDeleteResponse> => {
    return http.delete<TemptationRequirementDeleteResponse>(
      `/temptation-requirements/${id}`
    );
  },
};
