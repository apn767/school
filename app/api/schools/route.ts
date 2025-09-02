import { prisma } from "@/lib/db";
import { schoolSchema } from "@/lib/validators";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q") || "";
  const state = searchParams.get("state") || "";
  const sort = searchParams.get("sort") || "new";
  const where: any = {};
  if (q) {
    where.OR = [{ name: { contains: q } }, { city: { contains: q } }];
  }
  if (state) {
    where.state = { contains: state };
  }
  const orderBy =
    sort === "name"
      ? { name: "asc" as const }
      : sort === "city"
      ? { city: "asc" as const }
      : { createdAt: "desc" as const };
  const data = await prisma.school.findMany({ where, orderBy, take: 50 });
  return Response.json({ data });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Incoming body:", body);
    const parsed = schoolSchema.parse(body);
    const created = await prisma.school.create({ data: parsed });
    return Response.json({ ok: true, id: created.id });
  } catch (e: any) {
    console.error("POST /schools error:", e);
    return new Response(JSON.stringify({ ok: false, error: e.message }), {
      status: 400,
    });
  }
}
