const DEFAULT_SITE_URL = "https://ftt1.com";

const trimTrailingSlashes = (value: string): string => value.replace(/\/+$/, "");

const toAbsoluteUrl = (value: string): string => {
  if (/^https?:\/\//i.test(value)) {
    return value;
  }

  return `https://${value}`;
};

export const getSiteUrl = (): string => {
  const candidate =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.SITE_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    process.env.VERCEL_URL ??
    DEFAULT_SITE_URL;

  try {
    const normalized = toAbsoluteUrl(candidate.trim());
    return trimTrailingSlashes(new URL(normalized).origin);
  } catch {
    return DEFAULT_SITE_URL;
  }
};