import { PrismaClient, Prisma } from "@prisma/client";
import { schoolSchema } from "@/lib/validators";

export const dynamic = "force-dynamic";

let prisma: PrismaClient;

function getPrisma() {
  if (!prisma) prisma = new PrismaClient();
  return prisma;
}

export async function GET(req: Request) {
  const prisma = getPrisma();
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q") || "";
  const state = searchParams.get("state") || "";
  const sort = searchParams.get("sort") || "new";

  const where: Prisma.SchoolWhereInput = {};
  if (q) where.OR = [{ name: { contains: q } }, { city: { contains: q } }];
  if (state) where.state = { contains: state };

  const orderBy =
    sort === "name"
      ? { name: "asc" as const }
      : sort === "city"
      ? { city: "asc" as const }
      : { createdAt: "desc" as const };

  const data = await prisma.school.findMany({ where, orderBy, take: 50 });
  return new Response(JSON.stringify({ data }));
}

export async function POST(req: Request) {
  const prisma = getPrisma();
  try {
    const body = await req.json();
    const parsed = schoolSchema.parse(body);
    const created = await prisma.school.create({ data: parsed });
    return new Response(JSON.stringify({ ok: true, id: created.id }));
  } catch (e: unknown) {
    if (e instanceof Error) {
      return new Response(JSON.stringify({ ok: false, error: e.message }), {
        status: 400,
      });
    }
    return new Response(JSON.stringify({ ok: false, error: "Unknown error" }), {
      status: 400,
    });
  }
}
