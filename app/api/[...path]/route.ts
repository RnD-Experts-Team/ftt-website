import { NextRequest, NextResponse } from "next/server";

const CMS_BASE_URL =
  process.env.CMS_API_URL ??
  process.env.NEXT_PUBLIC_API_URL ??
  "https://cms.1ftt.com/api";

const FORWARDED_REQUEST_HEADERS = [
  "accept",
  "accept-language",
  "authorization",
  "content-type",
  "origin",
  "referer",
  "user-agent",
] as const;

type RouteContext = {
  params: Promise<{ path?: string[] }>;
};

function buildTargetUrl(pathSegments: string[] | undefined, request: NextRequest): URL {
  const safeBase = CMS_BASE_URL.replace(/\/+$/, "");
  const joinedPath = (pathSegments ?? []).map(encodeURIComponent).join("/");
  const url = new URL(joinedPath ? `${safeBase}/${joinedPath}` : safeBase);

  // Preserve the incoming query string.
  request.nextUrl.searchParams.forEach((value, key) => {
    url.searchParams.append(key, value);
  });

  return url;
}

function buildForwardHeaders(request: NextRequest): Headers {
  const headers = new Headers();

  FORWARDED_REQUEST_HEADERS.forEach((headerName) => {
    const headerValue = request.headers.get(headerName);
    if (headerValue) {
      headers.set(headerName, headerValue);
    }
  });

  return headers;
}

async function proxyRequest(request: NextRequest, context: RouteContext): Promise<NextResponse> {
  const { path } = await context.params;
  const targetUrl = buildTargetUrl(path, request);

  const method = request.method.toUpperCase();
  const hasBody = method !== "GET" && method !== "HEAD";

  const upstreamResponse = await fetch(targetUrl, {
    method,
    headers: buildForwardHeaders(request),
    body: hasBody ? request.body : undefined,
    redirect: "follow",
    cache: "no-store",
  });

  const responseHeaders = new Headers();

  // Copy only safe response headers.
  ["content-type", "cache-control", "etag", "last-modified"].forEach((headerName) => {
    const value = upstreamResponse.headers.get(headerName);
    if (value) {
      responseHeaders.set(headerName, value);
    }
  });

  return new NextResponse(upstreamResponse.body, {
    status: upstreamResponse.status,
    statusText: upstreamResponse.statusText,
    headers: responseHeaders,
  });
}

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest, context: RouteContext): Promise<NextResponse> {
  return proxyRequest(request, context);
}

export async function POST(request: NextRequest, context: RouteContext): Promise<NextResponse> {
  return proxyRequest(request, context);
}

export async function PUT(request: NextRequest, context: RouteContext): Promise<NextResponse> {
  return proxyRequest(request, context);
}

export async function PATCH(request: NextRequest, context: RouteContext): Promise<NextResponse> {
  return proxyRequest(request, context);
}

export async function DELETE(request: NextRequest, context: RouteContext): Promise<NextResponse> {
  return proxyRequest(request, context);
}
