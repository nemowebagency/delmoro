import { readFile } from "node:fs/promises";
import path from "node:path";

const EXPERIENCE_SLUGS = new Set(["by-sea", "at-the-table", "stay", "private-sicily"]);

const MIME_BY_EXT: Record<string, string> = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
};

export async function GET(
  _req: Request,
  {
    params,
  }: {
    params: Promise<{ path: string[] }>;
  },
) {
  const { path: parts } = await params;
  if (!parts?.length) return new Response("Not found", { status: 404 });

  const [folder, ...rest] = parts;

  /** Gallerie esperienze: `video/imagese/{slug}/{file}` → `/media/imagese/{slug}/{file}` */
  if (folder === "imagese") {
    if (rest.length !== 2) return new Response("Not found", { status: 404 });
    const slug = rest[0] ?? "";
    const filename = decodeURIComponent(rest[1] ?? "");
    if (!EXPERIENCE_SLUGS.has(slug)) return new Response("Not found", { status: 404 });
    if (
      !filename ||
      filename.includes("..") ||
      filename.includes("/") ||
      filename.includes("\\") ||
      filename.startsWith(".")
    ) {
      return new Response("Not found", { status: 404 });
    }
    const ext = path.extname(filename).toLowerCase();
    const mime = MIME_BY_EXT[ext];
    if (!mime) return new Response("Unsupported", { status: 415 });
    const absolute = path.join(process.cwd(), "video", "imagese", slug, filename);
    try {
      const buf = await readFile(absolute);
      return new Response(buf, {
        headers: {
          "content-type": mime,
          "cache-control": "public, max-age=31536000, immutable",
        },
      });
    } catch {
      return new Response("Not found", { status: 404 });
    }
  }

  // Only allow known folders and prevent path traversal.
  if (!["img", "gabriele", "motors"].includes(folder)) {
    return new Response("Not found", { status: 404 });
  }
  if (rest.length !== 1) return new Response("Not found", { status: 404 });

  const filename = rest[0] ?? "";
  if (
    filename.includes("..") ||
    filename.includes("/") ||
    filename.includes("\\") ||
    filename.startsWith(".")
  ) {
    return new Response("Not found", { status: 404 });
  }

  const ext = path.extname(filename).toLowerCase();
  const mime = MIME_BY_EXT[ext];
  if (!mime) return new Response("Unsupported", { status: 415 });

  const absolute = path.join(process.cwd(), "video", folder, filename);
  try {
    const buf = await readFile(absolute);
    return new Response(buf, {
      headers: {
        "content-type": mime,
        // Long cache for local assets. Change filename to bust cache.
        "cache-control": "public, max-age=31536000, immutable",
      },
    });
  } catch {
    return new Response("Not found", { status: 404 });
  }
}

