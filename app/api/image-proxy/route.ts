import { NextRequest, NextResponse } from "next/server";

const ALLOWED_HOSTS = new Set(["localhost", "127.0.0.1", "::1" ,"cms.1ftt.com" ,  "ftt-website-six.vercel.app" , "1ftt.com" ]);

export async function GET(request: NextRequest) {
  const urlParam = request.nextUrl.searchParams.get("url");

  if (!urlParam) {
    return NextResponse.json({ error: "Missing url query parameter" }, { status: 400 });
  }

  let parsed: URL;
  try {
    parsed = new URL(urlParam);
  } catch {
    return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
  }

  const isHttp = parsed.protocol === "http:" || parsed.protocol === "https:";
  const isAllowedHost = ALLOWED_HOSTS.has(parsed.hostname.toLowerCase());
  const isStoragePath = parsed.pathname.startsWith("/storage/");

  if (!isHttp || !isAllowedHost || !isStoragePath) {
    return NextResponse.json({ error: "URL is not allowed" }, { status: 400 });
  }

  try {
    const upstream = await fetch(parsed.toString(), {
      cache: "no-store",
    });

    if (!upstream.ok) {
      return NextResponse.json(
        { error: `Upstream request failed with status ${upstream.status}` },
        { status: 502 }
      );
    }

    const contentType = upstream.headers.get("content-type") || "application/octet-stream";
    const bytes = await upstream.arrayBuffer();

    return new NextResponse(bytes, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "no-store",
      },
    });
  } catch {
    return NextResponse.json({ error: "Failed to fetch upstream image" }, { status: 502 });
  }
}
