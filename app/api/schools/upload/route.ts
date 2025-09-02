import { NextRequest } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as unknown as File | null;

    if (!file) {
      return new Response(JSON.stringify({ error: "No file" }), {
        status: 400,
      });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const dir = path.join(process.cwd(), "public", "schoolImages");
    await fs.mkdir(dir, { recursive: true });

    const ext = file.name?.split(".").pop()?.toLowerCase() || "png";
    const filename = `${Date.now()}-${Math.random()
      .toString(36)
      .slice(2)}.${ext}`;
    const filepath = path.join(dir, filename);

    await fs.writeFile(filepath, buffer);

    const publicPath = `/schoolImages/${filename}`;
    return Response.json({ path: publicPath });
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500 });
  }
}
