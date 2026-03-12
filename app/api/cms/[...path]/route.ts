import { NextRequest, NextResponse } from "next/server";

const CMS_API_URL =
  process.env.CMS_API_URL ?? "https://cms.1ftt.com/api";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  return proxyRequest(request, await params);
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  return proxyRequest(request, await params);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  return proxyRequest(request, await params);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  return proxyRequest(request, await params);
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  return proxyRequest(request, await params);
}

async function proxyRequest(
  request: NextRequest,
  params: { path: string[] }
) {
  const path = params.path.join("/");
  const search = request.nextUrl.search;
  const targetUrl = `${CMS_API_URL}/${path}${search}`;

  const contentType = request.headers.get("content-type") ?? "";

  // Forward only safe headers; never forward host
  const forwardHeaders: HeadersInit = {
    Accept: request.headers.get("accept") ?? "application/json",
  };

  const authorization = request.headers.get("authorization");
  if (authorization) {
    forwardHeaders["Authorization"] = authorization;
  }

  let body: BodyInit | undefined;
  if (request.method !== "GET" && request.method !== "DELETE") {
    if (contentType.includes("multipart/form-data")) {
      // Let fetch handle the FormData boundary automatically
      const fd = await request.formData();
      body = fd;
      // Don't set Content-Type; fetch will set it with the correct boundary
    } else {
      const raw = await request.text();
      if (raw) {
        body = raw;
        forwardHeaders["Content-Type"] = contentType || "application/json";
      }
    }
  }

  try {
    const upstream = await fetch(targetUrl, {
      method: request.method,
      headers: forwardHeaders,
      body,
      redirect: "follow",
    });

    const responseContentType =
      upstream.headers.get("content-type") ?? "application/json";
    const data = await upstream.arrayBuffer();

    return new NextResponse(data, {
      status: upstream.status,
      headers: {
        "Content-Type": responseContentType,
      },
    });
  } catch (err) {
    console.error("[cms-proxy] upstream error:", err);
    return NextResponse.json(
      { error: "Upstream CMS request failed" },
      { status: 502 }
    );
  }
}
